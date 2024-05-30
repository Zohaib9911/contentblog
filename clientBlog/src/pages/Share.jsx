import React, { useState } from 'react';
import ShareModal from '../Components/ShareModel';
import { Button } from 'flowbite-react';

function Share() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const postUrl = window.location.href;

  return (
    <div>
      <button color="gray" onClick={() => setModalIsOpen(true)}>Share Post</button>

      <ShareModal
        show={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        url={postUrl}
        onClick={() => setModalIsOpen(false)}
      />

    </div>
  );
}

export default Share;