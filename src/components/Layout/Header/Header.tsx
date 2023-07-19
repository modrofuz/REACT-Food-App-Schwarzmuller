import classes from './Header.module.css'
import {HeaderCartButton} from "./HeaderCartButton";
import mealsImage from '../../../assets/meals.jpg';
export function Header(props: any) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClickHeaderButton={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </>
    );
}