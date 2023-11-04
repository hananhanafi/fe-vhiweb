<template>
    <the-header/>
    <slot/>
</template>


<script lang="ts">
import TheHeader from '@components/TheHeader.vue'

export default {
    name: 'AppLayout',
    components: {
        TheHeader
    },
}
</script>
