import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 9.917835,
    longitude: 78.087804,
    zoom: 10
  });

  return (
    <ReactMapGL
      {...viewPort}
      onViewportChange={setViewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/nithishkumar/ckh9hwiy51qit19llgbtk35v6"
    />
  );
}

export default App;
