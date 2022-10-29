import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 1.140328, lng: -76.646614};
const DefaultZoom = 30;

const Locate = () => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ...DefaultLocation});
    setZoom(DefaultZoom);
  }

  return (
    <div>
      {/* <label>Latitute:</label> */}
      <input type="hidden" value={location.lat} disabled />
      {/* <label>Longitute:</label> */}
      <input type="hidden" value={location.lng} disabled />
      {/* <label>Zoom:</label> */}
      <input type="hidden" value={zoom} disabled />
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        mapTypeId="hybrid"
        style={{ height: "500px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
      <button onClick={handleResetLocation}>Volver a la Ubicacion</button>
    </div>
  );
}

export default Locate;