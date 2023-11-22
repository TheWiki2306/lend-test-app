// import Link from "next/link";
// import Logo from "../../assets/icons/logo.svg";
import Notification  from "../../assets/icons/notif.svg";
import Docs from "../../assets/icons/docs.svg"; 
import Avatar from "../../assets/icons/avatar.svg";
import DropDown from "../../assets/icons/dropDown.svg";
import Search from "../../assets/icons/search-svgrepo-com.svg";
import styles from "./navBar.module.scss"


const NavBar = () => {

    return ( 
        <div className="container navbar">
            <div className={styles.navContainer}>
                <div className={styles.search}>
                    <input type="search" placeholder="search for anything" id="" className={styles.input} />
                    <Search className={styles.buttonSearch}/>
                </div>
                    <div className={styles.nav}>
                        <Docs className={styles.docs}/>
                        <Notification/>
                        <div className={styles.innerNav}>
                            <Avatar/>
                            <small className={styles.small}>Olatunde</small>
                            <DropDown/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NavBar;