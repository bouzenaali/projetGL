"use client";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import { setRegisterLawyerInfo } from "@/store/features/auth/register-lawyer/registerLawyerSlice";
import { useTranslation } from "react-i18next";
const StepOneCart = ({ handleChange, position }) => {
  const { t } = useTranslation();

  const customIcon = L.icon({
    iconUrl: "/marker-icon-2x.png", // Path to your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const dispatch = useDispatch();

  const [draggable, setDraggable] = useState(false);

  function DraggableMarker() {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            handleChange(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={customIcon}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>{draggable ? t("Marker is draggable") : t("Click here to make marker draggable")}</span>
        </Popup>
      </Marker>
    );
  }
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
      <DraggableMarker />
    </MapContainer>
  );
};
export default StepOneCart;
