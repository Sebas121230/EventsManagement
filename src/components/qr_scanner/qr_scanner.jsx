import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
export function Qr_scanner() {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        let isScanning = true;

        scanner.render(success, error);

        function success(result) {
            if (isScanning) {
                setScanResult(result);
            }
        }

        function error(err) {
            console.warn(err);
        }
    }, []);

    return (
        <div className="self-center w-1/2 mt-5 border-8 border-[var(--secondary-background)] p-1">
            <div>
                <p className={scanResult === "Rafael" ? "" : "hidden"}>Bienvenido {scanResult}, disfruta tu estadia</p>
                <p className={scanResult === "Rafael" || scanResult === null ? "hidden" : "text-red-500"}>Error: QR invalido, intentalo nuevamente</p>
                <div id="reader" className={scanResult ? "hidden" : ""}></div>
            </div>
        </div>
    );
}