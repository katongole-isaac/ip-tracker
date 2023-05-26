/**
 * ChangeView - Used to change the map view when lat and lng changes.
 * 
 */

import { useEffect } from "react";

import { useMap } from "react-leaflet";

const ChangeView = ({ center }) => {

  const map = useMap();

  useEffect(() => {
    map.setView(center);

  }, [center]);
  
  return null;
};

export default ChangeView;