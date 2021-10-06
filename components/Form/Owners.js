// Propietarios: (poder agregar más, iniciar en 0)
// *   TIPO : natural o juridica (depende del valor se deplegan las opciones)
// *       natural:
// *          Tipo de docuemnto
// *          numero de documento
// *          Nombres
// *          apellidos
// *          direccion
// *          telefono
// *          correo
// * 
// *        juruduca
// *           razon social 
// *           NIT
// *   datos en comun
// * 

import {
  Form,
  Input,
} from 'antd';
import styles from '../../styles/stylesForm.module.css';


function Owners({
  type,
  natural,
  juridic,
  handleInputChange
}) {
  return (
    <>
      <Form.Item
        name='value'
        onChange={handleInputChange}
        rules={[{ required: true }]}
      >
        {(type === 'natural'
          ? <NaturalPerson handleInputChange={handleInputChange} natural={natural} type={type}/>
          : <JuridicPerson handleInputChange={handleInputChange} juridic={juridic} type={type}/>
      )}

      </Form.Item>

    </>
  )
}

export default Owners;

/**
 * <Form.Item
        name='value'
        onChange={handleInputChange}
        rules={[{ required: true }]}
      // className={styles.form_item}
      >
        <Input
          value={value}
          placeholder='Nombre del predial'
        />
      </Form.Item> { value }
 */