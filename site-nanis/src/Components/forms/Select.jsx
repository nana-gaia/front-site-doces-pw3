// import styles from './Select.module.css'


function Select(name, text){
    return(
     <div className={{s}}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
            <option>Selecione uma categoria</option>
            <option>Brownie</option>
            <option>Pão de mel</option>
            <option>Trufa</option>
            <option>Cone</option>
            <option>biscoito decorado</option>
            <option>Coxinha de morango</option>
        </select>
     </div>   
    )
}

export default Select