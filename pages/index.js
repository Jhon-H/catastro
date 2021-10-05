import { useQuery, gql } from '@apollo/client';
import _Layout from '../components/Layout/Layout';
import Loading from '../components/Loader/Loading';
import Error from '../components/Loader/Error';

const QUERY = gql`
  query getData {
    municipio {
      id
      name
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(QUERY);
  console.log(data);

  return (
    <_Layout title='Home'>

      {loading && <Loading />}
      {error && <Error />}

      <Space size='middle' wrap>
        <Card />
      </Space>

    </_Layout>
  )
}

export default Home;
