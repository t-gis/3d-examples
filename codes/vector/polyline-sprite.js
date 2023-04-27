import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addData();
        this.setView();
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer("map");
        //是否开启抗锯齿
        this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = true;

    },

    //添加数据
    addData() {
        this.addPolyline1();
        this.addPolyline2();
        this.addPolyline3();
    },

    addPolyline1() {
        var promise = Cesium.GeoJsonDataSource.load('./assets/xt3d/data/nanshan-road1.geojson');
        promise.then((dataSource) => {
            this.viewer.dataSources.add(dataSource);
            let values = dataSource.entities.values;

            for (var i = 0; i < values.length; i++) {
                var line = values[i];
                line.polyline.material = new xt3d.PolylineObject.PolylineSpriteMaterialProperty({
                    duration: 2000, //控制速度
                    url: "./assets/xt3d/images/spriteline1.png" //材质路径
                });
                line.polyline.width = 2;
            }
        }).otherwise(function (error) {
            console.log(error)
        });
    },

    addPolyline2() {
        var promise = Cesium.GeoJsonDataSource.load('./assets/xt3d/data/nanshan-road2.geojson');
        promise.then((dataSource) => {
            this.viewer.dataSources.add(dataSource);
            let values = dataSource.entities.values;

            for (var i = 0; i < values.length; i++) {
                var line = values[i];
                line.polyline.material = new xt3d.PolylineObject.PolylineSpriteMaterialProperty({
                    duration: 2000, //控制速度
                    url: "./assets/xt3d/images/spriteline2.png" //材质路径
                });
                line.polyline.width = 2;
            }
        }).otherwise(function (error) {
            console.log(error)
        });
    },

    addPolyline3() {
        var promise = Cesium.GeoJsonDataSource.load('./assets/xt3d/data/nanshan-road3.geojson');
        promise.then((dataSource) => {
            this.viewer.dataSources.add(dataSource);
            let values = dataSource.entities.values;

            for (var i = 0; i < values.length; i++) {
                var line = values[i];
                line.polyline.material = new xt3d.PolylineObject.PolylineSpriteMaterialProperty({
                    duration: 2000, //控制速度
                    url: "./assets/xt3d/images/spriteline3.png" //材质路径
                });
                line.polyline.width = 2;
            }
        }).otherwise(function (error) {
            console.log(error)
        });
    },


    setView() {
        this.viewer.scene.camera.setView({
            duration: 1,
            destination: {
                x: -2391725.8817978012,
                y: 5389105.463719199,
                z: 2426579.1981711932
            },
            orientation: {
                heading: 0.026182155417799002,
                pitch: -0.514785700228952,
                roll: 0.00007136798630469343
            }
        });
    }
}

xt3dInit.init("map");