import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addData();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el);
        //是否开启抗锯齿
        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;
    },

    //添加数据
    addData() {
        this.addPolylineFlyings();
    },

    //添加飞线
    addPolylineFlyings() {
        fetch('./assets/xt3d/data/nanshan-road1.geojson').then(res => {
            return res.json();
        }).then(res => {
            var bbox = turf.bbox(res);
            let points = turf.randomPoint(100, {
                bbox: bbox
            }); //生成随机点
            let features = points.features;
            let point;
            let startPosition;
            let endPosition;
            features.forEach(item => {
                point = item.geometry.coordinates;
                startPosition = Cesium.Cartesian3.fromDegrees(point[0], point[1], 0);
                endPosition = Cesium.Cartesian3.fromDegrees(point[0], point[1], 5000 * Math.random())
                this.addPolylineFlying([startPosition, endPosition]);
            })
        })
    },

    addPolylineFlying(positions) {
        this.viewer.entities.add({
            polyline: {
                positions: positions,
                width: 2,
                material: new xt3d.PolylineObject.PolylineTrailMaterialProperty({
                    speed: 6 * Math.random(),
                    color: Cesium.Color.CYAN,
                    percent: 0.1,
                    gradient: 0.01,
                }),
            }
        });
    },


    setView() {
        this.viewer.scene.camera.setView({
            duration: 1,
            destination: {
                x: -2392968.857,
                y: 5391789.3995,
                z: 2423807.75055
            },
            orientation: {
                heading: 0.0029569,
                pitch: -0.474585,
                roll: 0.0000078,
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