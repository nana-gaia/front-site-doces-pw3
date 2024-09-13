import { Outlet, Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <>
            <nav className={style.NavBar}>
                <ul className={style.list}>
                    <li className={style.itens}>
                        <Link to='/Home' className={style.itens}>HOME</Link>
                    </li>
                    <li className={style.itens}>
                        <Link to='/Cardapio' className={style.itens}>CARDÁPIO</Link>
                    </li>
                    <li className={style.itens}>
                        <Link to='/CreateDoces' className={style.itens}>CADASTRAR PRODUTO!</Link>
                    </li>
                    <li className={style.itens}>
                        <Link to='/Cadastro' className={style.itens}>CADASTRE-SE!</Link>
                    </li>
                </ul>
                <img src ="../logo.png"/>

            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;