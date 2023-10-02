import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css"



const MenuLink = ({children , to}) => {

    const local = useLocation();

    return (

        <Link className={
            `
            ${styles.link}

            ${local.pathname === to ? styles.linkDestaque : ""}
            `

        }  to={to}>

            {children}
        
        
        
        </Link>

    )

}

export default MenuLink;