import * as Map3d from "map3d";

let xt3dInit = {
    init(el) {
        this.initViewer(el);
        this.addCircles();
        this.viewer.flyTo(this.viewer.entities);
    },

    //初始化viewer
    initViewer(el) {
        this.viewer = new Map3d.Viewer(el)

    },

    //添加波动圆
    addCircles() {
        let position = Cesium.Cartesian3.fromDegrees(106.88433361209046, 27.645364988637994, 126.58837375543308);
        let waveCircle = new xt3d.CircleObject.WaveCircle(this.viewer, position, {
            height: 100,
            radius: 100,
            color: Cesium.Color.RED,
            duration: 2000,
            count: 3
        });
        // waveCircle.remove();//删除对象

        position = Cesium.Cartesian3.fromDegrees(106.8850889029875, 27.648447704248348, 32.277422145507053);
        waveCircle = new xt3d.CircleObject.WaveCircle(this.viewer, position, {
            height: 50,
            radius: 200,
            color: Cesium.Color.GREEN,
            duration: 2000,
            count: 3
        });

        position = Cesium.Cartesian3.fromDegrees(106.88813665557215, 27.648530332248313, 40.303729118573436);
        waveCircle = new xt3d.CircleObject.WaveCircle(this.viewer, position, {
            radius: 150,
            color: Cesium.Color.YELLOW,
            duration: 2000,
            count: 3
        });
    },

    destroy() {
        this.viewer.entities.removeAll();
        this.viewer.imageryLayers.removeAll(true);
        this.viewer.destroy();
    }
}

xt3dInit.init("map");