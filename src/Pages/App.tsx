import { useState } from 'react';
import Form from '../components/Form';
import Marca from '../components/Marca';
import Tarefas from '../components/Tarefas';
import styles from './App.module.css';
import { Itarefa } from '../Types/types';
import Cronometro from '../components/Cronometro';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  } // Primeiro "setamos" a tarefa selecionada do evento da função e depois executamos a ação de selecionar

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined) //gerando a tarefa
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={styles.App}> 
        <Marca/>
        <div className={styles.form_task_time}>
      <div className={styles.form_task}>
        <div className={styles.form}>
        <Form
        setTarefas={setTarefas}
        />
        </div>
        <div className={styles.task}>
        <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
        />
        </div>
      </div>
      <Tarefas
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
        />
        </div>
    </div>
  );
}

export default App;
