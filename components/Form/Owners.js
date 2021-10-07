import NaturalPerson from './NaturalPerson';
import JuridicPerson from './JuridicPerson';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { DeleteOutlined } from '@ant-design/icons';
import styles from '../../styles/stylesForm.module.css';

function Owners({ owners, handleInputChange, deleteOwner }) {
  return (
    <>
      {
        Object.keys(owners).map(idOwner => {
          const owner = owners[idOwner];

          return <div key={idOwner} className={styles.groupFields}>
            <Row className={styles.owner_row_options}>
              <Col>
                <Form.Select
                  name='type'
                  value={owner.type}
                  onChange={(e) => handleInputChange(e, 'owners', idOwner)}
                  placeholder='Elije un tipo'
                  className={styles.select}
                  required
                >
                  <option value='' disabled> Tipo de persona </option>
                  <option value='natural'> Persona Natural </option>
                  <option value='juridic'> Persona Jurídica </option>
                </Form.Select>
              </Col>

              <Col>
                <Button
                  onClick={() => deleteOwner(idOwner)}
                  variant='danger'
                  className={styles.trashContainer}
                >
                  <DeleteOutlined className={styles.trashIcon} />
                </Button>
              </Col>
            </Row>

            {owner.type !== '' &&
              (owner.type === 'natural'
                ? <NaturalPerson handleInputChange={handleInputChange}
                  natural={{ idOwner, ...owner.natural }} />
                : <JuridicPerson handleInputChange={handleInputChange}
                  juridic={{ idOwner, ...owner.juridic }} />
              )
            }
          </div>
        })
      }
    </>
  )
}

export default Owners;
