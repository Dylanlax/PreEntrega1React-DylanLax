import Navbar from "./components/Navbar";
import RogImg from "./img/RogImg.png";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App(){

    return (
        <div>
            <BrowserRouter>
                <Navbar img={RogImg}/>
                <ItemListContainer greeting={"Bienvenido a Compus XD!"}/>
           
            </BrowserRouter> 
            


        </div>
    )
}










export default App;