<template lang="html">
    <div class="_slideout" :class="{ isOpen: isOpen }">
        <div class="_slideout-brand">
            Menu
        </div>

        <ul class="_slideout-menu">
            <li v-for="m in menu">
                <a href @click="openLink(m)">{{ m.label }}</a>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'sidebar',

    data: () => ({
        isOpen: false,
        menu: [
            { label: 'Home', name: 'home', url: '/' },
            { label: 'Monthly Report', name: 'monthly', url: '/monthly' }
        ]
    }),

    mounted () {
        window.eventBus.$on('sidebar:open', () => this.open())
        window.eventBus.$on('sidebar:close', () => this.close())
        window.eventBus.$on('sidebar:toggle', () => this.toggle())
    },

    methods: {
        open () {
            this.openerText = 'Close';
            this.isOpen = true;
        },

        close () {
            this.openerText = 'Open';
            this.isOpen = false;
        },

        toggle () {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        openLink (link) {
            this.close()
            this.$router.push(link)
        }
    }

}
</script>
