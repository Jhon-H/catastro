// import { useQuery, gql } from '@apollo/client';
import LayoutDiv from '../components/Layout/Layout';
import Loading from '../components/Loader/Loading';
import Error from '../components/Loader/Error';
import Succes from '../components/Loader/Sucess';

function Admin() {
  return (
    <>
    <LayoutDiv title='Administracion'>
      <h1> Hola Admin </h1>
    </LayoutDiv>
    </>
  )
}

export default Admin;

