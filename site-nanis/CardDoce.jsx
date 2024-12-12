import style from './CardDoce.module.css';
import Button from './src/Components/Button';

const CardDoces = ({ nome, valor, descricao, imagem, _id }) => {

    // Verifica se o ID está correto
    console.log("ID do Doce:", _id);  

    return (
        <div className={style.cardDoces}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>R${valor}</p>
            <img src={imagem} alt={nome} title={nome} />
            <div>
            <Button label="DETALHE" router={`/details/${_id}`} className={style.detalhes} />
            </div>
        </div>
    );
}

export default CardDoces;
