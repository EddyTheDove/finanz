<template lang="html">
    <div class="_slideout" :class="{ isOpen: isOpen }">
        <div class="_slideout-brand" @click="close()">
            Close
        </div>

        <ul class="_slideout-menu">
            <li v-for="m in menu">
                <a @click="openLink(m)">{{ m.label }}</a>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'sidebar',

    data: () => ({
        menu: [
            { label: 'Home', name: 'home', url: '/' },
            { label: 'Monthly Report', name: 'monthly', url: '/monthly' }
        ]
    }),

    computed: {
        isOpen () {
            return this.$store.state.sidebar.isOpen
        }
    },

    methods: {
        open () {
            this.$store.commit('sidebar/SIDEBAR_OPEN')
        },

        close () {
            this.$store.commit('sidebar/SIDEBAR_CLOSE')
        },

        toggle () {
            this.$store.commit('sidebar/SIDEBAR_TOGGLE')
        },

        openLink (link) {
            this.close()
            this.$router.push(link)
        }
    }

}
</script>
