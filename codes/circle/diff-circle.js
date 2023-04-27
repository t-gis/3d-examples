import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.load3dtiles();
        this.addDiffCircles();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
        this.viewer.scene.globe.depthTestAgainstTerrain = true;
    },


    //添加圆形对象
    addDiffCircles() {
        let position = Cesium.Cartesian3.fromDegrees(120.13680, 33.34501, 6);
        let diffCircle = new xt3d.CircleObject.DiffCircle1(this.viewer, position, {
            radius: 200,
            color: Cesium.Color.RED,
            duration: 2000
        })

        position = Cesium.Cartesian3.fromDegrees(120.1324026545562, 33.34501, 10);
        diffCircle = new xt3d.CircleObject.DiffCircle1(this.viewer, position, {
            radius: 300,
            color: Cesium.Color.YELLOW,
            duration: 2000
        })

        position = Cesium.Cartesian3.fromDegrees(120.13980651502, 33.34501, 15);
        diffCircle = new xt3d.CircleObject.DiffCircle1(this.viewer, position, {
            radius: 400,
            color: Cesium.Color.LIME,
            duration: 2000
        })
    },

    //加载3dtiles数据
    load3dtiles() {
        var tileset = this.viewer.scene.primitives.add(
            new Cesium.Cesium3DTileset({
                url: "./assets/xt3d/3dtiles/jdy/tileset.json",
            })
        );

        tileset.readyPromise
            .then(tileset => {
                this.viewer.zoomTo(tileset)
            })
            .otherwise(function (error) {
                console.log(error);
            });
    },

    destroy() {
        this.viewer.entities.removeAll();
        this.viewer.imageryLayers.removeAll(true);
        this.viewer.destroy();
    }
}

xt3dInit.init("map");