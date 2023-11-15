import Link from "next/link";
import Logo from "../../assets/icons/logo.svg";
import Notification  from "../../assets/icons/notif.svg";
import Docs from "../../assets/icons/docs.svg"; 
import Avatar from "../../assets/icons/avatar.svg";
import DropDown from "../../assets/icons/dropDown.svg";
import styles from "./navBar.module.scss"


const NavBar = () => {

    return ( 
        <div className="container">
            <div className={styles.navContainer}>
                <Link href="/"><Logo/></Link>
                <input type="search" name="search for anything" id="" />
                <Docs className={styles.docs}/>
                <Notification/>
                <Avatar/>
                <small >Olatunde</small>
                <DropDown className={styles.drop}/>
            </div>
        </div>
    );
};

export default NavBar;