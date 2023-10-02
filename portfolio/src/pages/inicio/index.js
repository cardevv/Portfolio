
import styles from './styles.module.css'
import posts from 'json/posts.json'
import Post from "components/CardPost"

const Inicio = () => {

return (
    <main>
        

        <ul className={styles.posts}>
            {posts.map((post) => (

            
                <li key={post.id}>
                    <Post post={post}></Post>



                </li>

            ))}


        </ul>

    

        
    </main>
    
)

}


export default Inicio