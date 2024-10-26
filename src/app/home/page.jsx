"use client"

import Image from "next/image"
import { styles } from "./styles_home"
import { Qr_scanner } from "@/components/qr_scanner/qr_scanner";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className={styles.header}>
                <h1 className={styles.h1}>Bienvenido</h1>
                <div>
                    <Image
                        className={styles.imageLogo}
                        src="/images/armadillo.png"
                        alt="Logo de la empresa"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <Qr_scanner />
            </div>

            <div className="w-full flex justify-center mt-5">
                <div className="card w-[18rem] bg-white shadow-lg rounded-lg overflow-hidden">
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=oGfaB0MfjE6Xf1-ItkcO5ryNt8VTywxAhlN172EK9ItURVdOSk1WRDc2T001MElRVFgxTTVXWFM5TS4u" target="_blank"><Image
                        className="w-full h-auto"
                        src="/images/images.png"
                        alt="Imagen de la tarjeta"
                        width={288}
                        height={288}
                    /></a>
                    <div className="p-4">
                        <p className="text-gray-700 text-base lg:text-xl">¡Gracias por Usarnos!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
