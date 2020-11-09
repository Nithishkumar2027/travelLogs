import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import { listLogEntries } from './API'

const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 9.917835,
    longitude: 78.087804,
    zoom: 10
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      setLogEntries(logEntries)
    })();
  }, [])

  return (
    <ReactMapGL
      {...viewPort}
      onViewportChange={setViewPort}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/nithishkumar/ckh9hwiy51qit19llgbtk35v6"
    >
      {
        logEntries.map(entry => (
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
          // offsetLeft={-12}
          // offsetTop={-24}
          >

            <div>
              <img src="https://i.imgur.com/y0G5YTX.png" className="marker" alt="marker" />
            </div>

          </Marker>
        ))
      }
    </ReactMapGL>
  );
}
// https://i.imgur.com/y0G5YTX.png
export default App;
