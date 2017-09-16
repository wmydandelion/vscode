<template>
  <div class="photo">
      <common-header></common-header>
      <v-touch class="detail" :style="obj" @swipeleft="left" @swiperight="right">
      </v-touch>
  </div>
</template>


<script>
    import CommonHeader from '@/components/common/header'
    export default{
        name : 'header',
        data(){
            return {
                index : this.$router.params.index
            }
        },
        computed :{
            obj(){
                return {
                    background : 'url('+this.$store.state.photoData[this.index].src+')no-repeat center /containe #000'
                }
            }
        },
        methods :{
            left(){
                this.index++;
            },
            right(){
                this.index --;
            }
        },
        mounted(){
            this.$store.dispatch('changeTitle',['photo','rgb(63,81,181)','<']);
        },
        components:{
            CommonHeader
        }
    }
</script>


<style scoped>
.detail{
    position : absolute;
    top : 1rem;
    bottom : 0;
    width : 100%;

}

</style>
