/**
 * Display Map Component - It displays leaftlet map
 *
 */

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import ChangeView from "./map/changeView";

import config from "./map/map-config";

const DisplayMap = ({ lat, lon, query: ip, city, countryCode, status }) => {

  const center = [lat, lon];

  return (
    <div className="container-fluid">
      <MapContainer
        center={center}
        zoom={config.ZOOM_LEVEL}
        scrollWheelZoom={true}
        className="map-container"
        keyboard
      >
        <TileLayer attribution={config.attribution} url={config.url} />

        <Marker position={center}>
          {status && status !== "fail" ? (
            <Popup>
              {ip} <br /> {`${city} - ${countryCode}`}
            </Popup>
          ) : (
            <Popup> {` Default Location`} </Popup>
          )}
        </Marker>
        <ChangeView center={center} />
      </MapContainer>
    </div>
  );
};

export default DisplayMap;

DisplayMap.defaultProps = {
  lat: 51.525,
  lon: -0.09,
};
