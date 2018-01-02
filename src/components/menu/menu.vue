<template lang="html">
    <div class="main-menu">
        <i class="ion-android-funnel"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: ['title']
}
</script>
