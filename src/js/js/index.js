import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    className: "Index.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            treeList: [[''],['','',''],['','','','',''],['','','','','','',''],['','','','',''],['','','','','','',''],['','','','','','','','',''],['','','','','','','','','','',''],['','','','','','',''],['','','','','','','','',''],['','','','','','','','','','',''],['','','','','','','','','','','','',''],['','','','','','',''],['','','','','','','','',''],['','','','','','','','','','',''],['','','','','','','','','','','','',''],['','','','','','',''],['','','','','','','','',''],['','','','','','','','','','',''],['','','','','','','','','','','','','']],
            treeBottom: false,
            notInBottom: false,
            isLast: true,
            treeHeight: 0,
            pageNumber: 1,
            totalcount: 0,
            popup_ctrl: false,
            Imgurl: null,
            x: 100,
            y: 100,
            inStyle: false,
            name: null,
            adornmentCtrl: 0
        }
    },
    mounted() {
        // this.$store.commit('setRoot', '700px');
        var midHeight;
        if (device.desktop()) {
            midHeight = 619;
        } else {
            midHeight = 452;
        }

        if ((window.innerHeight / 2) - midHeight > 0) {
            // alert('>0');
        } else {
            // alert('<0');
            if (window.innerHeight < 1000) {
                this.overFlowH = ((1000 / 2) - midHeight) * -1;
                this.overFlowH = this.overFlowH + 'px';
            } else {
                this.overFlowH = ((window.innerHeight / 2) - midHeight) * -1;
                this.overFlowH = this.overFlowH + 'px';
            }

        }

        window.addEventListener('scroll', () => {

            if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 50)) {
                // alert("bottom!");
                this.powerListForScroll();
                this.notInBottom = true;
            } else {
                this.notInBottom = false;
            }
            // console.log(this.notInBottom);
        });

        // $(window).on('scroll', () => {
        //     // console.log(window.pageYOffset, $('.tree_space'));
        //     // window.pageYOffset >= $('.wrapper').outerHeight(true) - $('.sg5').outerHeight(true) - $(window).height()
        //     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        //         // alert("bottom!");
        //         this.powerList();
        //         this.notInBottom = true;
        //     } else {
        //         this.notInBottom = false;
        //     }
        // });
        this.powerList();
    },
    computed: {
        treeStyle() {

            // return {
            //     'margin-top': this.overFlowH,
            //     transform: `translate(-50%, -${this.treeHeight}px)`
            // };
        },
        xyStylp() {
            // console.log(this.x, this.y);
            return 'top:' + (this.y + 10) + 'px;' + 'left:' + (this.x + 10) + 'px;';
        },
        pointStyle() {
            var num = 0;
            if (this.totalcount < 1500) {
                num = ((this.totalcount / 1500) * 20);
            } else if (this.totalcount >= 1500 && this.totalcount < 2017) {
                num = (((this.totalcount - 1500) / (2017 - 1500)) * 23) + 20;
            } else if (this.totalcount >= 2017 && this.totalcount < 3000) {
                num = (((this.totalcount - 2017) / (3000 - 2017)) * 24) + 43;
            } else if (this.totalcount >= 3000 && this.totalcount < 8888) {
                num = (((this.totalcount - 3000) / (8888 - 3000)) * 25) + 68;
            } else if (this.totalcount >= 8888) {
                num = 92;
            }
            console.log(this.totalcount);
            console.log(num);
            // console.log(Math.ceil(this.totalcount / 12000));
            return 'height:' + num + '%';
        },
        firstModel() {

            return 1500;

        },
        secondModel() {
            return 2017;

        },
        thirdModel() {
            if (this.totalcount / 3000 > 1) {
                return 3000;
            } else {
                return '?';
            }
        },
        finishModel() {
            if (this.totalcount / 8888 > 1) {
                return 8888;
            } else {
                return '?';
            }
        }

    },
    updated() {
        this.treeHeight = this.$refs.tree.offsetHeight;
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        ...mapActions(["postAjax"]),
        mouseOut: function() {
            this.inStyle = false;
        },
        mouseOver: function(item, $event) {
            if (item) {
                const target = $event.currentTarget;
                this.x = target.offsetLeft + target.offsetWidth * .1;
                this.y = target.parentNode.offsetTop + target.offsetHeight * .5;
                // this.x = event.clientX; // Get the horizontal coordinate
                // this.y = event.clientY; // Get the vertical coordinate
                this.inStyle = true;
                this.name = item.name;
                // console.log(this.x, this.y);
            }
        },
        popupClose: function() {
            this.popup_ctrl = false;
        },
        popupShow: function(item) {
            if (item) {
                this.Imgurl = item.img;
                this.popup_ctrl = true;
            }
        },
        treeTopList: function(apiList) {
            // console.log(apiList.list);
            var count = [1, 3, 5, 7, 5, 7, 9, 11];
            var idx = 0;
            for (var i = 0; i < count.length; i++) {
                var row = []
                for (var j = 0; j < count[i]; j++) {
                    // console.log(idx);
                    row.push(apiList.list[idx++]);
                }
                // console.log(row);
                this.treeList.push(row);
            }
            // console.log(rows);
        },
        mid_rows: function(apiList) {

            var count = [7, 9, 11, 13];
            var idx = 0;
            for (var i = 0; i < count.length; i++) {
                var row = []
                for (var j = 0; j < count[i]; j++) {
                    // console.log(idx);
                    row.push(apiList.list[idx++]);
                }
                //設定顯示不同的飾品
                if (i == 3) {
                    this.adornmentCtrl++;
                    row[13] = this.adornmentCtrl;
                    if (this.adornmentCtrl == 4) {
                        this.adornmentCtrl = 0;
                    }

                }
                this.treeList.push(row);
            }
            // console.log(this.treeList);
        },
        powerList: function() {


            if (this.isLast) {
                this.treeBottom = this.isLast;
                this.overFlowH = 0;
                window.scrollTo(0, document.getElementsByClassName('app-root')[0].offsetHeight);
            }

            if (!this.treeBottom) {

                var _object = {
                    url: 'powerList',
                    data: {
                        pageNumber: this.pageNumber
                    }
                }

                this.postAjax(_object).then((res) => {
                    // console.log('postAjax', res);

                    if (this.pageNumber == 1) {
                        this.treeTopList(res);
                    } else {
                        this.mid_rows(res);
                    }
                    if (res.isLast) {
                        this.isLast = true;
                    }
                    this.totalcount = res.totalCount;
                    this.pageNumber++;

                    window.scrollTo(0, document.getElementsByClassName('app-root')[0].offsetHeight);
                })
            }
        },
        powerListForScroll: function() {


            if (this.isLast) {
                this.treeBottom = this.isLast;
                this.overFlowH = 0;
            }

            if (!this.treeBottom) {

                var _object = {
                    url: 'powerList',
                    data: {
                        pageNumber: this.pageNumber
                    }
                }

                this.postAjax(_object).then((res) => {
                    // console.log('postAjax', res);

                    if (this.pageNumber == 1) {
                        this.treeTopList(res);
                    } else {
                        this.mid_rows(res);
                    }
                    if (res.isLast) {
                        this.isLast = true;
                    }
                    this.totalcount = res.totalCount;
                    // this.totalcount = 15000;
                    this.pageNumber++;
                })
            }
        },
        goTop: function() {
            window.scrollTo(0, 0);
        },
        colorClass: function(item) {
            if (item) {
                return item.giftcardColor;
            } else {
                return 'green';
            }

        },
        nameContent: function(item) {
            if (item) {
                return item.name;
            } else {
                return '';
            }
        },
        getPoint: function(total) {

        }
    },
    components: {
        'popup-component': require('Popup.vue'),
        'search-tool-component': require('SearchTool.vue'),
        'm-search-tool-component': require('m_SearchTool.vue')
    }
}