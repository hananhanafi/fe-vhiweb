<template>
    <v-sheet class="login-page p-12 bg-teal" rounded>
        <v-card class="card mx-auto px-6 py-8" max-width="360">
            <v-form
                v-model="formValidate"
                @submit.prevent="onSubmit"
            >
                <v-text-field
                  v-model="formInput.email"
                  type="email"
                  :readonly="loading"
                  :rules="[$rules.required,$rules.email]"
                  class="mb-2"
                  label="Email"
                ></v-text-field>

                <v-text-field
                  v-model="formInput.password"
                  :type="showPassword ? 'text' : 'password'"
                  :readonly="loading"
                  :rules="[$rules.required]"
                  label="Password"
                  placeholder="Enter your password"
                  :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="toggleShowPassword"
                ></v-text-field>

                <br>
                <v-btn
                  :disabled="!formValidate"
                  :loading="loading"
                  block
                  color="teal"
                  size="large"
                  type="submit"
                  variant="elevated"
                >
                Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script lang="ts">
  export default {
    data: () => ({
      formValidate: false,
      formInput: {
        email: null,
        password: null,
      },
      loading: false,
      showPassword: false,
    }),

    methods: {
      async onSubmit() {
        if (!this.formValidate) return

        this.loading = true
        await this.$store.dispatch('auth/login',this.formInput)
        .then(()=>{
          this.$router.push('/users')
        })
        this.loading = false
      },
      toggleShowPassword() {
        this.showPassword = !this.showPassword
      }
    },
  }
</script>

<style lang="scss">
@import "@assets/style.scss";
.login-page {
    @include flexContainer(column, center, center);
    min-height: 100vh;
    width: 100%;

    &>.card{
      width: 50%;
    }
    @media (max-width: $layout-breakpoint-small) {
      &>.card{
        width: 100%;
      }
    }
}
</style>