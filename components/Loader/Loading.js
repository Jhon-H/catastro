import _Layout from '../Layout/Layout';
import styles from '../../styles/loading.modules.css';
import Image from 'next/image';
import 'spiner_loading.gif';

function Loading() {
  return (
    <_Layout>
      <div className={styles.disabledDiv}>
        <Image
          src={spiner_loading}
          width={207}
          height={207}
          />
      </div>
    </_Layout>
  )
}

export default Loading;
