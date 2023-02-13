## 更新步骤
1. 使用 dist 里面的 Cesium 库替换页面上的 Cesium 库（必须替换，sdk 修改了部分 Cesium 代码）
2. 替换 gis.map3d.min.js 为 map3d.iife.js

## 大更新 2023-02-13 15:23:28 星期一
1. gis.map3d.min.js 更名为 map3d.iife.js
2. 增加模块化输出 map3d.es.js map3d.umd.js ，更好的融合 vue 或 react
3. 使用新的 map3d 可减少之前的 script 标签引入，都打包到一起了
4. 兼容之前的 Map3D