<style lang='scss' src="../../css/menu.scss">

</style>


<template>

<div class="menu_bg">
    <a href="javascript:;" class="menu_close" @click="menu_close"></a>

    <div class="menu_logo"></div>

    <div class="menu_list" @click="menu_close">
        <router-link to="/message" class="menu_1"></router-link>
        <router-link to="/diy" class="menu_2"></router-link>
        <router-link to="/goods" class="menu_3"></router-link>
        <router-link to="/rule" class="menu_4"></router-link>
        <router-link to="/receipt" class="menu_5"></router-link>
    </div>

    <div class="share_list">
        <a href="javascript:;" class="share_to_FB" @click="shareToFB" onclick="threeMGA('/fbshare_btn.html');" ></a>
        <a href="https://www.facebook.com/PostitTaiwan/?fref=ts" class="post_Fb" target="_blank"></a>
    </div>
</div>
</template>

<script src="../js/menu.js">
</script>