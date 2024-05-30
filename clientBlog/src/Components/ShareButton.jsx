import React from 'react';
import { FacebookMessengerShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebook, FaWhatsapp, FaFacebookMessenger, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from 'flowbite-react';

const ShareButton = ({ url }) => {
  return (
    <div className=' flex flex-col space-y-4'>
      <FacebookShareButton url={url} className=' flex space-x-4 justify-start'>
        <Button className='w-10 h-10 border-b' as='div'>
          <FaFacebook className='w-6 h-6' />
        </Button>
        <span>Share on Faccebook</span>
      </FacebookShareButton>
      <WhatsappShareButton url={url} className=' flex space-x-4 justify-start'>
        <Button className='w-10 h-10 border-b' as='div' >
          <FaWhatsapp className='w-6 h-6' />
        </Button>
        <span>Share on WhatsApp</span>
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={url} className=' flex space-x-4 justify-start'>
        <Button className='w-10 h-10 border-b' as='div'>
          <FaFacebookMessenger className='w-6 h-6' />
        </Button>
        <span>Share on Facebook Messenger</span>
      </FacebookMessengerShareButton>
      <TwitterShareButton url={url} className=' flex space-x-4 justify-start'>
        <Button className='w-10 h-10 border-b' as='div'>
          <FaTwitter className='w-6 h-6' />
        </Button>
        <span>Share on Facebook Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton url={url} className=' flex space-x-4 justify-start'>
        <Button className='w-10 h-10 border-b' as='div'>
          <FaLinkedin className='w-6 h-6' />
        </Button>
        <span>Share on Facebook LinkedIn</span>
      </LinkedinShareButton>

    </div >
  );
};

export default ShareButton;