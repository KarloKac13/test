<template>
  <!-- Added router and somekind of basic nav guard -->
  <router-view></router-view>
</template>

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