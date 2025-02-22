"use client"
import React from "react"
import SidebarComponent from '../../component/sidebar/teacherSidebar'
import BentoGridDemo from '../../component/acertinity/WobbleCard'

const Home = () => {
  return (
    <SidebarComponent components={<div className='flex align-middle '><BentoGridDemo /></div>}/>
  )
}

export default Home