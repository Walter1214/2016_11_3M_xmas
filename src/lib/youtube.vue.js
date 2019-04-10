/*! milkmidi vue youtube component
    1.0.1
 */
var static_is_api_ready = false;
var static_is_api_attached_to_script_tag = false;
var static_youtube_id = 1;
const EVENTS = {
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'queued'
};

function loadYoutubeScript() {
    if (static_is_api_attached_to_script_tag)
        return;
    static_is_api_attached_to_script_tag = true;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = function() {
        console.log('onYouTubeIframeAPIReady');
        static_is_api_ready = true;
    };
}
class Timer {
    constructor(cb) {
        this.id = -1;
        this.cb = cb;
    }
    start() {
        this.stop();
        this.id = setInterval(() => {
            this.cb();
        }, 33);
    }
    stop() {
        if (this.id != -1) {
            clearInterval(this.id);
            this.id = -1;
        }
    }
    destroy() {
        this.stop();
        this.cb = null;
    }
}
var YouTubePlayer = Vue.extend({
    className: "YouTubePlayer",
    props: {
        'video_id': String,
        'width': {
            type: Number,
            default: 320
        },
        'height': {
            type: Number,
            default: 240
        },
        'fs': {
            type: Boolean,
            default: false
        },
        'playerVars': {

        }
    },
    // [ 'video_id', 'width', 'height' ],    
    template: `<div class='youtube_player_container'><div :id="elementId" :style="{'width':width + 'px','height':height + 'px'}"></div></div>`,
    data: function() {
        return {
            _checkAPIReadyID: -1,
            player: null,
            elementId: "",
            progress: 0,
            progressTime: null,
            loadedTime: null
        };
    },
    watch: {
        "video_id": function(value) {
            console.log(value);
            if (!this.player)
                return;
            this.player.cueVideoById(value);
        }
    },
    methods: {
        _checkAPIReadyHandler: function() {
            if (static_is_api_ready) {
                clearInterval(this._checkAPIReadyID);
                this._checkAPIReadyID = -1;
                this._createPlayer();
            }
        },
        _createPlayer: function() {
            console.log('_createPlayer');

            if (this.player)
                return;
            if (!this.video_id) {
                throw new Error('invalidate video_id');
            }

            static_youtube_id++;
            this.elementId = 'youtube_player' + static_youtube_id;
            this.$nextTick(() => {
                this.player = new YT.Player(this.elementId, {
                    width: this.width + 'px',
                    height: this.height + 'px',
                    videoId: this.video_id,
                    playerVars: {
                        'autoplay': 0,
                        'controls': 1,
                        'autohide': 1,
                        'enablejsapi': 1,
                        'loop': 1,
                        'disablekb': 1,
                        'fs': 0,
                        'modestbranding': 0,
                        'showinfo': 0,
                        'rel': 0
                    },
                    events: {
                        'onReady': (e) => {
                            this.$emit('ready', e);
                            if (!this.progressTime) {
                                this.progressTime = new Timer(() => {
                                    var p = this.player.getCurrentTime() / this.player.getDuration();
                                    this.$emit('progress', p);
                                });
                                this.loadedTime = new Timer(() => {
                                    this.$emit('loaded', this.player.getVideoLoadedFraction());
                                });

                            }
                        },
                        'onStateChange': (e) => {
                            this.$emit('state', e);
                            if (e.data == 1) {
                                this.progressTime.start();
                                this.loadedTime.start();
                            } else {
                                this.progressTime.stop();
                                this.loadedTime.stop();
                            }
                        }
                    }
                });
            });
        },
    },
    mounted() {
        // console.log( this.$el );
        loadYoutubeScript();
        if (!static_is_api_ready) {
            this._checkAPIReadyID = setInterval(() => {
                this._checkAPIReadyHandler();
            }, 200);
        } else {
            this._createPlayer();
        }
    },
    beforeDestroy() {
        if (this.player !== null) {
            this.player.destroy();
            this.player = null;
        }
        if (this.progressTime) {
            this.progressTime.destroy();
            this.progressTime = null;
        }
        if (this.loadedTime) {
            this.loadedTime.destroy();
            this.loadedTime = null;
        }
        delete this.player;
    },

});
Vue.component('youtube', YouTubePlayer);

module.exports = YouTubePlayer;