    export default {
        className: "Popup.vue",
        props: ['Imgurl'],
        data() {
            return {
                message: 'Popup'
            };
        },
        computed: {

        },
        methods: {
            popupClose: function() {
                this.$emit("popup_close");
            }
        },
        components: {}
    }