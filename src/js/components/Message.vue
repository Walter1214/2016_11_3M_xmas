<style scoped lang='scss' src="../../css/message.scss">

</style>
<template>
        <div id="message_bg">
            <div id="big_pad" class="big_pad" :class="bigPdClass">
                <div class="big_subject">{{subject}}</div>
                <div class="big_name">{{name}}</div>
                <div class="big_comment">{{comment}}</div>
            </div>
            <div class="message_space">
                <div class="left_space">
                    <img src="~m/message/step3.png" class="m_img" />
                    <div class="pad" :class="pdClass">
                        <div class="small_subject">{{subject}}</div>
                        <div class="small_name">{{name}}</div>
                        <div class="small_comment">{{comment}}</div>
                    </div>
                    <div class="color_list">
                        <a href="javascript:;" class="green" :class="{ON:giftcardColor == 'green'}" @click="changeColor('green')"></a>
                        <a href="javascript:;" class="yellow" :class="{ON:giftcardColor == 'yellow'}" @click="changeColor('yellow')"></a>
                    </div>
                    <div class="m_color_list">
                        <a href="javascript:;" class="green" :class="{ON:giftcardColor == 'green'}" @click="changeColor('green')"></a>
                        <a href="javascript:;" class="yellow" :class="{ON:giftcardColor == 'yellow'}" @click="changeColor('yellow')"></a>
                    </div>
                    <a href="javascript:;" @click="sendPower" class="m_send_btn" onclick="threeMGA('m/message/send_btn.html');"></a>
                </div>
                <div class="right_space">
                    <img src="~m/message/step1.png" class="m_img" style="padding-top:0;" />                    
                    <div class="top_space">
                        <div class="m_div">
                            <label for="">我要給正在拼</label>
                            <input id="subject" v-model="subject" type="text" maxlength="4" placeholder=" 輸入例:學測.證照(限4字內)">
                        </div>
                        <div class="m_div">
                            <label for="">的</label>
                            <!--請輸入對方暱稱(限6字內)-->
                            <input id="name" v-model="name" type="text" maxlength="6" placeholder=" 輸入對方暱稱(限6字內)">
                        </div>
                    </div>
                    <textarea name="" id="comment" v-model="comment" maxlength="42" cols="30" rows="10" placeholder="在這裡輸入想對他打打氣的話"></textarea>
                    <div class="line"></div>
                    <img src="~m/message/step2.png" class="m_img" />
                    <div class="message_list">
                        <a href="javascript:;" class="list list_1" :class="{ON:giftcardType == 1}" @click="changeChannel(1)"></a>
                        <a href="javascript:;" class="list list_2" :class="{ON:giftcardType == 2}" @click="changeChannel(2)"></a>
                        <a href="javascript:;" class="list list_3" :class="{ON:giftcardType == 3}" @click="changeChannel(3)"></a>
                        <a href="javascript:;" class="list list_4" :class="{ON:giftcardType == 4}" @click="changeChannel(4)"></a>
                        <a href="javascript:;" class="list list_5" :class="{ON:giftcardType == 5}" @click="changeChannel(5)"></a>
                    </div>

                    <a href="javascript:;" @click="sendPower" onclick="threeMGA('m/message/send_btn.html');" class="send_btn"></a>
                </div>
            </div>
        </div>
</template>

<script src="../js/message.js">
</script>