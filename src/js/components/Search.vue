<style scoped lang='scss' src="../../css/search.scss">

</style>

<template>
        <div id="search_bg">
            <m-search-tool-component></m-search-tool-component>
            <div class="title">       
                <div class="text">您搜尋”{{$route.query.name}}”結果如下</div>
            </div>
            <div class="search_content">
                <search-tool-component ></search-tool-component>
                
                <div class="empty_content" v-show="!(list.length > 0)">
                    唉啊～</br>
                    您搜尋的對象目前沒有任何給勵
                </div>
                <div class="data_content" v-show="list.length > 0">
                    <img :src="item.img" alt="" v-for="item in list">
                </div>
                <div class="btn">
                    <router-link to="/index" class="index_btn" v-show="!(list.length > 0)"></router-link>
                    <router-link to="/message" class="message_btn"></router-link>
                </div>
            </div>      
        </div>
</template>

<script src="../js/search.js">
</script>