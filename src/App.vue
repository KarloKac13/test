<template>
  <!-- <the-input ></the-input>
  <get-all-users></get-all-users> -->
  <component @switchComp="loginButton" :is="selectedComponent" ></component>
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
      selectedComponent: "TheInput"
    }
  },
  methods: {
    // test 3
    loginButton(cmp) {
      this.selectedComponent = cmp
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