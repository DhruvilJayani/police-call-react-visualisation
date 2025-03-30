import React from 'react';

const StreamlitEmbedMap = ({ filter, filterValue }) => {
  const queryParam = filter && filterValue ? `?filter=${filter}&value=${encodeURIComponent(filterValue)}` : '';
  const streamlitUrl = `http://localhost:8502/${queryParam}`;  // Port 8502 for the map Streamlit app

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        width="100%"
        height="100%"
        src={streamlitUrl}
        frameBorder="0"
        title="Streamlit Map Visualization"
      ></iframe>
    </div>
  );
};

export default StreamlitEmbedMap;
