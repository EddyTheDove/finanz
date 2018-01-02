<template>
    <section>
        <transition
            :duration="100"
            name="custom-classes-transition"
            enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
