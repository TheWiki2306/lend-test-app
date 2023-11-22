import React from 'react'
import Link from 'next/link'
import Logo from "../../assets/icons/logo.svg"
import styles from "./sideBar.module.scss"

const SideBar = () => {
  return (
    <div id='sidebar'>
        <Link href="/"><Logo/></Link>
    </div>
  )
}

export default SideBar