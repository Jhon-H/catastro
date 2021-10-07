import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Card } from 'antd';
import styles from '../../styles/cardOne.module.css';
import LayoutDiv from '../../components/Layout/Layout';


function CardOne() {
  const router = useRouter();
  const { dataReducer } = useSelector(state => state);
  console.log(dataReducer);
  const currData = dataReducer[router.query.id - 1];
  // const miData = miData.filter(e => e.id === router.query.id)[0];


  return (
    <LayoutDiv>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <h1 className={styles.name}> {} </h1>
          {/* { JSON.stringify(miData) } */}
        </Card>
      </div>
    </LayoutDiv>
  )
}

export default CardOne;
