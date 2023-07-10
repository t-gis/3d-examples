import React, { ElementRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import Source from '@/components/Source';
import Stage from '@/components/Stage';
import stores, { TYPE_EXAMPLE_LIST } from '@/stores';

const Sandcastle = memo(() => {

    const [code, setCode] = useState<string>("");
    const [searchParams] = useSearchParams();

    type StageHandle = React.ElementRef<typeof Stage>;
    const stageRef = React.useRef<StageHandle>(null);

    type SourceHandle = ElementRef<typeof Source>;
    const sourceRef = useRef<SourceHandle>(null);

    const getCode = useCallback(() => {
        const id = searchParams.get('id')
        const sm = searchParams.get('sm');
        if (id != null) {
            return new Promise<{ code: string, options: any }>(resolve => {
                stores.on(TYPE_EXAMPLE_LIST, (content: any[]) => {
                    const one = content.find(x => x.id === id)
                    resolve({ code: one ? one.content : '', options: { sm } })
                })
            })
        }
        const url = searchParams.get("r");
        return new Promise<{ code: string, options?: any }>((resolve, reject) => {
            if (url) {
                fetch(url)
                    .then(res => res.text())
                    .then(res => resolve({ code: res, options: { sm } }))
                    .catch(err => reject(err))
            } else {
                reject(new Error("url is not defined"))
            }
        })
    }, [code])

    const handleRun = useCallback((code: string, options?: any) => {
        code = code.replace('import * as Map3d from "map3d"', "");
        stageRef.current?.writeIframe(code, options);
    }, [])

    const handleReset = useCallback(() => {
        getCode().then(res => {
            setCode(res.code);
            sourceRef.current?.setCode(res.code);
            handleRun(res.code, res.options);
        });
    }, [])

    useEffect(() => {
        handleReset();
    }, [location])

    return (
        <Allotment defaultSizes={[80, 200]}>
            <Allotment.Pane>
                <Source
                    ref={sourceRef}
                    code={code}
                    onRun={handleRun}
                    onReset={handleReset}
                />
            </Allotment.Pane>
            <Allotment.Pane visible>
                <Stage ref={stageRef} />
            </Allotment.Pane>
        </Allotment>
    );
})

export default Sandcastle;