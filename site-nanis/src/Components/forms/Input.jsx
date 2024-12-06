import style from './Input.module.css';

function Input({ type, text, name, placeHolder, value, handlerChangeDoceProp }) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder}
                value={value}
                onChange={handlerChangeDoceProp}
                
            />
        </div>
    );
}

export default Input;
