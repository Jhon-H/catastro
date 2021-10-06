import { Input, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useForm } from '../../hooks/useForm';
import styles from '../../styles/logo.module.css';

function Search() {
  const { form, handleInputChange, reset } = useForm({
    name: '',
    document: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert("enviando");
  }

  return (
    <div className={styles.search}>
      <Input
        name='name'
        value={form.name}
        onChange={handleInputChange}
        placeholder='Buscar por nombre'
        suffix={<SearchOutlined />}
        disabled={form.document !== ''}
      />

      <Input
        type='number'
        min='0'
        name='document'
        value={form.document}
        onChange={handleInputChange}
        placeholder='Buscar por documento'
        suffix={<SearchOutlined />}
        disabled={form.name !== ''}
      />
    </div>
  )
}

export default Search;