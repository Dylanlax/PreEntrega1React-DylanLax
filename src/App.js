import Navbar from "./components/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import RogImg from "./img/RogImg.png";
import axios from "axios";
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App(){

    return (
        <div>
            <BrowserRouter>
                <Navbar img={RogImg}/>
                
                    <Routes>
                        <Route exact path={'/'} element={<ItemListContainer/>} />



                    </Routes>
           
            </BrowserRouter> 
            


        </div>
    )
}










export default App;