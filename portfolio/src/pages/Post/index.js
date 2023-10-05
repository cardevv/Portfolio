import './Post.css'
import PostModelo from "components/PostModelo";
import posts from "json/posts.json"
import { Route, Routes, useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown"
import Notfound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

import styles from './styles.module.css'
import CardPost from 'components/CardPost';




const Post= () => {

    const parametros = useParams();

    const post = posts.find((post) => {

        return post.id ===  Number(parametros.id)

        

    } )

    if (!post) {
        return <Notfound></Notfound>
    }


    const postsRecomendados = posts.filter((post) => post.id !== Number(parametros.id)).sort((a,b ) => b.id - a.id).slice(0 , 4);

   
    

    return ( 

        <Routes>
            <Route path='*' element={<PaginaPadrao></PaginaPadrao>}>



            <Route
            index
             element={

                <PostModelo
        
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
        
               
                titulo={post.titulo}
                >
        
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>

                    <h2 className={styles.tituloOutrosPosts}>Outros projetos</h2>

                    <ul className={styles.postsRecomendados}>

                        {postsRecomendados.map((post) => (
                            <li key={post.id}>

                                <CardPost 
                                
                                post={post}></CardPost>

                            </li>
                        )
                            )}
                               

                    </ul>




                </PostModelo>
                

             }
            ></Route>



            </Route>
          
        </Routes>
        
      
    )





}  


export default Post;