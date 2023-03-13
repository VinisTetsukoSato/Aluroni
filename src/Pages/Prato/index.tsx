import style from './Pratos.module.scss';
import { useParams, useNavigate} from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPratos from 'components/TagsPratos';

export default function Pratos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato) {
    return '';
  }
  return (
    <>
      <button className={style.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={style.container}>
        <h1 className={style.titulo}>
          {style.prato}
        </h1>
        <div className={style.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPratos {...prato} />
        </div>
      </section>
    </>
  );
}