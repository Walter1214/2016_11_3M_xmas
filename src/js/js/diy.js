export default {
    className: "Diy.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            isChannel: 1,
            youtube_id: 'yLVvhYfxiDQ',
            youtubeProgress: 0,
            youtubeLoaded: 0,
            youtubeState: -1,
            youtubeWidth: 737,
            youtubeHeight: 414
        }
    },
    computed: {
        youtubeStateString() {
            var s = ""
            switch (this.youtubeState) {
                case 0:
                    s = 'ended';
                    break;
                case 1:
                    s = 'playing';
                    break;
                case 2:
                    s = 'paused';
                    break;
                case 3:
                    s = 'buffering';
                    break;
                case 5:
                    s = 'queued';
                    break;
            }
            return s;
        }
    },
    mounted() {
        // this.$store.commit('setRoot', '850px');
        if (!device.desktop()) {
            this.youtubeWidth = 540;
            this.youtubeHeight = 303
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        changeChannel: function(Ch_int) {
            this.isChannel = Ch_int;
        },
        youtubeReadyHandler: function() {
            console.log('youtubeReadyHandler');
        },
        youtubeStateHandler: function(e) {
            /*e.data 
                0: 'ended',
                1: 'playing',
                2: 'paused',
                3: 'buffering',
                5: 'queued'
            };*/
            this.youtubeState = e.data;
        },
        youtubeProgressHandler: function(fraction) {
            this.youtubeProgress = ~~(fraction * 100) + "%";
        },
        youtubeLoadedHandler: function(fraction) {
            this.youtubeLoaded = ~~(fraction * 100) + "%";
        },
        changeVideo: function(id) {
            this.youtube_id = id;
            console.log('changeVideo', this.youtube_id);
        }
    },
    components: {

    }
}