<template lang="html">
    <div class="main-menu">
        <i class="ion-android-funnel" @click="toggleSidebar()"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: ['title'],

    methods: {
        toggleSidebar () {
            window.eventBus.$emit('sidebar:toggle')
        }
    }
}
</script>
