import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addScanCircles();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
    },

    //添加圆形对象
    addScanCircles() {
        let position = Cesium.Cartesian3.fromDegrees(104.08582046805398, 30.647310276788204, 0);
        let scanCircle = new xt3d.CircleObject.ScanCircle(this.viewer, position, {
            radius: 500,
            color: Cesium.Color.RED,
            url: "./assets/xt3d/images/scancircle.png"
        });

        position = Cesium.Cartesian3.fromDegrees(104.08640714366604, 30.66953920504855, 3);
        scanCircle = new xt3d.CircleObject.ScanCircle(this.viewer, position, {
            radius: 500,
            clockwise: true, //是否顺时针
            color: Cesium.Color.AQUA,
            url: "./assets/xt3d/images/scancircle.png"
        });

        position = Cesium.Cartesian3.fromDegrees(104.06189741822169, 30.654531056877673, 13);
        scanCircle = new xt3d.CircleObject.ScanCircle(this.viewer, position, {
            radius: 1500,
            color: Cesium.Color.YELLOW,
            url: "./assets/xt3d/images/scancircle.png"
        });
    },

    //设置视角
    setView() {
        this.viewer.scene.camera.setView({
            duration: 1,
            destination: {
                x: -1337790.7881094853,
                y: 5330396.094162445,
                z: 3231621.5380446212
            },
            orientation: {
                heading: 6.010538181825211,
                pitch: -0.6819480997380261,
                roll: 6.282163306739159,
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