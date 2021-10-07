import React from 'react';
import { Card } from 'antd';
import router, { useRouter } from 'next/router';
import styles from '../../styles/card.module.css';
import Link from 'next/link';


function CardDiv({ data }) {
  const id = data.id;

  const redirectCardOne = () => {
    router.push(`/info/${id}`);
  }

  return (
    <Card
      title={
        <>
          <h3 className={styles.card_title}> {data.basics.name}</h3>
          <h5 className={styles.code}> {data.basics.predialID} </h5>
        </>
      }
      extra={
        <Link href={`/info/${id}`}>
          <a className={styles.show_more} onClick={redirectCardOne}>Mostrar</a>
        </Link>
      }
      className={styles.card}
      bordered='false'
      size={450}
    >
      <ul className={styles.ul}>
        <li> Terrenos: {(data.have_terreno ? 'SI' : 'NO')} </li>
        <li> Contrucciones: {Object.keys(data.constructions).length} </li>
      </ul>
    </Card>
  )
}

export default CardDiv;
