<template>
    <section>
        <Sidebar></Sidebar>

        <transition
            :duration="100"
            name="custom-classes-transition"
            enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>

        <IncomeModal></IncomeModal>
    </section>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },

    methods: {
        closeSidebar () {
            console.log('Closing the sidebar...')
            this.$store.commit('sidebar/SIDEBAR_CLOSE')
        }
    }
}
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
