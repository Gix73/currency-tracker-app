import mapboxgl from "mapbox-gl";
import Map, { Marker, Popup } from "react-map-gl";
import { useEffect, useRef, useState } from "react";
import { MapContainer } from "./styled";

const MapGL = ({ markers }) => {
  const [bankMarkets, setBankMarkers] = useState([]);

  useEffect(() => {
    function createmarkers() {
      let bankMarkers = [];
      for (let i = 0; i < markers.length; i++) {
        bankMarkers.push(
          <Marker
            key={i}
            longitude={markers[i][0]}
            latitude={markers[i][1]}
            anchor="center"
          ></Marker>
        );
      }
      return bankMarkers;
    }

    setBankMarkers(createmarkers());
  }, [markers]);

  return (
    <MapContainer>
      <Map
        initialViewState={{
          longitude: 27.56667,
          latitude: 53.9,
          zoom: 10,
          attributionControl: false,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      >
        {bankMarkets}
      </Map>
    </MapContainer>
  );
};

export default MapGL;