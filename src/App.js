import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import RogImg from "./img/RogImg.png";
import axios from "axios";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App(){

    return (
        <div>
            <BrowserRouter>
                <Navbar img={RogImg}/>
                
                    <Routes>
                        <Route exact path={'/'} element={<ItemListContainer/>} />
                        <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                        <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>


                    </Routes>
           
            </BrowserRouter> 
            


        </div>
    )
}










export default App;