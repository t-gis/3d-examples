import { memo, useCallback } from "react"
import { Box } from "./index.sty";

const {
    VITE_TGIS_homeUrl: tgisHomeUrl,
    VITE_TGIS_exp2DUrl: exp2DUrl,
    VITE_TGIS_doc2DUrl: doc2DUrl,
    VITE_TGIS_exp3DUrl: exp3DUrl,
    VITE_TGIS_doc3DUrl: doc3DUrl
} = import.meta.env;

const Header = () => {

    const handleClick = useCallback(() => {
        // navigate(tgisHomeUrl, {
        //     replace: true
        // })
        window.location = tgisHomeUrl;
    }, [])

    return (
        <Box>
            <div className="title">
                <div onClick={handleClick} className="iconfont icon-home"></div>
                TGIS map3d 示例
            </div>
            <div className="navs">
                <a className="nav-btn" href="./doc/index.html" >3D开发文档</a>
                <a className="nav-btn" href={exp2DUrl} >2D开发示例</a>
                <a className="nav-btn" href={doc2DUrl} >2D开发文档</a>
            </div>
        </Box>
    )
}

export default memo(Header);