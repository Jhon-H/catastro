// *  Natural:
// *    Tipo de docuemnto
// *    numero de documento
// *    Nombres
// *    apellidos
// *    direccion
// *    telefono 
// *    correo (opcional)

import styles from '../../styles/stylesForm.module.css';

function NaturalPerson({
  natural: {
    idOwner,
    type_document,
    number_document,
    first_name,
    last_name,
    direccion,
    telefono,
    correo
  },
  handleInputChange
}) {

  const send = e => { handleInputChange(e, 'ownersPerson', idOwner , 'natural') }
  
  return (
    <>
      <select
        name='type_document'
        className={styles.form_item}
        value={type_document}
        onChange={send}
        placeholder='Tipo de documento'
        required
      >
        <option value='TI'> Tarjeta de identidad </option>
        <option value='PASSPORT'> Pasaport </option>
        <option value='CC'> Cédula </option>
      </select>

      <input
        type='number'
        className={styles.form_item}
        name='number_document'
        value={number_document}
        onChange={send}
        placeholder='Número de docuemnto'
        required
      />

      <input
        className={styles.form_item}
        name='first_name'
        value={first_name}
        onChange={send}
        placeholder='Nombres'
        required
      />

      <input
        className={styles.form_item}
        name='last_name'
        value={last_name}
        onChange={send}
        placeholder='Apellidos'
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

export default NaturalPerson;
