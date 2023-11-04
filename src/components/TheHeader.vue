<template>
    <div class="text-right my-4">
        <v-btn 
            @click="()=>{ $store.dispatch('auth/logout').then(()=>{$router.push('/')}) }">
            Logout
        </v-btn>
    </div>
</template>
  
<script lang="ts">
export default {
    name: 'TheHeader',
}
</script>

<style scoped>
</style>
  