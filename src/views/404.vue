<template>
    <v-card text="404 Page Not Found" variant="tonal" class="page-centered"></v-card>
</template>

<style lang="scss">
@import "@assets/style.scss";
.page-centered {
    @include flexContainer(row, center, center);
    min-height: 100vh;
    text-align: center;
}
</style>