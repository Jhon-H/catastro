import { useQuery, gql } from '@apollo/client';
import { Space, Empty } from 'antd';
import { useDispatch } from 'react-redux';
import { saveNewData } from '../actions/actions';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';
import LayoutDiv from '../components/Layout/Layout';
import Loading from '../components/Loader/Loading';
import Error from '../components/Loader/Error';
import CardDiv from '../components/Card/Card';


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

function Home() {
  const { loading, error, data } = useQuery(QUERY, { pollInterval: 500 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data){
      dispatch(saveNewData(data.municipio));
    }
  }, [data]);

  return (
    <LayoutDiv title='Inicio'>
      {loading && <Loading />}
      {error && <Error />}
      <Space
        direction='horizontal'
        size={50}
        wrap
      >
        {(!loading &&
          (data
            ? data.municipio.map(data => (
              <CardDiv data={data} key={data.basics.predialID} />
            ))
            : (<div className={styles.empty}>
              <Empty description={<span> Aún no hay información </span>} />
            </div>
            )
          )
        )}
      </Space>
    </LayoutDiv>
  )
}

export default Home;
