import React, { useState } from 'react';

function GoogleDriveEmbed() {
  const [presentationLink, setPresentationLink] = useState('');
  const [fileId, setFileId] = useState(null);

  const embedPresentation = () => {
    setFileId(extractFileIdFromLink(presentationLink));
  };
  console.log(fileId);

  const extractFileIdFromLink = (link) => {
    const match = /\/d\/([-\w]+)\//.exec(link);
    return match ? match[1] : null;
  };

  const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : '';
  console.log(embedUrl);
  return (
    <div>
      <input
        type="text"
        value={presentationLink}
        onChange={(e) => setPresentationLink(e.target.value)}
        placeholder="Paste Google Drive link"
      />
      <button onClick={embedPresentation}>Import</button>
      <div id="presentationContainer">
        {fileId && (
          <iframe
            src={embedUrl}
            width="640"
            height="480"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Presentation"
          />
        )}
      </div>
    </div>
  );
}

export default GoogleDriveEmbed;
