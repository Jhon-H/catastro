//* juridic
// *     razon social 
// *     NIT
// *     direcccion
// *    telefono
// *   correo (opcional)

import Form from 'react-bootstrap/Form';
import styles from '../../styles/stylesForm.module.css';

function JuridicPerson({
  juridic: {
    idOwner,
    razon_social,
    NIT,
    direccion,
    telefono,
    correo
  },
  handleInputChange
}) {


  const send = e => { handleInputChange(e, 'ownersPerson', idOwner , 'juridic') }

  return (
    <>
      <Form.Control
        name='razon_social'
        value={razon_social}
        className={styles.form_item}
        placeholder='Razon social'
        onChange={send}
        required
      />

      <Form.Control
        className={styles.form_item}
        name='NIT'
        type='number'
        value={NIT}
        placeholder='NIT'
        onChange={send}
        required
      />

      <Form.Control
        className={styles.form_item}
        name='direccion'
        value={direccion}
        onChange={send}
        placeholder='Dirección'
        required
      />

      <Form.Control
        className={styles.form_item}
        name='telefono'
        value={telefono}
        onChange={send}
        placeholder='Teléfono'
        required
      />

      <Form.Control
        type='email'
        className={styles.form_item}
        name='correo'
        value={correo}
        onChange={send}
        placeholder='Correo electrónio'
      />
    </>
  )
}

export default JuridicPerson;
