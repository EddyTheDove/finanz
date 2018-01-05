<template lang="html">
    <div class="_modal" :class="{ isOpen: isOpen }">
        <div class="_modal-container">
            <div class="_modal-header">
                <div class="_close" @click="close()">
                    <i class="ion-android-close"></i>
                </div>

                <div class="_heading">
                    Add Income
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'incomeModal',

    data: () => ({
        isOpen: false
    }),

    mounted () {
        window.eventBus.$on('incomeModal:open', () => this.open())
        window.eventBus.$on('incomeModal:close', () => this.close())
    },

    methods: {
        open () {
            this.isOpen = true
        },

        close () {
            this.isOpen = false
        }
    }
}
</script>
