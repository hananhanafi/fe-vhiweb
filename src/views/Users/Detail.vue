<template>
    <v-card
        v-if="detail"
        class="mx-auto"
        max-width="434"
        rounded="0"
    >
        <div class="flex">
            <v-avatar
                color="grey"
                size="160"
                rounded="0"
            >
                <v-img cover :src="detail.avatar"></v-img>
            </v-avatar>
            <div>
                <v-list-item
                    title="Email"
                    :subtitle="detail.email"
                ></v-list-item>
                <v-list-item
                    title="Name"
                    :subtitle="detail.first_name + ' ' + detail.last_name"
                ></v-list-item>
            </div>
        </div>
    </v-card>
    <div class="text-center my-8">
        <v-btn @click="goBack">
            Back
        </v-btn>
    </div>
</template>

<script lang="ts">
import UserService from '@/services/UserService';

export default {
    data() {
        return {
            detail: null as any
        }
    },
    created() {
        if(this.$route.params.id){
            this.getDetail(this.$route.params.id)
        }else{
            this.goBack()
        }
    },
    methods: {
        async getDetail(id: any) {
            await UserService.getUserDetail(id)
            .then((response: any)=> {
                this.detail = response.data.data
            })
            .catch(()=>{
                this.goBack()
            })
        },
        goBack() {
            this.$router.push('/users')
        }
    },
}
</script>

<style lang="scss">
</style>