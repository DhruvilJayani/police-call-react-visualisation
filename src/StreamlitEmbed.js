import React from 'react';

const StreamlitEmbed = ({ filter, filterValue }) => {
  const queryParam = filter && filterValue ? `?filter=${filter}&value=${encodeURIComponent(filterValue)}` : '';
  const streamlitUrl = `http://localhost:8501/${queryParam}`;

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        width="100%"
        height="100%"
        src={streamlitUrl}
        frameBorder="0"
        title="Streamlit Visualization"
      ></iframe>
    </div>
  );
};

export default StreamlitEmbed;
