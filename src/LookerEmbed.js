import React from 'react';

const LookerEmbed = ({ filter }) => {
  const iframeUrl = `https://lookerstudio.google.com/embed/reporting/ec996ca1-369c-45f8-89f5-529059a1df67/page/eRI4E?filter=${filter}`;  // Dynamically modify the URL based on selected filter

  return (
    <div style={{ width: '100%', height: '800px' }}>
      {/* Embed Looker Studio iframe with dynamic filter */}
      <iframe
        width="100%"
        height="100%"
        src={iframeUrl}
        frameBorder="0"
        title="Looker Studio Visualization"
      ></iframe>
    </div>
  );
};

export default LookerEmbed;


// https://lookerstudio.google.com/embed/reporting/ec996ca1-369c-45f8-89f5-529059a1df67/page/eRI4E?filter=${filter}



