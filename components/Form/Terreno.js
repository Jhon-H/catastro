// *  Terreno:
// *     area
// *     valor comercial
// *     TIPO: rural o urbano
// *     fuentes de agua cerca ? (si o no)
// *     tiene construcciones en el ? (si o no)

import styles from '../../styles/stylesForm.module.css';


function Terreno({
  terreno: {
    area,
    valor_comercial,
    type_terreno,
    fuente_cerca,
    have_contrucciones
  },
  handleInputChange
}) {

  const send = e => { handleInputChange(e, 'terreno') }

  return (
    <>
      <input
        name='area'
        className={styles.form_item}
        value={area}
        onChange={send}
        placeholder='Area (m)'
        required
      />

      <input
        className={styles.form_item}
        name='valor_comercial'
        type='number'
        onChange={send}
        value={valor_comercial}
        placeholder='valor_comercial'
        required
      />

      <select
        name='type_terreno'
        value={type_terreno}
        onChange={handleInputChange}
        placeholder='Elije un tipo'
        className={styles.form_item}
        required
      >
        <option value='rural'> Rural </option>
        <option value='urbano'> Urbano </option>
      </select>


      <select
        name='fuente_cerca'
        className={styles.form_item}
        required
        onChange={send}
        value={fuente_cerca}
        placeholder='Fuentes cerca'
      >
        <option value='si'> Si </option>
        <option value='no'> No </option>
      </select>

      <select
        className={styles.form_item}
        name='have_contrucciones'
        value={have_contrucciones}
        onChange={send}
        placeholder='Tiene construcciones'
        required
      >
        <option value='si'> Si </option>
        <option value='no'> No </option>
      </select>
    </>
  )
}

export default Terreno;
