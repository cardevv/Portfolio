import styles from './styles.module.css'
import erro404 from 'assets/erro_404.png'



const Notfound = () => {

    return (

        <>

<div className={styles.conteudoContainer}>

<span className={styles.texto404}>404</span>
<h1 className={styles.titulo}>
    Ops! Página não encontrada.
</h1>

<p className={styles.paragrafo}>

    Volte a página inicial.
</p>

<div className={styles.botaoContainer}>

    <button>Voltar</button>
</div>

<img className={styles.imagemCachorro}
src={erro404}
alt='cachorro de oculos'
></img>

</div>

<div className={styles.espacoEmBranco}></div>
        
        </>
      

    )


}

export default Notfound;