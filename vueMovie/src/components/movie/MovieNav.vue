<template>
   <ul id="nav">
    <li>top250</li>
    <li>正在热映</li>
    <li>即将上映</li>
  </ul>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>


<style scoped>
  @import '../../assets/css/reset.css';
  #nav{
    height: 1rem;
    display: flex;
    background: rgb(33, 150, 243);
    position: fixed;
    top:1rem;
    width: 100%;
  }
  #nav li{
    flex: 1;
    color: #ccc;
    text-align: center;
    line-height: 1rem;
  }
</style>
