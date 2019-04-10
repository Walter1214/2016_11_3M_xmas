<style scoped lang='scss' src="../../css/result.scss">

</style>

<template>
        <div class="result_bg">
            <div class="red_tree"></div>
            <div class="result_space">
                <div class="title"></div>
                <div class="left_space">
                    <a class="pad" :style="imgStyle"></a>
                </div>
                <div class="right_space">
                    <div class="title"></div>
                    <div class="w_content_2">
                        <div class="text">立即填寫資料，抽SONY行動電源、BEATS喇叭等好禮喔</div>
                        <a href="javascript:;" @click="goPrize" onclick="threeMGA('/message/result/prize_btn.html');" class="prize_btn"></a>
                    </div>
                    <div class="m_content_2">
                        <div class="text">立即填寫資料，抽行動電源、喇叭等好禮喔</div>
                        <a href="javascript:;" @click="goPrize" onclick="threeMGA('/message/result/prize_btn.html');" class="prize_btn"></a>
                    </div>
                    <div class="content_1">
                        <div>也別忘記把心意分享給朋友喔</div>
                        <a href="javascript:;" class="fbshare_btn" onclick="threeMGA('/message/result/fbshare_btn.html');" @click="fbShare"></a>
                        <a :href="imgUrl" class="download_btn" onclick="threeMGA('/message/result/download_btn.html');" download target="_blank"></a>
                        <a href="javascript:;" class="line_btn" onclick="threeMGA('/message/result/lineshare_btn.html');" @click="lineShare"></a>
                    </div>

                </div>
            </div>
        </div>
</template>

<script src="../js/result.js">
</script>