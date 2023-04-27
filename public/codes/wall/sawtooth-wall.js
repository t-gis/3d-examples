import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addWall();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
    },

    addWall() {
        let ps = [];
        let lls = [
            [117.319966, 31.842082, 12.29],
            [117.330034, 31.835286, 11.07],
            [117.330576, 31.823452, 11.01],
            [117.311457, 31.821023, 17.11],
            [117.308954, 31.828975, 16.29]
        ];
        lls.forEach(item => {
            ps.push(Cesium.Cartesian3.fromDegrees(item[0], item[1], item[2]))
        })
        let serratedWall = new xt3d.WallObject.SerratedWall(this.viewer, ps, {
            wallHeight: 500,
            direction: -1,
            speed: 10,
            color: Cesium.Color.fromCssColorString("#f33349")
        });
    },

    //设置视角
    setView() {
        let flyToOpts = {
            destination: {
                x: -2487153.036992519,
                y: 4823017.00791476,
                z: 3346002.0156240542
            },
            orientation: {
                heading: 1.558143791589158,
                pitch: -0.6614460944136646,
                roll: 0.0038082524218099323
            },
            duration: 1
        };
        this.viewer.scene.camera.setView(flyToOpts);
    },

    destroy() {
        this.viewer.entities.removeAll();
        this.viewer.imageryLayers.removeAll(true);
        this.viewer.destroy();
    }
}

xt3dInit.init("map");