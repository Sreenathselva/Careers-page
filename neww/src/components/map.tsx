"use client";

import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

export default function MapComponent() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <div style={{ width: "100%", height: "70vh" }}>
        <Map zoom={9} center={position}>
          <AdvancedMarker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}
