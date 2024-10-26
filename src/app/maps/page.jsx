"use client"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map() {
    return (
        <MapContainer center={[4.873798, -74.038201]} zoom={30} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[4.873798, -74.038201]}>
                <Popup>
                    This is a popup
                </Popup>
            </Marker>
        </MapContainer>
    );
}