import { useEffect, useState } from "react"
import Relogio from "./Relogio"
import Button from "../Button"
import { Itarefa } from "../../Types/types"
import tempoParaSegundo from "../../utils"
import styles from './cronometro.module.css'

interface Props{
    selecionado: Itarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
const [tempo, setTempo] = useState<number>()

useEffect(() => {
    if(selecionado?.tempo){
        setTempo(tempoParaSegundo(selecionado.tempo))
    }
}, [selecionado])

function Regressiva(contador: number = 0){
    setTimeout(() => {
        if(contador > 0){
            setTempo(contador - 1)
            return Regressiva(contador - 1)
        }
        finalizarTarefa()
    }, 1000)
}

    return(
        <>
        
        <p className={styles.p}>Selecione seu treino e ative o cronômetro</p>
        <div className={styles.tudo}>
            <div className={styles.tempo}>
                <Relogio
                    tempo={tempo}
                />
            </div>
            <div className={styles.button}>
            <p className={styles.battery}>Battery: 90%</p>
            <p className={styles.data}>{new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
            <Button onClick={() => Regressiva(tempo)}>
                Começar
            </Button>
            </div>
        </div>
        </>   
    )
}