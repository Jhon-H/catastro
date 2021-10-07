// *  Terreno:
// *     area
// *     valor comercial
// *     TIPO: rural o urbano
// *     fuentes de agua cerca ? (si o no)
// *     tiene construcciones en el ? (si o no)

import styles from '../../styles/stylesForm.module.css';
import Form from 'react-bootstrap/Form';

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

  return <div className={styles.groupFields}>
    <Form.Control
      name='area'
      className={styles.form_item}
      value={area}
      onChange={send}
      placeholder='Area (m)'
      required
    />

    <Form.Control
      className={styles.form_item}
      name='valor_comercial'
      type='number'
      onChange={send}
      value={valor_comercial}
      placeholder='Valor Comercial'
      required
    />

    <Form.Select
      name='type_terreno'
      value={type_terreno}
      onChange={send}
      placeholder='Que tipo de terreno es'
      className={styles.form_item}
      required
    >
      <option value='' selected disabled> ¿Qué tipo de terreno es? </option>
      <option value='rural'> Rural </option>
      <option value='urbano'> Urbano </option>
    </Form.Select>

    <Form.Select
      name='fuente_cerca'
      className={styles.form_item}
      required
      onChange={send}
      value={fuente_cerca}
    >
      <option value='' selected disabled> ¿Tiene fuentes de agua cerca? </option>
      <option value='si'> Si </option>
      <option value='no'> No </option>
    </Form.Select>

    <Form.Select
      className={styles.form_item}
      name='have_contrucciones'
      value={have_contrucciones}
      onChange={send}
      required
    >
      <option value='' selected disabled> ¿Tiene construcciones? </option>
      <option value='si'> Si </option>
      <option value='no'> No </option>
    </Form.Select>
  </div>

}

export default Terreno;
