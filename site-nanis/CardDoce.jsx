import style from './CardDoce.module.css';
import Button from './src/Components/Button'

const CardDoces = ({ nome, valor, descricao, imagem, id_doce }) => {
    
    return(
        <div className={style.cardDoces}>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>{valor}</p>
            <img src={imagem} alt={nome} title={{nome}} />
            <div>
                <Button label='DETALHE' router='/Details/' id_doce={id_doce} className={style.detalhes}/>
            </div>
        </div>
    )
}

export default CardDoces
