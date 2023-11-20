import { ReactNode } from "react";
import NavBar from "../navBar/navBar";
import SideBar from "../sidebar/sideBar";
import Main from "../main/main";

interface Props {
  children?: ReactNode
}


const Layout = ({children}: Props) => {
  return (
    <>
      <NavBar/>
      <SideBar />
      <Main/>
      <div>{children}</div>
    </>
  )
}

export default Layout;