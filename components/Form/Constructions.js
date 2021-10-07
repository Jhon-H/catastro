// *  Construcciones (inicia en 0, podeer agregar)
// *     # pisos
// *     area
// *     TIPO : industrial, comeciarl o urbano
// *     direccion


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { DeleteOutlined } from '@ant-design/icons';
import styles from '../../styles/stylesForm.module.css';


function Constructions({ constructions, handleInputChange, deleteConstruction }) {

  const send = (e, idConstruccion) => {
    handleInputChange(e, 'constructions', idConstruccion);
  }

  return (
    <div className=''>
      {
        Object.keys(constructions).map(idConstruccion => {
          const {
            number_pisos,
            area,
            type_construction,
            direccion
          } = constructions[idConstruccion];

          return <div key={idConstruccion} className={styles.groupFields}>
            <Row className={styles.construccione_row_options}>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Construcción"
                  readOnly
                  className={styles.select}
                />
              </Col>

              <Col>
                <Button
                  onClick={() => deleteConstruction(idConstruccion)}
                  variant='danger'
                  className={styles.trashContainer}
                >
                  <DeleteOutlined className={styles.trashIcon} />
                </Button>
              </Col>
            </Row>

            <Form.Control
              size='lg'
              type='number'
              className={styles.form_item}
              name='number_pisos'
              value={number_pisos}
              onChange={(e) => send(e, idConstruccion)}
              placeholder='Número de pisos'
              required
            />

            <Form.Control
              size='lg'
              type='number'
              className={styles.form_item}
              name='area'
              value={area}
              onChange={(e) => send(e, idConstruccion)}
              placeholder='Area (metros)'
              required
            />

            <Form.Select
              name='type_construction'
              className={styles.form_item}
              onChange={(e) => send(e, idConstruccion)}
              value={type_construction}
              required
            >
              <option value='' selected disabled> Tipo de construcción </option>
              <option value='insdustrial'> Industrial </option>
              <option value='comercial'> Comercial </option>
              <option value='urbano'> Urbano </option>
            </Form.Select>

            <Form.Control
              size='lg'
              type='text'
              className={styles.form_item}
              name='direccion'
              value={direccion}
              onChange={(e) => send(e, idConstruccion)}
              placeholder='Dirección'
              required
            />
          </div>
        })
      }
    </div>
  )
}

export default Constructions;
