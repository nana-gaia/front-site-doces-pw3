import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, _id}) => {
    return(
        <div className={style.container_buttons}>

            <Link to={`${router}${_id}`}>
                <button className={style.buttons}>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button