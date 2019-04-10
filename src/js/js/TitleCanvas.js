// var canvas, stage, exportRoot;

class TitleCanvas {
    constructor(cb) {
        this.stage = null;
        var canvas = document.getElementById("canvas");
        var me = this;

        // anim_container = document.getElementById("animation_container");
        // dom_overlay_container = document.getElementById("dom_overlay_container");
        // images = images||{};
        // ss = ss||{};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);

        // require('file?name=asset/img/[name].[ext]!../../fla/images/3M_title_2_Canvas_atlas_.png');
        lib.properties.manifest = [
            { src: require("../../img/3M_title_2_Canvas_atlas_.png"), id: "3M_title_2_Canvas_atlas_" }
        ];
        loader.loadManifest(lib.properties.manifest);

        function handleFileLoad(evt) {
            if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
        }


        function handleComplete(evt) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            loader.removeEventListener("fileload", handleFileLoad);
            loader.removeEventListener("complete", handleComplete);
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for (var i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
            }
            var exportRoot = new lib._3M_title_2_Canvas();
            exportRoot.on('animation_complete', () => {
                console.log('animation_complete');
                createjs.Ticker.removeEventListener("tick", me.stage);
                cb();
            });
            me.stage = new createjs.Stage(canvas);
            me.stage.addChild(exportRoot);

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", me.stage);
            // console.log( 'handleComplete' );

        }
    }
    destroy() {
        createjs.Ticker.addEventListener("tick", this.stage);
        this.stage = null;
        console.log("TitleCanvas.destroy()");
    }
}


export default TitleCanvas;