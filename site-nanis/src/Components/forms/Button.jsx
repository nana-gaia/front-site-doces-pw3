import style from './Button.module.css'

function Button({rotulo}){
    return(
        <>
            <div>
                <button className={style.button}>{rotulo}</button>
            </div>
        </>
    )
}

export default Button