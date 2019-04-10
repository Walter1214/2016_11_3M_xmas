<style scoped lang='scss' src='../../css/rule.scss'>

</style>

<template>
    <div id="rule_bg">
       <div class="title">
		   <router-link to="/list" class="list_btn" onclick="threeMGA('/rule/winner_btn.html');"></router-link>
	   </div>
       
       <div class="bookmark_list">
            <a href="javascript:;" class="rule bookmark" :class="{ON:isRule}" @click="changeRule"></a>
            <a href="javascript:;" class="invoice bookmark" :class="{ON:!isRule}" @click="changeInvoice"></a>

       </div>
        <div class="bookmark_space">
            <div class="rule_content" :class="{invoice_content:!isRule}">
            </div>
            <a href="javascript:;" class="btn_top" @click="goTop"></a>
        </div>
    </div>
</template>

<script>
    export default {
        className: "Rule.vue", // 在 init.js 裡有設定 global
        data() {
            return {
                isRule: true,
            }
        },
        mounted() {
            if (this.$route.query.isInvoice) {
                this.isRule = false;
            }
            // this.$store.commit('setRoot', 'auto');
        },
        methods: { // 所有的自定事件都要寫在 methods 裡
            changeRule: function() {
                this.isRule = true;
            },
            changeInvoice: function() {
                this.isRule = false;
            },
            goTop: function() {
                window.scrollTo(0, 0);
            }
        },
        components: {

        }
    }
</script>