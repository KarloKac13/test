<template>
  <!-- Managed to refactor more code
  One issue left: 

  Fetch GET not fixed. It still gets executed before POST sometimes
  For loop in getAllUsers is not displayed properly -->

  <the-input @loginSuccess="loginSuccess"></the-input>
  <get-all-users v-if="isLoggedIn"></get-all-users>
</template>

<script>
import TheInput from "./components/Input.vue";
import getAllUsers from "./components/getAllUsers.vue"

export default {
  components: {
    TheInput,
    getAllUsers
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    loginSuccess() {
      console.log('login success');
      this.isLoggedIn = true;
    }
  }
};
</script>

<style>
@font-face{
        font-family: 'Top_Modern';
        src: url('Top Modern.ttf');
    }

html, body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    background-color: #5906E6;
    font-family: Top_Modern;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>