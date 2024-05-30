import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhone, } from "react-icons/fa";

export default function ModelSubmit({ show, setShowModel }) {

  const [openModal, setOpenModal] = useState(true);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <Modal size='5xl' onClose={() => setShowModel(false)} show={show} popup >

      <Modal.Body className="grid grid-cols-5 p-[0]">
        <div className="col-span-3 flex flex-col">

          <h1 className="text-2xl font-bold p-[20px]">Let's get intouch</h1>

          <div className=" pl-[20px] py-[20px]">
            <div className="col-span-3">
              {/* Text input fields */}
              <div className="mb-2 block">
                <Label htmlFor="text" value="Name" />
              </div>
              <TextInput id="name" type="text" placeholder="Name" Label='Name' />
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" type="email" placeholder="Email" />
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput id="phone" type="tel" placeholder="Phone Number" />
              <div className="mb-2 block">
                <Label htmlFor="website" value="WebSite" />
              </div>
              <TextInput id="website" type="url" placeholder="Website" />
              <div className="mb-2 block">
                <Label htmlFor="text" value="Comments" />
              </div>
              <TextInput id="comments" type="text" placeholder="Comments" />
              {/* Submit button */}
              <Button className=" mt-[15px] bg-[#25A0DB]">Submit</Button>
            </div>
          </div>
        </div>


        <div className="col-span-2 bg-[#25A0DB] w-full h-full " >
          <Modal.Header>

          </Modal.Header>


          {/* Company information */}
          <div className=" flex flex-col gap-y-8 flex-wrap py-[20px]">

            <div className='flex flex-col items-center justify-center space-x-4'>
              <div className='border w-[50px] h-[50px] rounded-full relative bg-white flex items-center justify-center border-blue-500'>
                <FaPhone className='w-1/2 h-1/2 rounded-full text-[#5AA1E3]' />
              </div>
              <h1 className=' text-[24px] text-white font-[700] my-auto'>+1(323)20825-3883</h1>
            </div>

            <div className='flex flex-col items-center justify-center space-x-4'>
              <div className='border w-[50px] h-[50px] rounded-full relative bg-white flex items-center justify-center border-blue-500'>
                <FaEnvelope className='w-1/2 h-1/2 rounded-full text-[#5AA1E3]' />
              </div>
              <h1 className=' text-[24px] text-white font-[700] my-auto'>info@axcelworld.com</h1>
            </div>

            <div className='flex flex-col items-center justify-center space-x-4'>
              <div className='border w-[50px] h-[50px] rounded-full relative bg-white flex items-center justify-center border-blue-500'>
                <FaMapMarker className='w-1/2 h-1/2 rounded-full text-[#5AA1E3]' />
              </div>
              <h1 className=' text-[24px] text-white font-[700] my-auto'>Los Angles
                California, USA</h1>
            </div>
          </div>

        </div>

      </Modal.Body>
    </Modal>

  )
}
