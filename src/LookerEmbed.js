import React from 'react';

const LookerEmbed = ({ filter, filterValue }) => {
  const filterQuery = filter && filterValue ? `&params.${filter}=${encodeURIComponent(filterValue)}` : '';
  const iframeUrl = `https://lookerstudio.google.com/embed/reporting/ec996ca1-369c-45f8-89f5-529059a1df67/page/eRI4E${filterQuery}`;

  return (
    <div style={{ width: '100%', height: '800px' }}>
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



