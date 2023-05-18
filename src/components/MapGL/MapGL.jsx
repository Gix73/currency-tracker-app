import Map, { Marker } from "react-map-gl";
import { memo, useEffect, useState } from "react";
import { MapContainer } from "./styled";
import { PropTypes } from "prop-types";
import { mapSetting, mapStyle } from "../../constants/mapSettings";

const MapGL = ({ markers }) => {
  const [bankMarkets, setBankMarkers] = useState([]);

  useEffect(() => {
    function createmarkers() {
      return markers.reduce((bankMarkers, e, i) => {
        return [
          ...bankMarkers,
          <Marker
            key={i}
            longitude={markers[i][0]}
            latitude={markers[i][1]}
            anchor="center"
          ></Marker>,
        ];
      }, []);
    }

    setBankMarkers(createmarkers());
  }, [markers]);

  return (
    <MapContainer>
      <Map
        initialViewState={mapSetting}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      >
        {bankMarkets}
      </Map>
    </MapContainer>
  );
};

MapGL.propTypes = {
  markers: PropTypes.array,
};

export default memo(MapGL);
