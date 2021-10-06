import React from 'react';
import { Card } from 'antd';
import router, { useRouter } from 'next/router';
import styles from '../../styles/card.module.css';
import Link from 'next/link';


function CardDiv({ id, name }) {
  const rotuer = useRouter();

  const redirectCardOne = () => {
    router.push(`/info/${id}`);
  }

  return (
    <Card
      title={
        <>
          <h3 className={styles.card_title}> JHon Jairo Hernandez </h3>
          <h5 className={styles.code}> 1006739604 </h5>
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
        <li> Terrenos: SI </li>
        <li> Propiedades: 2 </li>
      </ul>
    </Card>
  )
}

export default CardDiv;


/**
 * Index:
 *  - pida los datos.
 *  - pogalos en el store (con la depedencia del useEffect).
 *  - muestrelos.
 *  - haga un pollInterval:
 *      TESTS:
 *       1. poner desde HASURA un elemento, y ver si se actualiza la pantalla.
 *       2. hacer lo mismo, pero desde dos navegadores (usando la app)
 *
 * Admin:
 *  - pida los datos
 *  - pogalos en el store (con la depedencia del useEffect).
 *  - muestrelos
 *  - Cada vez que alguien edite, elimine, o agrege un elemento, vuelva a hacer el refetch
 *
 *
 *
 *  Busqueda:
 *    - que me mueste (filtrando desde el store de redux, sin peticion)
 *      los datos que tengan dentro ese valor:
 *         usar indexof o regex
 *
 *  SI VA DIRECTAMENTE A: info/1 --> como no hay datos, habrá error. REDIRIGIRLO A HOME
 * 
 * SUPER NOTA, MIRA: POSIBLE SOLUCION A USELAYOUREFFECT:
 * https://es.reactjs.org/docs/hooks-reference.html#usecontext
*/