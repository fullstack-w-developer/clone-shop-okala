import React from 'react'
import Collapse from './Collapse'
import InstallApp from './InstallApp'

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] pb-12 mt-8 lg:mt-14">
        <Collapse/>
        <InstallApp/>
    </footer>
  )
}

export default Footer