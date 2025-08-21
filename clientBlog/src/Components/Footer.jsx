import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className=' border border-t-8 border-primary'>
      <div className=' w-full max-w-7xl mx-auto'>
        <div className=' grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className=' mt-5'>
            <Link
              to='/'
              className=''
            >
              <img className='w-[130px] h[58px] ' src="/public/assets/Insomia.png" alt="Schelor Education Logo" />

            </Link>
          </div>
          <div className=' grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  25 Search Papers
                </Footer.Link>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Acedamic Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Follow Us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

          </div>
        </div>
        <Footer.Divider />
        <div className=' w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='Scholar Education'
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />

          </div>


        </div>

      </div>
    </Footer>
  )
}
