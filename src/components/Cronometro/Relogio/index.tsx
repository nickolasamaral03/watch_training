import styles from "./relogio.module.css"

interface Props{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props){

    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')

    return(
       <div className={styles.hour}>
       <span className={styles.span}>{minutoDezena}</span>
       <span className={styles.span}>{minutoUnidade}</span>
       <span className={styles.ponto}>:</span>
       <span className={styles.span}>{segundoDezena}</span>
       <span className={styles.span}>{segundoUnidade}</span>
       </div>
    )
}