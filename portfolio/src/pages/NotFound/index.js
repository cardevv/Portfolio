import BotaoPrincipal from 'components/BotaoPrincipal';
import styles from './styles.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom';



const Notfound = () => {

    const navegar = useNavigate();

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

<div className={styles.botaoContainer}
onClick={() => navegar("/")}
>

    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
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