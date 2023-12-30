export default function tempoParaSegundo(tempo:string){
    const [horas = "0", minutos = '0', segundos = "0"] = tempo.split(':')

    const horasEmSegundo = Number(horas) * 3600
    const minutosEmSegundos = Number(minutos) * 60
    return horasEmSegundo + minutosEmSegundos + Number(segundos)
}