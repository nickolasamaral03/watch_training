import { Itarefa } from '../../../Types/types'
import styles from './item.module.css'

interface Props extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props){
    return(
        <li className={`${styles.eachItem} ${selecionado ? styles.itemSelecionado : ""}  ${completado ? styles.itemCompletado : ''} `}
        onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}
        >
        <div className={styles.tatem}>
            <h3 className={styles.titulo}>{tarefa}</h3>
            <span>{tempo}</span>
        </div>
        </li>
    )
}