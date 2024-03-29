import { forwardRef, ForwardRefRenderFunction, memo, useImperativeHandle, useRef } from "react"
import { Box } from "./index.sty"

type SandcastleProps = {}

type SandcastleHandle = {
    writeIframe: (code: string, options?: any) => void
}

const Sandcastle: ForwardRefRenderFunction<SandcastleHandle, SandcastleProps> = ((props, ref) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const writeIframe = (code: string, options?: any) => {
        if (iframeRef.current) {
            const iframeDoc = iframeRef.current.contentDocument;
            const hasSM = options?.sm ?? false;
            iframeDoc?.open();
            iframeDoc?.write(`
                <head>
                    <meta charset="UTF-8" />
                    <script src="./Sandcastle-header.js"></script>
                    <link rel="stylesheet" href="./Sandcastle-header.css" />

                    ${hasSM && '<script src="./Cesium/ThirdParty/supermap/Supermap.iife.js"></script>'}
                    
                    <link rel="stylesheet" href="./Cesium/Widgets/widgets.css" />
                    <script src="./Cesium/Cesium.js"></script>

                    <script src="./map3d.iife.js"></script>
                    <script src="./turf.min.js"></script>
                    <script src="./xt3d.js"></script>
                    <style>
                        *, html, body {
                            padding: 0;
                            margin: 0;
                        }
                        #map {
                            position: fixed;
                            left: 0px;
                            right: 0px;
                            bottom: 0px;
                            top: 0px;
                            background: #ececec;
                        }
                        #toolbar {
                            margin: 5px;
                            padding: 2px 5px;
                            position: absolute;
                        }
                        .cesium-button input, .cesium-button label {
                            display: flex;
                            align-items: center;
                        }
                        .cesium-button input, .cesium-button label input {
                            margin-right: 4px;
                        }
                    </style>
                </head>
                <body onload="onload()">
                    <div id="map"></div>
                    <div id="toolbar"></div>
                    <script>
                        function onload(){
                            ${code}
                        }
                    </script>
                </body>
            `);
            iframeDoc?.close();
        }
    }
    useImperativeHandle(ref, () => ({
        writeIframe
    }))
    return (
        <Box>
            <iframe ref={iframeRef}></iframe>
        </Box>
    )
})

export default memo(forwardRef(Sandcastle));