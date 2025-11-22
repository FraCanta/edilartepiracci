import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Image from "next/image";
import Link from "next/link";

// Custom marker icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38],
});

// Custom cluster icon
const createClusterCustomIcon = (cluster) => {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// Markers
const markers = [
  {
    geocode: [41.9361533082537, 16.01897627364764],
  },
];

export default function ContattiMap() {
  return (
    <MapContainer
      center={[41.9361533082537, 16.01897627364764]} // ✅ corretto
      zoom={15}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker, i) => (
          <Marker key={i} position={marker.geocode} icon={customIcon}>
            <Popup>
              <Link
                href="https://maps.app.goo.gl/C5WBEjNcda2tGnfA6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/logo/logo.svg"
                  alt="Marker image"
                  width={350}
                  height={350}
                />
              </Link>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
