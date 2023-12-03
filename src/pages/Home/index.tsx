import { memo, useCallback, useEffect, useState } from "react";
import { Box, ContentBox } from "./index.sty";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { generatePath } from "react-router-dom";
import Header from "@/components/Header";
import stores, { TYPE_EXAMPLE_LIST } from '@/stores';

export type SidebarDataEntity = {
    id?: number,
    pid?: number
    title: string,
    url: string,
    image: string,
    query?: any
}

export type SidebarChildEntity = {
    title: string,
    list?: SidebarDataEntity[]
}

export type SidebarEntity = {
    id: number,
    title: string,
    icon: string,
    children?: SidebarChildEntity[]
}

const apiDataId = 99

const Home = memo(() => {

    const [data, setData] = useState<SidebarEntity[]>([
        {
            id: 1,
            title: "快速开始",
            icon: "icon-icon_fabu",
            children: [
                {
                    title: "基础部分",
                    list: [
                        { title: "创建地图", url: "./codes/basic/create-map.js", image: "basic/create-map.jpg" },
                        // { title: "地图控件", url: "./codes/basic/map-controls.js", image: "basic/map-controls.png" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "基础图层",
            icon: "icon--guoji-xianxing",
            children: [
                {
                    title: "在线服务(互联网)",
                    list: [
                        // { title: "OSM白色底图", url: "./codes/layers/osm.js", image: "basic/create-map.png" },
                        { title: "ArcGis蓝色底图", url: "./codes/layers/arcgis-blue.js", image: "layers/arcgis-blue.jpg" },
                        { title: "ArcGis灰色底图", url: "./codes/layers/arcgis-gray.js", image: "layers/arcgis-gray.jpg" },
                        { title: "ArcGis白色底图", url: "./codes/layers/arcgis-warm.js", image: "layers/arcgis-warm.jpg" },
                        { title: "天地图蓝色底图", url: "./codes/layers/tianditu-blue.js", image: "layers/tianditu-blue.jpg" },
                        { title: "天地图白色底图", url: "./codes/layers/tianditu-warm.js", image: "layers/tianditu-warm.jpg" },
                        // { title: "超图白色底图(深圳)", url: "./codes/layers/supermap-warm.js", image: "layers/supermap-warm.jpg" },
                        // { title: "超图蓝色底图(深圳)", url: "./codes/layers/supermap-blue.js", image: "layers/supermap-blue.jpg" },
                    ]
                },
                {
                    title: "信创云服务(内网)",
                    list: [
                        { title: "天地图蓝色底图", url: "./codes/layers/tianditu-blue-1.js", image: "layers/tianditu-blue.jpg" },
                        { title: "天地图白色底图", url: "./codes/layers/tianditu-warm-1.js", image: "layers/tianditu-warm.jpg" },
                        { title: "规资蓝色底图", url: "./codes/layers/tgis-blue-4490.js", image: "layers/tgis-blue-4490.jpg" },
                        { title: "规资白色底图", url: "./codes/layers/tgis-warm-4490.js", image: "layers/tgis-warm-4490.jpg" },
                        { title: "TGIS MVT图层", url: "./codes/layers/supermap-mvt.js", image: "layers/supermap-mvt.jpg", query: { sm: true } }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "矢量数据",
            icon: "icon-guizeyinqing",
            children: [
                {
                    title: "基础对象",
                    list: [
                        { title: "文字", url: "./codes/vector/entity-label.js", image: "vector/entity-label.jpg" },
                        { title: "图片", url: "./codes/vector/entity-billboard.js", image: "vector/entity-billboard.jpg" },
                        { title: "点", url: "./codes/vector/entity-point.js", image: "vector/entity-point.jpg" },
                        { title: "线", url: "./codes/vector/entity-polyline.js", image: "vector/entity-polyline.jpg" },
                        { title: "面", url: "./codes/vector/entity-polygon.js", image: "vector/entity-polygon.jpg" },
                        { title: "混合矢量", url: "./codes/vector/entity-mixin.js", image: "vector/entity-mixin.jpg" },
                        { title: "迁徙线", url: "./codes/vector/polyline-migrate.js", image: "vector/polyline-migrate.gif" },
                        { title: "动态线", url: "./codes/vector/polyline-dynamic.js", image: "vector/polyline-dynamic.gif" },
                        { title: "精灵线", url: "./codes/vector/polyline-sprite.js", image: "vector/polyline-sprite.gif" },
                        { title: "飞线", url: "./codes/vector/polyline-flying.js", image: "vector/polyline-flying.gif" },
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "圆形对象",
            icon: "icon-circle1",
            children: [
                {
                    title: "基础对象",
                    list: [
                        { title: "雷达扫描", url: "./codes/circle/radarscan.js", image: "circle/radarscan.gif" },
                        { title: "扩散圆", url: "./codes/circle/diff-circle.js", image: "circle/diff-circle.gif" },
                        { title: "波纹圆", url: "./codes/circle/wave-circle.js", image: "circle/wave-circle.gif" },
                        { title: "六边形扩散", url: "./codes/circle/diff-hexagon.js", image: "circle/diff-hexagon.gif" },
                        { title: "扇型扫描", url: "./codes/circle/scane-circle.js", image: "circle/scane-circle.gif" },

                    ]
                }
            ]
        },
        {
            id: 7,
            title: "墙体对象",
            icon: "icon-brick_wall",
            children: [
                {
                    title: "基础对象",
                    list: [
                        { title: "普通动态", url: "./codes/wall/dynamic-wall.js", image: "wall/dynamic-wall.gif" },
                        { title: "高级动态", url: "./codes/wall/flow-wall.js", image: "wall/flow-wall.gif" },
                        { title: "锯齿围栏", url: "./codes/wall/sawtooth-wall.js", image: "wall/sawtooth-wall.gif" }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "球体对象",
            icon: "icon--guoji",
            children: [
                {
                    title: "基础对象",
                    list: [
                        { title: "电弧穹顶", url: "./codes/ellipsoid/electric.js", image: "ellipsoid/electric.gif" },
                        { title: "球体材质", url: "./codes/ellipsoid/material.js", image: "ellipsoid/material.gif" },
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "高阶组件",
            icon: "icon-yunyingguanli",
            children: [
                {
                    title: "基础对象",
                    list: [
                        { title: "扫描线", url: "./codes/hoc/scanline.js", image: "hoc/scanline.gif" },
                        { title: "光锥柱体", url: "./codes/hoc/cone-glow.js", image: "hoc/cone-glow.gif" },
                        { title: "发光柱体", url: "./codes/hoc/cylinder-glow.js", image: "hoc/cylinder-glow.gif" },
                    ]
                }
            ]
        },
        // {
        //     id: 3,
        //     title: "场景工具",
        //     icon: "icon-yewu-xianxing",
        //     children: [
        //         {
        //             title: "场景工具",
        //             list: [
        //                 { title: "测量工具", url: "./codes/scene-tools/measure.js", image: "scene-tools/measure.gif" },
        //                 { title: "绘制工具", url: "./codes/scene-tools/draw.js", image: "scene-tools/draw.gif" },
        //                 { title: "轨迹回放", url: "./codes/scene-tools/track-line.js", image: "scene-tools/track-line.gif" },
        //             ]
        //         },
        //         {
        //             title: "弹出层",
        //             list: [
        //                 { title: "弹窗", url: "./codes/scene-tools/popup.js", image: "scene-tools/popup.png" }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 4,
        //     title: "可视化",
        //     icon: "icon-yunyingguanli",
        //     children: [
        //         {
        //             title: "Mapv",
        //             list: [
        //                 { title: "蜂巢图", url: "./codes/mapv/honeycomb.js", image: "mapv/honeycomb.png" },
        //                 { title: "热力图", url: "./codes/mapv/heatmap.js", image: "mapv/heatmap.gif" },
        //                 { title: "强边界图", url: "./codes/mapv/force-edge-bundling.js", image: "mapv/force-edge-bundling.gif" },
        //                 { title: "迁徙时序图", url: "./codes/mapv/migrate-time.js", image: "mapv/migrate-time.gif" },
        //                 { title: "迁徙图", url: "./codes/mapv/migrate.js", image: "mapv/migrate.gif" },
        //                 { title: "动态轨迹", url: "./codes/mapv/polyline-time.js", image: "mapv/polyline-time.gif" },
        //             ]
        //         }
        //     ]
        // }
    ])
    // const navigate = useNavigate();

    const handleChartClick = useCallback(({ id, pid, url, title, query }: SidebarDataEntity) => {
        let queryStr = new URLSearchParams(query ?? {}).toString();
        if (queryStr) {
            queryStr = "&" + queryStr;
        }
        const appendUrl = pid === apiDataId ? `#/editor?id=${id}` : generatePath(`#/editor?r=${url}${queryStr}`);
        const w = window.open(appendUrl, title);
        if (w) {
            w.onload = function () {
                w.document.title = title + " - TGis 3d 示例";
            }
        }

    }, [data])


    useEffect(() => {
        stores.on(TYPE_EXAMPLE_LIST, (content: any[]) => {
            if (!content || !content.length) return;
            const group: SidebarEntity = {
                id: apiDataId,
                title: '开发示例',
                icon: 'icon-code',
                children: []
            };
            const token = localStorage.getItem('t-gis-token')
            content.forEach((x: any) => {
                if (!x.category) return
                const child = group.children!.find(z => z.title === x.category);
                const item: SidebarDataEntity = {
                    id: x.id,
                    title: x.name,
                    url: x.content,
                    image: `/api/upload/download?id=${x.imageId}&token=Bearer ${token}`, 
                    pid: apiDataId
                }
                if (!child) {
                    group.children!.push({ title: x.category, list: [item] });
                } else {
                    child.list!.push(item);
                }
            });
            setData(d => [...d.filter(x => x.id !== apiDataId), group]);
        });
    }, []);

    return (
        <Box>
            <Header />
            <ContentBox>
                <Sidebar data={data} />
                <Content onClick={handleChartClick} data={data} />
            </ContentBox>
        </Box>
    )
})

export default Home;