import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { listLogEntries } from './API'

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 9.917835,
    longitude: 78.087804,
    zoom: 10
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries)
  }

  useEffect(() => {
    (async () => {
      getEntries();
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
          <>
            <Marker
              key={entry._id}
              latitude={entry.latitude}
              longitude={entry.longitude}
            // offsetLeft={-12}
            // offsetTop={-24}
            >
              <div onClick={() => setShowPopup({
                // ...showPopup,
                [entry._id]: true,
              })}>
                <img src="https://i.imgur.com/y0G5YTX.png" className="marker" alt="marker" />
              </div>

            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top"
                >
                  <div className="popup">
                    <h3>{entry.title}</h3>
                    <p>{entry.comments}</p>
                    <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
                  </div>
                </Popup>
              ) : null
            }
          </>
        ))
      }

    </ReactMapGL>
  );
}
export default App;
