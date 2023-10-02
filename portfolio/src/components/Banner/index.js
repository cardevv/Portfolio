import styles from './styles.module.css'


import circuloColorido from 'assets/circulo_colorido.png'

import minhaFoto from 'assets/minha_foto.png'


const Banner = () => {

    return (


        <div className={styles.banner}>
            <div className={styles.apresentacao}
            
            
            > 
            <h1 className={styles.titulo}>
                Olá
            </h1>
            </div>

            <p className={styles.paragrafo}>Boas vindas ao meu espaço</p>

            <div className={styles.imagens}>

                <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                alt=''
                >
                
                </img>
                <img
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="foto sorrindo"
                >
                
                </img>


            </div>


        </div>
        


    )
}


export default Banner;