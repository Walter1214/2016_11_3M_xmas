(function(lib, img, cjs, ss, an) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
        { name: "3M_title_2_Canvas_atlas_", frames: [
                [0, 376, 109, 117],
                [0, 132, 119, 123],
                [138, 0, 117, 115],
                [111, 441, 78, 71],
                [0, 0, 136, 130],
                [191, 441, 53, 50],
                [257, 0, 116, 114],
                [0, 257, 114, 117],
                [375, 0, 93, 79],
                [375, 81, 93, 79],
                [138, 117, 93, 79],
                [121, 198, 93, 79],
                [116, 279, 93, 79],
                [116, 360, 93, 79],
                [233, 117, 93, 79],
                [216, 198, 93, 79],
                [211, 279, 93, 79],
                [211, 360, 93, 79],
                [311, 198, 93, 79],
                [306, 279, 93, 79],
                [306, 360, 93, 79],
                [406, 162, 93, 79],
                [406, 243, 93, 79],
                [401, 324, 93, 79],
                [401, 405, 93, 79]
            ] }
    ];



    lib.updateListCache = function(cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };

    lib.addElementsToCache = function(textInst, cacheList) {
        var cur = textInst;
        while (cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        } else {
            cur = textInst;
            while (cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };

    lib.gfontAvailable = function(family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };

    lib.tfontAvailable = function(family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    // symbols:



    (lib._011_給勵成功_成 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_給 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_煙火1 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_煙火2 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_煙火3 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_煙火4 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_功 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib._011_給勵成功_勵 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.s1 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.s10 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.s11 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.s12 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.s13 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.s14 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.s15 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.s16 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.s17 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.s2 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.s3 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.s4 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.s5 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.s6 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.s7 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.s8 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.s9 = function() {
        this.spriteSheet = ss["3M_title_2_Canvas_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.勵 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_勵();
        this.instance.parent = this;
        this.instance.setTransform(-57, -58.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.勵, new cjs.Rectangle(-57, -58.5, 114, 117), null);


    (lib.功 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_功();
        this.instance.parent = this;
        this.instance.setTransform(-58, -57);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.功, new cjs.Rectangle(-58, -57, 116, 114), null);


    (lib.煙火D = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_煙火2();
        this.instance.parent = this;
        this.instance.setTransform(-39, -35.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.煙火D, new cjs.Rectangle(-39, -35.5, 78, 71), null);


    (lib.煙火C = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_煙火1();
        this.instance.parent = this;
        this.instance.setTransform(-58.5, -57.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.煙火C, new cjs.Rectangle(-58.5, -57.5, 117, 115), null);


    (lib.煙火B = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_煙火4();
        this.instance.parent = this;
        this.instance.setTransform(-26.5, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.煙火B, new cjs.Rectangle(-26.5, -25, 53, 50), null);


    (lib.煙火A = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_煙火3();
        this.instance.parent = this;
        this.instance.setTransform(-68, -65);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.煙火A, new cjs.Rectangle(-68, -65, 136, 130), null);


    (lib.s17_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s17();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s17_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s16_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s16();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s16_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s15_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s15();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s15_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s14_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s14();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s14_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s13_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s13();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s13_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s12_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s12();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s12_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s11_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s11();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s11_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s10_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s10();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s10_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s9_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s9();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s9_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s8_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s8();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s8_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s7_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s7();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s7_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s6_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s6();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s6_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s5();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s5_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s4();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s4_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s3();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s3_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s2();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s2_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.s1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s1();
        this.instance.parent = this;
        this.instance.setTransform(-46.5, -39.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.s1_1, new cjs.Rectangle(-46.5, -39.5, 93, 79), null);


    (lib.給 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_給();
        this.instance.parent = this;
        this.instance.setTransform(-59.5, -61.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.給, new cjs.Rectangle(-59.5, -61.5, 119, 123), null);


    (lib.成 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib._011_給勵成功_成();
        this.instance.parent = this;
        this.instance.setTransform(-54.5, -58.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.成, new cjs.Rectangle(-54.5, -58.5, 109, 117), null);


    (lib.postit = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 圖層 1
        this.instance = new lib.s1_1();
        this.instance.parent = this;
        this.instance.setTransform(-2.7, 2);

        this.instance_1 = new lib.s2_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-2.7, 2);

        this.instance_2 = new lib.s3_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-2.7, 2);

        this.instance_3 = new lib.s4_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-2.7, 2);

        this.instance_4 = new lib.s5_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-2.7, 2);

        this.instance_5 = new lib.s6_1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-2.7, 2);

        this.instance_6 = new lib.s7_1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-2.7, 2);

        this.instance_7 = new lib.s8_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-2.7, 2);

        this.instance_8 = new lib.s9_1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-2.7, 2);

        this.instance_9 = new lib.s10_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-2.7, 2);

        this.instance_10 = new lib.s11_1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-2.7, 2);

        this.instance_11 = new lib.s12_1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-2.7, 2);

        this.instance_12 = new lib.s13_1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-2.7, 2);

        this.instance_13 = new lib.s14_1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-2.7, 2);

        this.instance_14 = new lib.s15_1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-2.7, 2);

        this.instance_15 = new lib.s16_1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-2.7, 2);

        this.instance_16 = new lib.s17_1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-2.7, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_2 }] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [{ t: this.instance_4 }] }, 1).to({ state: [{ t: this.instance_5 }] }, 1).to({ state: [{ t: this.instance_6 }] }, 1).to({ state: [{ t: this.instance_7 }] }, 1).to({ state: [{ t: this.instance_8 }] }, 1).to({ state: [{ t: this.instance_9 }] }, 1).to({ state: [{ t: this.instance_10 }] }, 1).to({ state: [{ t: this.instance_11 }] }, 1).to({ state: [{ t: this.instance_12 }] }, 1).to({ state: [{ t: this.instance_13 }] }, 1).to({ state: [{ t: this.instance_14 }] }, 1).to({ state: [{ t: this.instance_15 }] }, 1).to({ state: [{ t: this.instance_16 }] }, 1).wait(44));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49.2, -37.5, 93, 79);


    // stage content:
    (lib._3M_title_2_Canvas = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_59 = function() {
            this.stop();
            this.dispatchEvent(new createjs.Event("animation_complete"));
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

        // s
        this.instance = new lib.postit();
        this.instance.parent = this;
        this.instance.setTransform(471.4, 183.9, 2, 2);
        this.instance.alpha = 0;

        this.instance_1 = new lib.s1_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(468.3, 185.6);

        this.instance_2 = new lib.s2_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(466.8, 189);

        this.instance_3 = new lib.s3_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(466.8, 189);

        this.instance_4 = new lib.s4_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(466.8, 189);

        this.instance_5 = new lib.s5_1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(466.8, 189);

        this.instance_6 = new lib.s6_1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(466.8, 189);

        this.instance_7 = new lib.s7_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(466.8, 189);

        this.instance_8 = new lib.s8_1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(466.8, 189);

        this.instance_9 = new lib.s9_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(466.8, 189);

        this.instance_10 = new lib.s10_1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(466.8, 189);

        this.instance_11 = new lib.s11_1();
        this.instance_11.parent = this;
        this.instance_11.setTransform(466.8, 189);

        this.instance_12 = new lib.s12_1();
        this.instance_12.parent = this;
        this.instance_12.setTransform(466.8, 189);

        this.instance_13 = new lib.s13_1();
        this.instance_13.parent = this;
        this.instance_13.setTransform(466.8, 189);

        this.instance_14 = new lib.s14_1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(466.8, 189);

        this.instance_15 = new lib.s15_1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(466.8, 189);

        this.instance_16 = new lib.s16_1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(466.8, 188.4);

        this.instance_17 = new lib.s17_1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(466.8, 189);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance }] }, 1).to({ state: [{ t: this.instance }] }, 1).to({ state: [{ t: this.instance }] }, 1).to({ state: [{ t: this.instance }] }, 1).to({ state: [{ t: this.instance }] }, 1).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.instance_2 }] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [{ t: this.instance_4 }] }, 1).to({ state: [{ t: this.instance_5 }] }, 1).to({ state: [{ t: this.instance_6 }] }, 1).to({ state: [{ t: this.instance_7 }] }, 1).to({ state: [{ t: this.instance_8 }] }, 1).to({ state: [{ t: this.instance_9 }] }, 1).to({ state: [{ t: this.instance_10 }] }, 1).to({ state: [{ t: this.instance_11 }] }, 1).to({ state: [{ t: this.instance_12 }] }, 1).to({ state: [{ t: this.instance_13 }] }, 1).to({ state: [{ t: this.instance_14 }] }, 1).to({ state: [{ t: this.instance_15 }] }, 1).to({ state: [{ t: this.instance_16 }] }, 1).to({ state: [{ t: this.instance_17 }] }, 1).wait(38));
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ regX: -2.7, regY: 2, scaleX: 1.59, scaleY: 1.59, x: 465.8, y: 187.7, alpha: 0.41 }, 0).wait(1).to({ scaleX: 1.31, scaleY: 1.31, x: 465.7, y: 187.6, alpha: 0.695 }, 0).wait(1).to({ scaleX: 1.14, scaleY: 1.14, alpha: 0.863 }, 0).wait(1).to({ scaleX: 1.07, scaleY: 1.07, x: 465.6, alpha: 0.933 }, 0).wait(1).to({ scaleX: 1.03, scaleY: 1.03, y: 187.5, alpha: 0.966 }, 0).to({ _off: true }, 1).wait(54));

        // 煙火B
        this.instance_18 = new lib.煙火B();
        this.instance_18.parent = this;
        this.instance_18.setTransform(164.1, 97.4, 0.009, 0.01);
        this.instance_18._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(39).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1 }, 3).wait(1).to({ scaleX: 1.08, scaleY: 1.08, alpha: 0.865 }, 0).wait(1).to({ scaleX: 1.16, scaleY: 1.16, alpha: 0.728 }, 0).wait(1).to({ scaleX: 1.24, scaleY: 1.24, alpha: 0.596 }, 0).wait(1).to({ scaleX: 1.32, scaleY: 1.32, alpha: 0.475 }, 0).wait(1).to({ scaleX: 1.38, scaleY: 1.38, alpha: 0.369 }, 0).wait(1).to({ scaleX: 1.43, scaleY: 1.43, alpha: 0.281 }, 0).wait(1).to({ scaleX: 1.47, scaleY: 1.47, alpha: 0.212 }, 0).wait(1).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0.16 }, 0).wait(1).to({ scaleX: 1.53, scaleY: 1.53, alpha: 0.118 }, 0).wait(1).to({ scaleX: 1.55, scaleY: 1.55, alpha: 0.086 }, 0).wait(1).to({ scaleX: 1.56, scaleY: 1.56, alpha: 0.062 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.57, alpha: 0.044 }, 0).wait(1).to({ scaleX: 1.58, scaleY: 1.58, alpha: 0.031 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.021 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.013 }, 0).wait(1).to({ scaleX: 1.6, scaleY: 1.6, alpha: 0.006 }, 0).wait(1).to({ scaleX: 1.6, scaleY: 1.6, alpha: 0 }, 0).wait(1));

        // 煙火A
        this.instance_19 = new lib.煙火A();
        this.instance_19.parent = this;
        this.instance_19.setTransform(134, 178, 0.004, 0.004);
        this.instance_19._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(33).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1 }, 3).wait(1).to({ scaleX: 1.09, scaleY: 1.09, alpha: 0.855 }, 0).wait(1).to({ scaleX: 1.18, scaleY: 1.18, alpha: 0.707 }, 0).wait(1).to({ scaleX: 1.26, scaleY: 1.26, alpha: 0.565 }, 0).wait(1).to({ scaleX: 1.34, scaleY: 1.34, alpha: 0.434 }, 0).wait(1).to({ scaleX: 1.41, scaleY: 1.41, alpha: 0.322 }, 0).wait(1).to({ scaleX: 1.46, scaleY: 1.46, alpha: 0.231 }, 0).wait(1).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0.166 }, 0).wait(1).to({ scaleX: 1.53, scaleY: 1.53, alpha: 0.119 }, 0).wait(1).to({ scaleX: 1.55, scaleY: 1.55, alpha: 0.085 }, 0).wait(1).to({ scaleX: 1.56, scaleY: 1.56, alpha: 0.061 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.57, alpha: 0.045 }, 0).wait(1).to({ scaleX: 1.58, scaleY: 1.58, alpha: 0.033 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.023 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.012 }, 0).wait(1).to({ scaleX: 1.6, scaleY: 1.6, alpha: 0 }, 0).wait(9));

        // 煙火D
        this.instance_20 = new lib.煙火D();
        this.instance_20.parent = this;
        this.instance_20.setTransform(834.2, 205.8, 0.006, 0.007);
        this.instance_20._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(36).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1 }, 3).wait(1).to({ scaleX: 1.09, scaleY: 1.09, alpha: 0.848 }, 0).wait(1).to({ scaleX: 1.18, scaleY: 1.18, alpha: 0.696 }, 0).wait(1).to({ scaleX: 1.27, scaleY: 1.27, alpha: 0.555 }, 0).wait(1).to({ scaleX: 1.34, scaleY: 1.34, alpha: 0.429 }, 0).wait(1).to({ scaleX: 1.41, scaleY: 1.41, alpha: 0.324 }, 0).wait(1).to({ scaleX: 1.46, scaleY: 1.46, alpha: 0.239 }, 0).wait(1).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0.175 }, 0).wait(1).to({ scaleX: 1.52, scaleY: 1.52, alpha: 0.128 }, 0).wait(1).to({ scaleX: 1.54, scaleY: 1.54, alpha: 0.093 }, 0).wait(1).to({ scaleX: 1.56, scaleY: 1.56, alpha: 0.068 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.57, alpha: 0.05 }, 0).wait(1).to({ scaleX: 1.58, scaleY: 1.58, alpha: 0.037 }, 0).wait(1).to({ scaleX: 1.58, scaleY: 1.58, alpha: 0.027 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.018 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.01 }, 0).wait(1).to({ scaleX: 1.6, scaleY: 1.6, alpha: 0 }, 0).wait(5));

        // 煙火C
        this.instance_21 = new lib.煙火C();
        this.instance_21.parent = this;
        this.instance_21.setTransform(773.9, 128.2, 0.004, 0.004);
        this.instance_21._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(33).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1 }, 3).wait(1).to({ scaleX: 1.1, scaleY: 1.1, alpha: 0.835 }, 0).wait(1).to({ scaleX: 1.2, scaleY: 1.2, alpha: 0.663 }, 0).wait(1).to({ scaleX: 1.3, scaleY: 1.3, alpha: 0.503 }, 0).wait(1).to({ scaleX: 1.38, scaleY: 1.38, alpha: 0.368 }, 0).wait(1).to({ scaleX: 1.44, scaleY: 1.44, alpha: 0.265 }, 0).wait(1).to({ scaleX: 1.49, scaleY: 1.49, alpha: 0.189 }, 0).wait(1).to({ scaleX: 1.52, scaleY: 1.52, alpha: 0.137 }, 0).wait(1).to({ scaleX: 1.54, scaleY: 1.54, alpha: 0.101 }, 0).wait(1).to({ scaleX: 1.56, scaleY: 1.56, alpha: 0.075 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.57, alpha: 0.056 }, 0).wait(1).to({ scaleX: 1.57, scaleY: 1.57, alpha: 0.043 }, 0).wait(1).to({ scaleX: 1.58, scaleY: 1.58, alpha: 0.033 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.026 }, 0).wait(1).to({ scaleX: 1.59, scaleY: 1.59, alpha: 0.019 }, 0).wait(1).to({ scaleX: 1.6, scaleY: 1.6, alpha: 0 }, 0).wait(9));

        // 功
        this.instance_22 = new lib.功();
        this.instance_22.parent = this;
        this.instance_22.setTransform(684.3, 140.2, 0.004, 0.004);
        this.instance_22._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28).to({ _off: false }, 0).wait(1).to({ scaleX: 0.62, scaleY: 0.62 }, 0).wait(1).to({ scaleX: 0.92, scaleY: 0.92 }, 0).wait(1).to({ scaleX: 1.01, scaleY: 1.01 }, 0).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 1, scaleY: 1 }, 0).wait(27));

        // 成
        this.instance_23 = new lib.成();
        this.instance_23.parent = this;
        this.instance_23.setTransform(569.4, 111, 0.005, 0.004);
        this.instance_23._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(24).to({ _off: false }, 0).wait(1).to({ scaleX: 0.62, scaleY: 0.62 }, 0).wait(1).to({ scaleX: 0.93, scaleY: 0.93 }, 0).wait(1).to({ scaleX: 1.03, scaleY: 1.03 }, 0).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 1, scaleY: 1 }, 0).wait(31));

        // 勵
        this.instance_24 = new lib.勵();
        this.instance_24.parent = this;
        this.instance_24.setTransform(340.1, 112.6, 0.004, 0.004);
        this.instance_24._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(20).to({ _off: false }, 0).wait(1).to({ scaleX: 0.59, scaleY: 0.59 }, 0).wait(1).to({ scaleX: 0.9, scaleY: 0.9 }, 0).wait(1).to({ scaleX: 1, scaleY: 1 }, 0).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 1, scaleY: 1 }, 0).wait(35));

        // 給
        this.instance_25 = new lib.給();
        this.instance_25.parent = this;
        this.instance_25.setTransform(228, 141.5, 0.004, 0.004);
        this.instance_25._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(16).to({ _off: false }, 0).wait(1).to({ scaleX: 0.5, scaleY: 0.5 }, 0).wait(1).to({ scaleX: 0.81, scaleY: 0.81 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95 }, 0).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).to({ scaleX: 1, scaleY: 1 }, 1).wait(39));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(838, 267.7, 186, 158);
    // library properties:
    lib.properties = {
        width: 930,
        height: 318,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [
            { src: "../img_src/3M_title_2_Canvas_atlas_.png", id: "3M_title_2_Canvas_atlas_" }
        ],
        preloads: []
    };




})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;