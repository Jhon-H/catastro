import { useQuery, gql } from '@apollo/client';
import { Space, Empty, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { saveNewData } from '../actions/actions';
import { useEffect, useState } from 'react';
import CardDiv from '../components/Card/EditCard';
import LayoutDiv from '../components/Layout/Layout';
import Loading from '../components/Loader/Loading';
import Error from '../components/Loader/Error';
import styles from '../styles/index.module.css';
import Form from '../components/Form/Form';


const QUERY = gql`
  query getData {
    municipio {
      basics
      constructions
      have_terreno
      id    
      owners
      terreno
    }
  }
`;

function Administracion() {
  const { loading, error, data } = useQuery(QUERY, { pollInterval: 500 });
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    if (data) {
      dispatch(saveNewData(data.municipio));
    }
  }, [data]);

  return (
    <LayoutDiv title='Administacion'>
      <Row justify="center">
        {loading && <Loading />}
        {error && <Error />}

        <Space
          direction='horizontal'
          size={50}
          wrap
        >
          {(!loading && <Form isEdit={isEdit} editData={editData} setIsEdit={setIsEdit}/>)}
        </Space>
      </Row>

      <Row justify="center">
        <Space
          direction='horizontal'
          size={50}
          wrap
        >
          {!loading && (data !== undefined
            ? data.municipio.map(data => (
              <CardDiv
                data_={data}
                key={data.basics.predialID}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                setEditData={setEditData}
              />
            ))
            : <div className={styles.empty}>
              <Empty description={<span> Sin información </span>} />
            </div>
          )}
        </Space>
      </Row>
    </LayoutDiv>
  )
}

export default Administracion;
