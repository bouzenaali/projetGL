"use client";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";
const LawyerPositionCart = ({ name }) => {
  const { t } = useTranslation();
  const position = [51.505, -0.09];
  const customIcon = L.icon({
    iconUrl: "/marker-icon-2x.png", // Path to your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "200px", width: "100%", zIndex: "0" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={customIcon}
        position={position}
      >
        <Popup>{t("location") + " " + name} </Popup>
      </Marker>
    </MapContainer>
  );
};
export default LawyerPositionCart;
