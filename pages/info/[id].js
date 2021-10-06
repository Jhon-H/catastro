import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import styles from '../../styles/cardOne.module.css';
import LayoutDiv from '../../components/Layout/Layout';

function CardOne() {
  const router = useRouter();
  const { dataReducer } = useSelector(state => state);
  const currData = dataReducer[router.query.id - 1];

  return (
    <LayoutDiv>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <h1 className={styles.name}> {currData.name} </h1>
        </Card>
      </div>
    </LayoutDiv>
  )
}

export default CardOne;
