<style scoped lang='scss' src="../../css/diy.scss">

</style>

<template>
        <div id="diy_bg">
            <div class="title">
                <span class="text"></span>
                <span class="man"></span>
            </div>
            <!--<div class="diy_video"></div>-->
            <youtube :video_id="youtube_id" :width="youtubeWidth" :height="youtubeHeight" 
            @ready="youtubeReadyHandler" 
            @state='youtubeStateHandler'
            @progress="youtubeProgressHandler"
            @loaded="youtubeLoadedHandler"
            ></youtube>
            
            <div class="line"></div>
            <div class="diy_list">
                <a href="javascript:;" class="list list_1" :class="{ON:isChannel == 1}" onclick="threeMGA('/diy/1_btn.html');" @click="changeChannel(1);changeVideo('yLVvhYfxiDQ')"></a>
                <a href="javascript:;" class="list list_2" :class="{ON:isChannel == 2}" onclick="threeMGA('/diy/2_btn.html');" @click="changeChannel(2);changeVideo('AaTphJIPJ4c')"></a>
                <a href="javascript:;" class="list list_3" :class="{ON:isChannel == 3}" onclick="threeMGA('/diy/3_btn.html');" @click="changeChannel(3);changeVideo('xzLWc8zyQdE')"></a>
                <a href="javascript:;" class="list list_4" :class="{ON:isChannel == 4}" onclick="threeMGA('/diy/4_btn.html');" @click="changeChannel(4);changeVideo('GZ7RNjvQOUw')"></a>
                <a href="javascript:;" class="list list_5" :class="{ON:isChannel == 5}" onclick="threeMGA('/diy/5_btn.html');" @click="changeChannel(5);changeVideo('M0u96sS-MQ8')"></a>
            </div>
        </div>
</template>

<script src="../js/diy.js">
</script>