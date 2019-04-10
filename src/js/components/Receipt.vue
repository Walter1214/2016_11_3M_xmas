<style scoped lang='scss' src="../../css/receipt.scss">

</style>

<template>
        <div id="receipt_bg">
            <div class="title"></div>
            <div class="receipt_space">
                <div class="text"></div>
                <ul class="content_1">
                    
                    <li class="title_1"><img src="../../img/m/receipt/title_1.png" alt=""></li>
                    <li v-for="(item,index) in receipts">
                        <label for="">發票號碼</label>
                        <input class="invoice_str" placeholder="英文" maxlength="2" type="text" v-model="item.str">
                        <span>-</span>
                        <input class="invoice_int" placeholder="輸入8位數字" maxlength="8" type="text" v-model="item.int">
                        <a class="new" href="javascript:;" @click="addReceipts" v-if="index == 0 " ></a>
                    </li>
                </ul>
                <div class="line"></div>
                <ul class="content_2">
                    <li class="title_2"><img src="../../img/m/receipt/title_2.png" alt=""></li>
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
                        <label for="captcha">驗 證 碼</label>
                        <input id="captcha" type="text" v-model="code">
                        <img :src="codeUrl" alt="">
                    </li>
                    <li class="read_place">
                        <input id="read" type="checkbox" v-model="method">
                        <label for="read">我已閱讀本活動之<a :href="RuleUrl"  target="_blank">活動辦法、隱私權聲明</a>，且同意遵守前述任一事項及說明而參與活動。</label>
                    </li>
                </ul>
                <a href="javascript:;" class="receipt_btn" @click="registerReceipt" onclick="threeMGA('/receipt/send_btn.html');"></a>
            </div>
        </div>
</template>

<script src="../js/receipt.js">
</script>