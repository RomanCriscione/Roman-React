import classes from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.left}>
                <h4>FitóPlantas</h4>
            </div>
            <nav className={classes.center}>
            <Link to="/category/plantas">Plantas</Link>
                <Link to="/category/macetas">Macetas</Link>
                <Link to="/category/quimicos">Agroquimicos</Link>
            </nav>
            <div className={classes.right}>
                <CartWidget />
            </div>
        </header>
    );
};

export default Navbar;