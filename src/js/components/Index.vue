<style scoped lang='scss' src='../../css/index.scss'>

</style>


<template>

    <div id="index_bg">
        <div class="title" :class="{move: (pageNumber > 2 || treeBottom)}">
            <router-link to="/message" class="go_message" onclick="threeMGA('/index_btn1.html');"></router-link>
        </div>
        <div class="point">
            <span class="yellow_line" :style="pointStyle"></span>
            <span class="first">{{firstModel}}</span>
            <span class="second">{{secondModel}}</span>
            <span class="third">{{thirdModel}}</span>
            <span class="finish">{{finishModel}}</span>
        </div>
        <div href="javascript:;" class="bar">
            {{totalcount}}
        </div>
        <a href="javascript:;" class="top_scroll" v-show="treeBottom && notInBottom"　@click="goTop"></a>
        <a href="javascript:;" class="scroll" @click="powerList"></a>
        <div class="tree_space" ref='tree' :style='treeStyle'>

            <div class="star"></div>
            <div class="level" v-for="(list,index,key) in treeList">
                <div class="three" v-if="list.length == 3">
                    <a class="candle" ></a>
                    <a class="crutch"></a>
                    <a class="flag"></a>
                    <a class="snow"></a>
                </div>
                <div class="thirteen" v-if="list.length == 14">

                    <a class="crutch_1" v-show="list[13] == 1"></a>
                    <a class="boat_1" v-show="list[13] == 1"></a>


                    <a class="candle_2" v-show="list[13] == 2"></a>
                    <a class="flag_2" v-show="list[13] == 2"></a>
                    <a class="snow_2" v-show="list[13] == 2"></a>

                    <a class="candle_3" v-show="list[13] == 3"></a>

                    <a class="crutch_4" v-show="list[13] == 4"></a>
                    <a class="flag_4" v-show="list[13] == 4"></a>
                    <a class="snow_4" v-show="list[13] == 4"></a>
                </div>
                
                <a href="javascript:;" v-for="(item,index) in list" :class="colorClass(item)" v-if="index<13" @click="popupShow(item)" v-on:mouseover="mouseOver(item, $event)" v-on:mouseout="mouseOut">
                </a>
            </div>
            <div class="bottom" v-show="treeBottom">
                <div class="column"></div>
            </div>
            <span class="name" :style="xyStylp" :class="{in :inStyle}">TO：{{name}}</span>
        </div>


        <transition name="fade" mode="out-in">
            <popup-component v-show="popup_ctrl" :Imgurl="Imgurl" @popup_close="popupClose"></popup-component>
        </transition>
        
        <search-tool-component></search-tool-component>
        
        <m-search-tool-component></m-search-tool-component>
    </div>

</template>

<script src="../js/index.js">
</script>