import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addConeGlows();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);

        //是否开启抗锯齿
        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;
    },

    //添加光柱椎体
    addConeGlows() {
        //RED ConeGlow
        let position = Cesium.Cartesian3.fromDegrees(106.12745120933661, 28.18659151706926, 0);
        let goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 5000, //高度
            bottomRadius: 200, //半径
            color: Cesium.Color.RED //颜色
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.10284498760618, 28.193790539392296, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.11076449083477, 28.177230664154955, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.12356245206253, 28.196948677915277, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.12356245206253, 28.196948677915277, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.14346591467395, 28.182324399721615, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 160,
            color: Cesium.Color.YELLOW
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.14064528617807, 28.17365296503231, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.14491755707357, 28.203224857331968, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });

        //AQUA ConeGlow
        position = Cesium.Cartesian3.fromDegrees(106.15346980458763, 28.186154752946575, 0);
        goneGlow = new xt3d.AdvancedPlugin.ConeGlow(this.viewer, position, {
            height: 3000,
            bottomRadius: 150,
            color: Cesium.Color.AQUA
        });
    },

    //设置默认视图
    setView() {
        let flyToOpts = {
            destination: {
                x: -1564306.5634804969,
                y: 5410174.930131075,
                z: 2993076.075392588,
            },
            orientation: {
                heading: 4.263256414560601e-14,
                pitch: -0.7855496910582414,
                roll: 6.283185307179586,
            },
            duration: 2
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