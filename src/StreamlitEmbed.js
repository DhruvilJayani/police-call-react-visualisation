import React from 'react';

const StreamlitEmbed = ({ filter }) => {
  // Replace this with your Streamlit app URL (locally or deployed)
  const streamlitUrl = `http://localhost:8501/?filter=${filter}`;  // Example for local Streamlit app

  return (
    <div style={{ width: '100%', height: '800px' }}>
      {/* Embed Streamlit iframe with dynamic filter */}
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
