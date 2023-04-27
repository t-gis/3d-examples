import * as Map3d from "map3d";


let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.load3dtiles();
        this.addScanRadars();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
        this.viewer.scene.globe.depthTestAgainstTerrain = true;

    },

    //添加雷达扫描
    addScanRadars() {
        let lng = 120.13680;
        let lat = 33.34501;
        let position = Cesium.Cartesian3.fromDegrees(lng, lat, 100);
        let scanRadar = new xt3d.CircleObject.ScanRadar(this.viewer, position, {
            radius: 150,
            color: new Cesium.Color(0, 1.0, 0, 1),
            duration: 2000
        });

        position = Cesium.Cartesian3.fromDegrees(lng, lat, 100);
        scanRadar = new xt3d.CircleObject.ScanRadar(this.viewer, position, {
            radius: 300,
            color: new Cesium.Color(1, 1.0, 0, 1),
            duration: 3000
        });

        //scanRadar.remove();
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
                this.viewer.zoomTo(
                    tileset,
                );
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