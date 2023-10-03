import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio";
import Sobremim from "./pages/sobremim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import Notfound from "pages/NotFound";




function AppRoutes() {
  return (    
   
      
      <BrowserRouter>
       <Menu></Menu>
      
      
      <Routes>

        <Route path="/" element={<PaginaPadrao/>}>

        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/sobremim" element={<Sobremim></Sobremim>}></Route>
        <Route path="posts/:id" element={<Post></Post>}></Route>

        


        </Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>


        
      </Routes>

      <Rodape></Rodape>
      </BrowserRouter>
    

    

  )
}

export default AppRoutes;
