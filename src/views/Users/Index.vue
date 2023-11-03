<template>
    <div>
        Show user list here
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            lsit: []
        }
    },
    async mounted() {
        await this.$store.dispatch('users/fetchData')
        console.log(this.$store.state)
    },
}
</script>

<style lang="scss">
</style>