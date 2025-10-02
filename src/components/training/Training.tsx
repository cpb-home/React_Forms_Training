import { useState } from 'react';
import Form from '../form/Form'
import ItemsList from '../itemsList/ItemsList'
import styles from './Training.module.css'
import { IMesure } from '../../types/interfaces';

const Training = () => {
  const [mesures, setMesures] = useState<IMesure[]>([]);

  function deleteMesureHandler(id: number) {
    setMesures(prevMesures => prevMesures.filter((e, i) => i !== id))
  }

  function addMesureHandler(data: IMesure) {
    setMesures(prevMesures => [...prevMesures, data])
  }

  return (
    <div className={styles.cont}>
      <Form addMesureHandler={addMesureHandler} />
      <ItemsList mesures={mesures} deleteMesureHandler={deleteMesureHandler} />
    </div>
  )
}

export default Training
