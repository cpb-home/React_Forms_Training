import { IMesure } from "../../types/interfaces"
import ChangeBtn from "../ui/btns/ChangeBtn";
import DeleteBtn from "../ui/btns/DeleteBtn";
import styles from './Item.module.css'

interface IProps {
  idx: number
  data: IMesure;
  deleteMesureHandler: (id: number) => void;
}

const Item = ({ idx, data, deleteMesureHandler }: IProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.item}>
        {data.date}
      </div>
      <div className={styles.item}>
        {data.distance}
      </div>
      <div className={styles.item}>
        <ChangeBtn />
        <DeleteBtn deleteMesureHandler={deleteMesureHandler} idx={idx} />
      </div>
    </div>
  )
}

export default Item
