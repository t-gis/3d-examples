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

        //是否开启抗锯齿
        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;
    },

    //添加球体
    addEllipsoids() {
        //CYAN
        let position = Cesium.Cartesian3.fromDegrees(103.41774762544196, 35.083265862726655, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.CYAN,
                    duration: 2000,
                    count: 3
                })
            },
        });

        //RED
        position = Cesium.Cartesian3.fromDegrees(103.34514794376686, 35.11942651143058, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.RED,
                    duration: 2000,
                    count: 3
                })
            },
        });

        //YELLOW
        position = Cesium.Cartesian3.fromDegrees(103.45794453902958, 35.12239650479235, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.YELLOW,
                    duration: 2000,
                    count: 9
                })
            },
        });

        // SPRINGGREEN   
        position = Cesium.Cartesian3.fromDegrees(103.39379061776741, 35.166000463967926, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.SPRINGGREEN,
                    duration: 2000,
                    count: 9
                })
            },
        });

        //LIME
        position = Cesium.Cartesian3.fromDegrees(103.49621921280655, 35.165679940417995, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.LIME,
                    duration: 2000,
                    count: 15
                })
            },
        });

        // MEDIUMTURQUOISE 
        position = Cesium.Cartesian3.fromDegrees(103.4361227864825, 35.20684165883036, 0);
        this.viewer.entities.add({
            position: position,
            ellipsoid: {
                radii: new Cesium.Cartesian3(2000.0, 2000.0, 2000.0),
                maximumCone: Cesium.Math.PI_OVER_TWO,
                material: new xt3d.EllipsoidObject.EllipsoidMaterial({
                    color: Cesium.Color.MEDIUMTURQUOISE,
                    duration: 2000,
                    count: 15
                })
            },
        });
    },

    setView() {
        let flyToOpts = {
            destination: {
                x: -1233509.025606406,
                y: 5100923.547921194,
                z: 3654112.8922849945
            },
            orientation: {
                heading: 5.431743193211036,
                pitch: -0.877469591050072,
                roll: 0.003210416202778177
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