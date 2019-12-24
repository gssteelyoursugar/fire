<template>
  <div class="login-group">
    <header-navbar  />
    <login-form />
  </div>
</template>

<script>
  import HeaderNavbar from '../../components/HeaderNavbar'
  import LoginForm  from './component/LoginForm'

  export default {
    name: "LoginIndex",
    data() {
      return {

      }
    },
    methods: {
    },
    components: {
      HeaderNavbar,
      LoginForm
    }
  }
</script>

<style lang="stylus" scoped>
</style>
