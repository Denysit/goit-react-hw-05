import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from './Navigation.module.css';

export default function Navigation() {
    
    const buildLinkClass = ({ isActive }) =>
     { return clsx(css.link, isActive && css.isActive) };

    return (
    <div>
        <nav className={css.nav}>
            <NavLink to='/' className={buildLinkClass}>HomePage</NavLink>
            <NavLink to='/movies' className={buildLinkClass}>MoviesPage</NavLink>
        </nav>
    </div>
    )
}
