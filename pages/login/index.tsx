import Logo from "../../assets/icons/logo.svg"
import Button from "../../assets/icons/login.cta.svg"
import LoginImage from "../../assets/icons/loginImage.svg"
import styles from "./login.module.scss"


const Login = () => {
  return (
    <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
            <Logo className={styles.logo}/>
            <div>
                <LoginImage className={styles.image}/>
            </div>
        </div>
        <div className={styles.loginForm}>
            <h3>Welcome!</h3>
            <p className={styles.small}>Enter details to login</p>
            <form className={styles.form}>
                <input type="email" placeholder="Email" />
                <input type='password' placeholder="Password"/>
                <span>Forgot password?</span>
                <div><Button/></div>
            </form>
        </div>
        </div>
    )
}

export default Login;