// * Parte 1: Informacion basica del predio:
// * #predial
// * nombre
// * departamento
// * municipio
// * Avaluo


import styles from '../../styles/stylesForm.module.css';
import Form from 'react-bootstrap/Form';

function BasicInfo({
  basics: {
    predialID,
    name,
    department,
    municipality,
    value,
  },
  handleInputChange
}) {

  const send = e => { handleInputChange(e, 'basics') }

  return (
    <Form.Group className="mb-3">
      <Form.Control
        size='lg'
        type='text'
        className={styles.form_item}
        value={predialID}
        name='predialID'
        onChange={send}
        placeholder='Identificador del predial'
        required
      />

      <Form.Control
        size='lg'
        type='text'
        className={styles.form_item}
        name='name'
        value={name}
        onChange={send}
        placeholder='Nombre del predial'
        required
      />

      <Form.Control
        size='lg'
        type='text'
        className={styles.form_item}
        name='department'
        value={department}
        onChange={send}
        placeholder='Departamento'
        required
      />

      <Form.Control
        size='lg'
        type='text'
        className={styles.form_item}
        name='municipality'
        value={municipality}
        onChange={send}
        placeholder='Municipio'
        required
      />

      <Form.Control
        size='lg'
        type='text'
        className={styles.form_item}
        name='value'
        value={value}
        onChange={send}
        placeholder='Avaluo'
        required
      />
    </Form.Group>
  )
}

export default BasicInfo;
