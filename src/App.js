import "./scss/App.scss";
import React  from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return(
        <div className="App w-full h-screen">
            <Header />
            <Footer />
        </div>
    );
}
export default App;
