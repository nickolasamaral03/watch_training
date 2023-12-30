import { useState } from 'react'
import Button from '../Button'
import styles from './form.module.css'
import { Itarefa } from '../../Types/types'
import { v4 as uuidv4 } from 'uuid'; 

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Form({setTarefas}: Props): JSX.Element{

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState("00:00")

    function AdicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ])

        setTarefa("")
        setTempo("00:00")
    }

    return(
        <form onSubmit={AdicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="treino">
                    O que iremos treinar hoje?
                </label>
                <input type="text"
                name="treino"
                className={styles.treino}
                onChange={evento => setTarefa(evento.target.value)} //colocar o value do input no setTarefa
                value={tarefa}
                id="treino"
                // placeholder="Adicione seu treino"
                required
                />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="tempo">
                Adicione o tempo de treino:
                </label>
                <input type="time"
                name='tempo'
                step='1'
                className={styles.tempo}
                onChange={evento => setTempo(evento.target.value)}
                value={tempo}
                id='tempo'
                // placeholder='Adicione o tempo'
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>

            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}