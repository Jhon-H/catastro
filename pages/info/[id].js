import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Card } from 'antd';
import styles from '../../styles/cardOne.module.css';
import LayoutDiv from '../../components/Layout/Layout';
import { useState } from 'react';


function CardOne() {
  const router = useRouter();
  const { dataReducer } = useSelector(state => state);  
  const [miData, setMiData] = useState(
    (dataReducer.find(e => e.id === parseInt(router.query.id)))
  );
  
  return (
    <LayoutDiv title='Información'>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <h1 className={styles.name}> {miData.basics.name} </h1>
          <h4 className={styles.predialID}> {miData.basics.predialID} </h4>
          { JSON.stringify(miData) }
        </Card>
      </div>
    </LayoutDiv>
  )
}

export default CardOne;
