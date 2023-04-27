import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addRedDynamicWall();
        this.addGreenDynamicWall();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
    },

    addGreenDynamicWall() {
        let positions = [{
            x: -1573635.6071447732,
            y: 5327876.906231757,
            z: 3122878.928250711
        }, {
            x: -1573943.459924136,
            y: 5327645.711941848,
            z: 3123094.5285245045
        }, {
            x: -1574009.0770215357,
            y: 5327673.147886553,
            z: 3123045.671607318
        }, {
            x: -1574013.902494587,
            y: 5327679.950759558,
            z: 3123022.801053999
        }, {
            x: -1573831.4438271062,
            y: 5327916.489753731,
            z: 3122723.9583727047
        }, {
            x: -1573635.4421579556,
            y: 5327876.21513823,
            z: 3122880.20724414
        }]
        let greenDynamicWall = new xt3d.WallObject.DynamicWall(this.viewer, positions, {
            wallHeight: 20,
            wallColor: Cesium.Color.fromCssColorString("#0BFF0D")
        });
    },

    addRedDynamicWall() {
        let positions = [{
            x: -1573733.8681838464,
            y: 5327891.690280139,
            z: 3122807.3135355837
        }, {
            x: -1573844.670695646,
            y: 5327784.092327943,
            z: 3122927.0154715613
        }, {
            x: -1573921.5764383215,
            y: 5327789.140594587,
            z: 3122883.3852528557
        }, {
            x: -1573829.0323274087,
            y: 5327912.274138674,
            z: 3122731.583446209
        }, {
            x: -1573733.6414963433,
            y: 5327890.835694463,
            z: 3122808.84515286
        }]
        let redDynamicWall = new xt3d.WallObject.DynamicWall(this.viewer, positions, {
            wallHeight: 30,
            wallColor: Cesium.Color.RED
        });
    },

    //设置视角
    setView() {
        this.viewer.scene.camera.setView({
            duration: 1,
            destination: {
                x: -1574059.0606578684,
                y: 5328215.228662869,
                z: 3122730.9493449833
            },
            orientation: {
                heading: 6.010538188909345,
                pitch: -0.681948068532042,
                roll: 6.282163295499958,
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