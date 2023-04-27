import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addScanline();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);

        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;
    },

    //添加扫描圆
    addScanline() {
        let position = Cesium.Cartesian3.fromDegrees(104.06189741822169, 30.654531056877673, 13.315777390549759);
        let scanline = new xt3d.AdvancedPlugin.Scanline(this.viewer, position, {
            color: Cesium.Color.RED,
            radius: 1200
        });
    },

    //设置视角
    setView() {
        this.viewer.scene.camera.setView({
            duration: 1,
            destination: {
                x: -1335579.228143601,
                y: 5328935.263663113,
                z: 3232288.29351318
            },
            orientation: {
                heading: 5.848404708640302,
                pitch: -0.6704827782244815,
                roll: 6.281601192691522
            }
        });
    },

    destroy() {
        this.viewer.entities.removeAll();
        this.viewer.imageryLayers.removeAll(true);
        this.viewer.destroy();
    }
}

xt3dInit.init("map");