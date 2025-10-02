import styles from './ItemsList.module.css'
import Item from '../item/Item';
import { IMesure } from '../../types/interfaces';

interface IProps {
  mesures: IMesure[];
  deleteMesureHandler: (id: number) => void;
}

const ItemsList = ({ mesures, deleteMesureHandler }: IProps) => {

  return (
    <div className={styles.cont}>
      <header className={styles.header}>
        <div className={styles.headerItem}>Дата (ДД.ММ.ГГГГ)</div>
        <div className={styles.headerItem}>Пройдено км</div>
        <div className={styles.headerItem}>Действия</div>
      </header>
      {mesures.length > 0 ? 
        mesures.map((e, i) => <Item key={i} data={e} deleteMesureHandler={deleteMesureHandler} idx={i} />)
        : <div>Пока нет данных</div>
      }
    </div>
  )
}

export default ItemsList
