import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addEllipsoids();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
    },

    //添加球体
    addEllipsoids() {
        //CYAN
        let position = Cesium.Cartesian3.fromDegrees(117.22733934747636, 31.821623264623106, 0);
        let electricEllipsoid = new xt3d.EllipsoidObject.ElectricEllipsoid(this.viewer, position, {
            radius: 400,
            // color:Cesium.Color.CYAN
        });

        //RED
        position = Cesium.Cartesian3.fromDegrees(117.21780145089026, 31.816369400618857, 0);
        electricEllipsoid = new xt3d.EllipsoidObject.ElectricEllipsoid(this.viewer, position, {
            radius: 400,
            color: Cesium.Color.RED
        });

        //YELLOW
        position = Cesium.Cartesian3.fromDegrees(117.22806842213124, 31.795788939661822, 0);
        electricEllipsoid = new xt3d.EllipsoidObject.ElectricEllipsoid(this.viewer, position, {
            radius: 800,
            color: Cesium.Color.YELLOW
        });
    },

    setView() {
        let flyToOpts = {
            destination: {
                x: -2478920.801925492,
                y: 4825730.518405389,
                z: 3347542.8711580094
            },
            orientation: {
                heading: 2.437181922085081,
                pitch: -0.47972457133242763,
                roll: 0.0021918829067129053
            },
            duration: 1
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