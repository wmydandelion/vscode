<template>
<div id="movie">
    <common-header></common-header>
    <movie-nav></movie-nav>
    <router-view></router-view>
    <common-footer></common-footer>
</div>
</template>
<script>
    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'
    import MovieNav from '@/components/movie/MovieNav'
    import MovieTop250 from '@/components/movie/MovieTop250'
export default{
    name : 'header',
    data(){
        return {}
    },
    components : {
        CommonHeader,
        CommonFooter,
        MovieNav,
        MovieTop250
    }
}



</script>