import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addCylinderGlow();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);

        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;
    },

    //添加光柱
    addCylinderGlow() {
        let position = Cesium.Cartesian3.fromDegrees(108, 32, 0);
        let cylinderGlow = new xt3d.AdvancedPlugin.CylinderGlow(this.viewer, position, {
            radius: 1300, //半径
            cylinderHeight: 10000, //高度
            fillColor: Cesium.Color.YELLOW, //填充色
            bottomCircleHeight: 10, //底部圆高度
            bottomInnerCircleColor: Cesium.Color.YELLOW, //内圆颜色
            bottomOuterCircleColor: Cesium.Color.YELLOW, //外圆颜色
            TexureUrl: "./assets/xt3d/images/cylinderglow" //材质路径
        });

        position = Cesium.Cartesian3.fromDegrees(108.08, 32, 0);
        cylinderGlow = new xt3d.AdvancedPlugin.CylinderGlow(this.viewer, position, {
            radius: 1300,
            cylinderHeight: 10000,
            fillColor: Cesium.Color.CYAN,
            bottomCircleHeight: 10,
            bottomInnerCircleColor: Cesium.Color.CYAN,
            bottomOuterCircleColor: Cesium.Color.CYAN,
            TexureUrl: "./assets/xt3d/images/cylinderglow"
        });

        position = Cesium.Cartesian3.fromDegrees(108.08, 32.08, 0);
        cylinderGlow = new xt3d.AdvancedPlugin.CylinderGlow(this.viewer, position, {
            radius: 1300,
            cylinderHeight: 10000,
            fillColor: Cesium.Color.RED,
            bottomCircleHeight: 10,
            bottomInnerCircleColor: Cesium.Color.RED,
            bottomOuterCircleColor: Cesium.Color.RED,
            TexureUrl: "./assets/xt3d/images/cylinderglow"
        });

        position = Cesium.Cartesian3.fromDegrees(108, 32.08, 0);
        cylinderGlow = new xt3d.AdvancedPlugin.CylinderGlow(this.viewer, position, {
            radius: 1300,
            cylinderHeight: 10000,
            fillColor: Cesium.Color.LIME,
            bottomCircleHeight: 10,
            bottomInnerCircleColor: Cesium.Color.LIME,
            bottomOuterCircleColor: Cesium.Color.LIME,
            TexureUrl: "./assets/xt3d/images/cylinderglow"
        });

        position = Cesium.Cartesian3.fromDegrees(108.08, 32.18, 0);
        cylinderGlow = new xt3d.AdvancedPlugin.CylinderGlow(this.viewer, position, {
            radius: 1300,
            cylinderHeight: 10000,
            fillColor: Cesium.Color.BLUE,
            bottomCircleHeight: 10,
            bottomInnerCircleColor: Cesium.Color.LIME,
            bottomOuterCircleColor: Cesium.Color.CYAN,
            TexureUrl: "./assets/xt3d/images/cylinderglow"
        });
    },

    //设置默认视角
    setView() {
        let flyToOpts = {
            destination: {
                x: -1708907.2047925794,
                y: 5162559.015194856,
                z: 3362222.2184426477
            },
            orientation: {
                heading: 5.302497923351305,
                pitch: -0.5804019694718008,
                roll: 0.000008089460393101433
            },
            duration: 3
        };
        this.viewer.scene.camera.flyTo(flyToOpts);
    },

    destroy() {
        this.viewer.entities.removeAll();
        this.viewer.imageryLayers.removeAll(true);
        this.viewer.destroy();
    }
}

xt3dInit.init("map");