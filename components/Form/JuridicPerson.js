//* juridic
// *     razon social 
// *     NIT
// *     direcccion
// *    telefono
// *   correo (opcional)

import {
  Form,
  Input,
} from 'antd';
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
      <input
        name='razon_social'
        value={razon_social}
        className={styles.form_item}
        placeholder='Razon social'
        onChange={send}
        required
      />

      <input
        className={styles.form_item}
        name='NIT'
        type='number'
        value={NIT}
        placeholder='NIT'
        onChange={send}
        required
      />

      <input
        className={styles.form_item}
        name='direccion'
        value={direccion}
        onChange={send}
        placeholder='Dirección'
        required
      />

      <input
        className={styles.form_item}
        name='telefono'
        value={telefono}
        onChange={send}
        placeholder='Teléfono'
        required
      />

      <input
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
