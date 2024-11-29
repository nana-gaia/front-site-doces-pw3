import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, id_doce}) => {
    return(
        <div className={style.container_buttons}>

            <Link to={`${router}${id_doce}`}>
                <button className={style.buttons}>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button