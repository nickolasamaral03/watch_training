import { Itarefa } from "../../Types/types"
import Item from "./Item"
import styles from './tarefas.module.css' 

interface Props{
    tarefas: Itarefa[]
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Tarefas({tarefas, selecionaTarefa}: Props){
    return(
        <div className={styles.tarefasJuntas}>
             <h3 className={styles.treino}>Treinos:</h3>
             <ul>
                {tarefas.map((item) => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
             </ul>
        </div>
    )
}