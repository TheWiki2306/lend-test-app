import { ReactNode } from "react";
import NavBar from "../navBar/navBar";

interface Props {
  children?: ReactNode
}


const Layout = ({children}: Props) => {
  return (
    <>
    <NavBar/>
    <div>{children}</div>
    </>
  )
}

export default Layout;