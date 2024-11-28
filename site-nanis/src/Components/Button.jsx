import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, id_doce}) => {
    return(
        <div className={style.buttonContainer}>

            <Link to={`${router}${id_doce}`}>
                <button>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button