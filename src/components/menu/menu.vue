<template lang="html">
    <div class="main-menu">
        <span @click="toggleSidebar()">
            <i class="ion-android-funnel" v-show="!isOpen"></i>
            <i class="ion-android-close" v-show="isOpen"></i>
        </span>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: ['title'],

    computed: {
        isOpen () {
            return this.$store.state.sidebar.isOpen
        }
    },

    methods: {
        toggleSidebar () {
            this.$store.commit('sidebar/SIDEBAR_TOGGLE')
        }
    }
}
</script>
