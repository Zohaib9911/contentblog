import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FaComments, FaSuitcase, FaClock, FaUserFriends, FaStackExchange, FaRedo } from "react-icons/fa";

import HomeServiceFeatures from '../Components/Home/HomeServiceFeatures';
import ExpertGuidence from '../Components/Home/ExpertGuidence';
import ScholarEducation from '../Components/Home/ScholarEducation';
import HeroSection from '../Components/Home/HeroSection';
import ScholorWork from '../Components/Home/ScholorWork';
import WhyNeedUs from '../Components/Home/WhyNeedUs';


export default function Home() {
  return (
    <div className='mt-[70px] '>
      <HeroSection />
      <ExpertGuidence />
      <ScholorWork />
      <HomeServiceFeatures />
      <ScholarEducation />
      <WhyNeedUs />

      <div>
        {/* 1st div */}
        {/* <div className=' flex flex-col text-center'>
          <h1 className=' font-[700] text-[32px] text-[#3f4b59] pt-[20px] flex-wrap'>Trusted worldwide 90% of our customers re-engage</h1>
          <p className=' font-[400] text-[16px] text-[#3f4b59] py-[16px] flex-wrap'>Take it from the best companies in the world. Time and time again, our current and past clients are impressed by the quality and speed of our work, and become ongoing, lasting partners with AXCEL.</p>
        </div>
        <div>
          <div className=' grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2   place-items-center space-x-[50px] space-y-[50px] p-[20px]'>
            <div >
              <img className="grayscale hover:grayscale-0 " src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/arbilogo.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/benchmark_logo-resized.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/calvert-dermatology-logo-header-2.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/CES.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/cropped-Paliesiaus-klinika-logo-1.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/eg-marine-services-logo-1.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/gsp-logo-01.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/ismea-logo-1.png" alt="" />
            </div>


            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/james-street-logo.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/JTS.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/LinguaLinkup-logo.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo1x.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo-2.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/Logo-hdr.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo-ratina.png" alt="" />
            </div>

            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo-RIO.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/logo-sticky-1.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/mobile_logo.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/NorthShorelogo.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/nuevo-logo-proformed.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/Picture1-removebg-preview.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/rsz_vip.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/Security-America-mortgage-logo.png" alt="" />
            </div>


            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/travel-to-bermuda13.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/UDP.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/uk-600.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/user11_logo_1595225055.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/vector-logo-big-2.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/yoyoni-logo-color_white-bg-2.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-11.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-8.jpg" alt="" />
            </div>

            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-9.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-12.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-1.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-3.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-5.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/03/lg-6.jpg" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/5ebae3e47b6c305ec4658fa3_TrcksRackslogotrans-p-500.png" alt="" />
            </div>
            <div >
              <img className="grayscale hover:grayscale-0" src="https://axcelworld.com/aw2o24_wp/wp-content/uploads/2022/04/animal-doc.png" alt="" />
            </div>



          </div>
        </div> */}

      </div>
    </div>
  )
}
