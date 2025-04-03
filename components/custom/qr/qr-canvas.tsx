"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QRCodeComponent() {
    const [url, setUrl] = useState("https://qr-code-styling.com");
    const [fileExt, setFileExt] = useState("png");
    const qrRef = useRef(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: 300,
            height: 300,
            data: url, // Ensure initial URL is set
            image:
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 20
            }
        });

        if (qrRef.current) {
            qrCode.current.append(qrRef.current);
        }
    }, []);

    useEffect(() => {
        if (qrCode.current) {
            qrCode.current.update({ data: url });
        }
    }, [url]);

    const onUrlChange = (event: any) => {
        event.preventDefault();
        setUrl(event.target.value);
    };

    const onExtensionChange = (event: any) => {
        setFileExt(event.target.value);
    };

    const onDownloadClick = () => {
        if (qrCode.current) {
            // @ts-ignore
            qrCode.current.download({ extension: fileExt });
        }
    };

    return (
        <div className="App">
            <div style={styles.inputWrapper}>
                <input value={url} onChange={onUrlChange} style={styles.inputBox} />
                <select onChange={onExtensionChange} value={fileExt}>
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                    <option value="webp">WEBP</option>
                </select>
                <button onClick={onDownloadClick}>Download</button>
            </div>
            <div ref={qrRef} />
        </div>
    );
}

const styles = {
    inputWrapper: {
        margin: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    inputBox: {
        flexGrow: 1,
        marginRight: 20
    }
};
