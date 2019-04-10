<style lang='scss' src="../../css/app.scss">

</style>

<template>
<div class="app-root">

    <!--<loading></loading>-->
    
    <a href="/" class="logo_3m" @click="menu_close"></a>

    <router-link to="/Receipt" v-show="receipt_ctr" onclick="threeMGA('/diy/receipt_btn.html');" class="receipt"></router-link>
    
    <a href="javascript:;" class="menu_open" @click="menu_show"></a>

    <transition name="fade" mode="out-in">
        <menu-component v-show="menu_ctrl" @menu_close="menu_close"></menu-component>
    </transition>

   <transition name="fade" mode="out-in">
        <remind-component v-show="remind_ctrl"  @remind_close="remind_close"></remind-component>
    </transition>

    <main>
        <transition name="fade" mode="out-in">
            <router-view  class="view"></router-view>
        </transitoin>
    </main>
    
</div>    
</template>

<script src="../js/app.js">
</script>