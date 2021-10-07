import { useMutation, gql } from '@apollo/client';
import React from 'react';
import { Card, notification } from 'antd';
import styles from '../../styles/card.module.css';
import Link from 'next/link';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';



const QUERY = gql`
  mutation MyMutation($id: Int!) {
    delete_municipio_by_pk(id: $id){
      id
    }
}`;


function CardDiv({
  data_,
  isEdit,
  setIsEdit,
  setEditData
}) {
  const id = data_.id;
  const [mutationDeleteFunc, { }] = useMutation(QUERY);

  const handleDelete = () => {
    mutationDeleteFunc({
      variables: { id: parseInt(data_.id) }
    });

    notification.success({
      message: 'Eliminado correctamente',
      description: 'Eliminado correctamente.',
    });
  }

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
      setEditData(data_);
    }
  }

  return (
    <>
      <Card
        title={
          <>
            <h3 className={styles.card_title}> {data_.basics.name}</h3>
            <h5 className={styles.code}> {data_.basics.predialID} </h5>
          </>
        }
        actions={[
          <EditOutlined key="setting" onClick={handleEdit} />,
          <DeleteOutlined key="delete" onClick={handleDelete} />,
        ]}
        className={styles.card}
        bordered='false'
        size={450}
      >
        <ul className={styles.ul}>
          <li> Terrenos: {(data_.have_terreno ? 'SI' : 'NO')} </li>
          <li> Contrucciones: {Object.keys(data_.constructions).length} </li>
        </ul>

      </Card>
    </>
  )
}

export default CardDiv;
