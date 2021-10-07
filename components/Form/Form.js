import { useForm } from '../../hooks/useForm';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/stylesForm.module.css';
import BasicInfo from './BasicInfo';
import Terreno from './Terreno';
import Constructions from './Constructions';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Owners from './Owners';


function FormDiv() {
  const { form,
    handleInputChange,
    reset,
    addOwner,
    deleteOwner,
    deleteConstruction,
    addConstrution

  } = useForm({
    basics: {
      predialID: '',
      name: '',
      department: '',
      municipality: '',
      value: ''
    },

    owners: {},

    have_terreno: '',
    terreno: {
      area: '',
      valor_comercial: '',
      type_terreno: '',
      fuente_cerca: '',
      have_contrucciones: ''
    },

    constructions: {}
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert('what app');
    // alert(JSON.stringify(form));
    reset();
  }


  const [formstep, setFormstep] = useState(0);
  const avance = useRef(null);
  const retrocede = useRef(null);
  useEffect(() => { if (!formstep) retrocede.current.disabled = true; }, []);


  const avancePage = () => {
    if (formstep === 0) retrocede.current.disabled = false;
    if (formstep === 3) avance.current.disabled = true;
    setFormstep(formstep => formstep + 1);
  }

  const retrocedePage = () => {
    if (formstep === 4) avance.current.disabled = false;
    if (formstep === 1) retrocede.current.disabled = true;
    setFormstep(formstep => formstep - 1);
  }

  return (
    <div className={styles.cotainer}>
      <div className={styles.formDiv}>
        <Form className={styles.form} onSubmit={handleSubmit}>

          {/* Basic Info */}
          {formstep === 0 && <>
            <h2 className={styles.title}> Informacion Básica </h2>
            <BasicInfo handleInputChange={handleInputChange} basics={form.basics} /></>
          }

          {/*  Owners */}
          {formstep === 1 && <>
            <h2 className={styles.title}> Propietarios </h2>
            <Button onClick={addOwner} variant='secondary' className={styles.btnAdd}>
              Agregar Propietario
            </Button>
            <Owners
              handleInputChange={handleInputChange}
              owners={form.owners}
              deleteOwner={deleteOwner} /></>
          }

          {/* Terreno */}
          {formstep === 2 && <>
            <h2 className={styles.title}> Terreno </h2>
            <Form.Select
              name='have_terreno'
              value={form.have_terreno}
              onChange={handleInputChange}
              placeholder='Tiene terrneno'
              className={styles.form_item}
              required
            >
              <option value='' selected disabled> ¿Tiene terreno? </option>
              <option value='no_have'> NO </option>
              <option value='have'> SI </option>
            </Form.Select>

            {form.have_terreno === 'have' && (
              <Terreno handleInputChange={handleInputChange} terreno={form.terreno} />
            )}</>
          }

          {/*  Construcciones */}
          {formstep === 3 && <>
            <h2 className={styles.title}> Construciones </h2>
            <Button onClick={addConstrution} variant='secondary' className={styles.btnAdd}>
              Agregar construcción
            </Button>
            <Constructions
              handleInputChange={handleInputChange}
              constructions={form.constructions}
              deleteConstruction={deleteConstruction}
            />
          </>
          }

          {/*  SEND */}
          {formstep === 4 &&
            <>
              <p> SEND </p>
            </>
          }

        </Form>
      </div>

      <div className={styles.pagnDiv}>
        <Button variant='primary' onClick={retrocedePage} ref={retrocede} size='lg'>
          Retroceder
        </Button>
        <Button variant='primary' size='lg' onClick={avancePage} ref={avance}>
          Avanzar
        </Button>
      </div>
    </div>
  )
}

export default FormDiv;