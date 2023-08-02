import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Layout/Header/Header";
import {Meals} from "./components/Meals/Meals";
import {Cart} from "./components/Cart/Cart";
import {CartProvider} from "./store/cartProvider";

function App() {

    const [isCartShown, setIsCartShown] = useState(false);

    function showCartHandler() {
        setIsCartShown(true)
    }

    function hideCartHandler() {
        setIsCartShown(false)
    }


    return (
        <CartProvider>
            {isCartShown && <Cart onCloseCart={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals></Meals>
            </main>
        </CartProvider>
    );
}

export default App;
