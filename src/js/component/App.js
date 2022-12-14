import Home from "./home";
import Navbar from "./Navbar";


function App(){
    return(
        <div className="App">
            <Navbar />
            <div className="Content">
                <Home />

            </div>
        </div>
    )
}



export default App