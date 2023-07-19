import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Layout/Header/Header";
import {Meals} from "./components/Meals/Meals";
import {Cart} from "./components/Cart/Cart";

function App() {

    const [isCartShown, setIsCartShown] = useState(false);

    function showCartHandler() {
        setIsCartShown(true)
    }

    function hideCartHandler() {
        setIsCartShown(false)
    }


    return (
        <>
            {isCartShown && <Cart onCloseCart={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals></Meals>
            </main>
        </>
    );
}

export default App;
