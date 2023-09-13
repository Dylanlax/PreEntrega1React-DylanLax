import Navbar from "./components/Navbar";
import RogImg from "./img/RogImg.png";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App(){

    return (
        <div>
            <Navbar img={RogImg}/>
            <ItemListContainer greeting={"Bienvenido a Compus XD!"}/>


        </div>
    )
}










export default App;