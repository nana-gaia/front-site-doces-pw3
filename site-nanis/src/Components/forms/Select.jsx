import styles from './Select.module.css'


// function Select(name, text){
//     return(
//      <div className={{s}}>
//         <label htmlFor={name}>{text}</label>
//         <select name={name} id={name}>
//             <option>Selecione uma categoria</option>
//             <option>Brownie</option>
//             <option>Pão de mel</option>
//             <option>Trufa</option>
//             <option>Cone</option>
//             <option>biscoito decorado</option>
//             <option>Coxinha de morango</option>
//         </select>
//      </div>   
//     )
// }

// export default Select

function Select({ text, name, options, handlerOnChange, value }) {
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} onChange={handlerOnChange}>
                <option>Selecione uma opção</option>
                {
                    options.map((option)=>(
                        <option value={option.cod_categoria} key={option.cod_categoria}>{option.nome_categoria}</option>
                    ))
                }
            </select>

        </div>
    );
}

export default Select;