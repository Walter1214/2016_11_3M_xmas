<style scoped lang='scss' src="../../css/prize.scss">

</style>

<template>
   <div id="prize_bg">
            <div class="title"></div>
            <div class="prize_space">
                <div class="one_title"></div>
                <a href="https://tw.rcv.mall.yahoo.com/rcv/askEcoupon?s=QHyyCKz1BdYmk_CJrg--" onclick="threeMGA('/message/prize/coupon_btn.html');" class="coupon_btn"  target="_blank"></a>
                <div class="line"></div>
                <div class="two_title"></div>
                <ul class="content_2">
                    <li>
                        <label for="name">姓　　名</label>
                        <input id="name" type="text" v-model="name">
                    </li>
                    <li>
                        <label for="phone">手　　機</label>
                        <input id="phone" type="text" v-model="phone">
                    </li>
                    <li>
                        <label for="email">電子信箱</label>
                        <input id="email" type="text" v-model="email">
                    </li>
                    <li class="captcha_place">
                        <label for="captcha">驗證碼</label>
                        <input id="captcha" type="text" v-model="code">
                        <img :src="codeUrl" alt="">
                    </li>
                    <li class="read_place">
                        <input id="read" type="checkbox" v-model="method">
                        <label for="read">我已閱讀本活動之<a :href="RuleUrl" target="_blank">活動辦法、隱私權聲明</a>，且同意遵守前述任一事項及說明而參與活動。</label>
                    </li>
                </ul>
                <a href="javascript:;" @click="sendPowerRegistration" onclick="threeMGA('/message/prize/pdsend_btn.html');" class="pdsend_btn"></a>
            </div>
        </div>
</template>

<script src="../js/prize.js">
</script>