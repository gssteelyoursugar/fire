<template>
  <div>
    <header-navbar />
    <my-footer/>
  </div>
</template>

<script>
  import HeaderNavbar from '../../components/HeaderNavbar'
  import Footer from '../../components/Footer'
  export default {
    name: "AboutIndex",
    data(){
      return{

      }
    },
    methods: {
    },
    components:{
      HeaderNavbar,
      MyFooter: Footer
    }
  }
</script>
