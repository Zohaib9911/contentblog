import React, { useState } from 'react';
import ShareButton from './ShareButton';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareModal = ({ show, onClose, url, onClick }) => {

  return (

    <Modal
      show={show}
      onClose={onClose}
      popup
      size='lg'
    >
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
          <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
            Please select where you want to share this post
          </h3>
          <div className='flex flex-col justify-center gap-4'>
            <ShareButton url={url} />
            <div className=' flex space-x-2'>
              <input type="text" value={url} readOnly />
              <CopyToClipboard text={url}>
                <Button gradientDuoTone='purpleToPink'>Copy URL to Clipboard</Button>
              </CopyToClipboard>
            </div>
            <Button color='gray' onClick={onClick}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;