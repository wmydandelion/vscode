<template>
<div id="book">
    <common-header></common-header>
    <swipe class="my-swipe">
        <swipe-item class="item1"></swipe-item>
        <swipe-item class="item2"></swipe-item>
        <swipe-item class="item3"></swipe-item>
    </swipe>
    <common-footer></common-footer>
</div>
</template>
<script>
    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'
    import {Swipe,SwipeItem} from 'vue-swipe'
export default{
    name : 'header',
    data(){
        return {}
     },
    mounted(){
       this.$store.dispatch('changeTitle',['book','rgb(121, 85, 72)']);
    },
    components : {
        CommonHeader,
        CommonFooter,
        Swipe,
        SwipeItem
    }
}

</script>


<style>
@import '../../assets/css/vue-swipe.css';
</style>
