

import styles from "./styles.module.css"
import MenuLink from "../MenuLink"

 const Menu = () => {


    return (

        <header>
            <nav  className={styles.navegacao}>
                <MenuLink className={styles.link} to="/">
                    Inicio


                </MenuLink>


                <MenuLink to="/sobremim">

                    Sobre Mim
                
                </MenuLink> 


            </nav>
        </header>



    )
 }

 export default Menu