<style lang="scss">
    /*
.youtube_player_container
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    iframe
        position absolute
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
*/
</style>

<template>

<div class="root">
    <youtube :video_id="youtube_id" :width="640" :height="480" 
        @ready="youtubeReadyHandler" 
        @state='youtubeStateHandler'
        @progress="youtubeProgressHandler"
        @loaded="youtubeLoadedHandler"
        ></youtube>
    <p>Progress:{{youtubeProgress}}</p>
    <p>Loaded{{youtubeLoaded}}</p>
    <p>{{youtubeStateString}}</p>
    <button @click="changeVideo('oxVPcYDTT74')">Video1</button>
    <button @click="changeVideo('Tmn03TH-lpk')">Video2</button>
</div>

</template>

<script>
    export default {
        className: "youtube_demo.vue",
        data() {
            return {
                youtube_id: 'G7i4d5hoT2I',
                youtubeProgress: 0,
                youtubeLoaded: 0,
                youtubeState: -1,
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
        methods: {
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
        mounted() {},
        destroyed() {},
        components: {}
    }
</script>