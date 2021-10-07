import { useQuery, gql } from '@apollo/client';
import { Space, Empty, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { saveNewData } from '../actions/actions';
import { useEffect } from 'react';
import CardDiv from '../components/Card/Card';
import LayoutDiv from '../components/Layout/Layout';
import Loading from '../components/Loader/Loading';
import Error from '../components/Loader/Error';
import styles from '../styles/index.module.css';
import Form from '../components/Form/Form';

const QUERY = gql`
  query getData {
    municipio {
      id
      name
    }
  }
`;

function Administracion() {
  const { loading, error, data } = useQuery(QUERY);
  const dispatch = useDispatch();


  useEffect(() => {
    if (data) {
      dispatch(saveNewData(data.municipio));
    }
  }, [data]);

  return (
    <LayoutDiv title='Administacion'>
      {loading && <Loading />}
      {error && <Error />}

      <Space
        direction='horizontal'
        size={50}
        wrap
      >
        {(!loading && <Form />)}
      </Space>

      <Space
        direction='horizontal'
        size={50}
        wrap
      >
        {!loading && (
          data
            ? data && data.municipio.map(({ name, id }) => (
              <CardDiv name={name} id={id} key={id} />
            ))
            : <div className={styles.empty}>
              <Empty description={<span> Aún no hay información </span>} />
            </div>
        )}
      </Space>

    </LayoutDiv>
  )
}

export default Administracion;
