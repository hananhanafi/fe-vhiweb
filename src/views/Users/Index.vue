<template>
    <div class="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <template
            v-for="(item) in userList"
            :key="item.id"
        >
            <div class="cursor-pointer" @click="goToDetail(item.id)">
                <v-card
                    class="mx-auto cursor-pointer	"
                    max-width="400"
                >
                    <v-img
                        class="align-end text-white"
                        height="200"
                        :src="item.avatar"
                        cover
                    >
                        <v-card-title class="font-bold bg-sky-100/50">
                            {{ item.first_name + ' ' + item.last_name }}
                        </v-card-title>
                    </v-img>
                </v-card>
                <br>
            </div>
        </template>
    </div>
    <div class="text-center flex align-items-center">
        <v-btn 
            v-if="params.page < totalPages" 
            @click="loadMore" 
            :disabled="loading"
            :loading="loading" 
            class="m-auto"
        >
            Load more
        </v-btn>
    </div>
</template>

<script lang="ts">
import UserService from '@/services/UserService';

export default {
    data: () => ({
        loading: false,
        page: 1,
        itemList: [],
        params: {
            per_page: 4,
            page: 1
        },
        userList: [] as any,
        totalPages: 1
    }),
    created() {
        this.userList = []
        this.getUserList()
    },
    methods: {
        async getUserList() {
            this.loading = true;
            await UserService.getUserList(this.params)
            .then((response: any)=> {
                const userListResponse = response.data.data
                this.userList = [].concat(this.userList, userListResponse);
                this.totalPages = response.data.total_pages
            })
            this.loading = false;
        },
        loadMore() {
            this.params.page++
            this.getUserList()
        },
        goToDetail(id: number) {
            this.$router.push('/users/'+id)
        }
    },
}
</script>

<style lang="scss">
</style>