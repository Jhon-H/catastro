import { useForm } from '../../hooks/useForm';
import { useMutation, gql } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/stylesForm.module.css';
import BasicInfo from './BasicInfo';
import Terreno from './Terreno';
import Constructions from './Constructions';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Owners from './Owners';

const QUERY = gql`
  mutation MyMutation(
  $basics: json,
  $constructions: json,
  $have_terreno: Boolean,
  $owners: json,
  $terreno: json){
  insert_municipio_one(object: {
    basics: $basics, 
    constructions: $constructions, 
    have_terreno: $have_terreno,  
    owners: $owners
    terreno: $terreno
  }){ id }
}`;


const QUERY2 = gql`
  mutation MyMutation(  $basics: json,
  $constructions: json,
  $have_terreno: Boolean,
  $owners: json,
  $terreno: json) {
  update_municipio_by_pk(pk_columns: {id: 10},
  _set: {
    basics: $basics, 
    constructions: $constructions, 
    have_terreno: $have_terreno,  
    owners: $owners
    terreno: $terreno}) { id }
}`;


function FormDiv({ isEdit, editData, setIsEdit }) {
  const { form,
    handleInputChange,
    reset,
    addOwner,
    deleteOwner,
    deleteConstruction,
    addConstrution,
    changeAll

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

  const handleCancel = e => {
    reset();
    setIsEdit(false);
  }

  useEffect(() => {
    if (isEdit) changeAll(editData);
  }, [isEdit]);

  const [mutateAddFunction, { }] = useMutation(QUERY);
  const [mutateEditFunction, { }] = useMutation(QUERY2);

  const isValid = () => {
    let flags = 0;
    flags += (form.have_terreno !== '');
    flags += (form.basics.predialID !== '');
    flags += (form.basics.name !== '');
    flags += (form.basics.departamet !== '');
    flags += (form.basics.municipality !== '');
    flags += (form.basics.value !== '');

    if (flags !== 6) {
      alert('Por favor revisa tus datos');
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (isValid()) { //revisar todo los datos
      if (isEdit) {
        mutateEditFunction({
          variables: {
            basics: form.basics,
            constructions: form.constructions,
            have_terreno: (form.have_terreno === 'no_have' ? false : true),
            owners: form.owners,
            terreno: form.terreno
          }
        })
        setIsEdit(false);
      }
      else mutateAddFunction({
        variables: {
          basics: form.basics,
          constructions: form.constructions,
          have_terreno: (form.have_terreno === 'no_have' ? false : true),
          owners: form.owners,
          terreno: form.terreno
        }
      });
      reset();

    }
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
            <div className={styles.containerBtn}>
              <Button onClick={handleSubmit} className={styles.sendData} variant='success'>
                ENVIAR DATOS
              </Button>
            </div>
          }

        </Form>
      </div>

      <div className={styles.pagnDiv}>
        <Button variant='primary' onClick={retrocedePage} ref={retrocede} size='lg'>
          Retroceder
        </Button>
        {isEdit &&
          <Button variant='warning' onClick={handleCancel} size='lg'>
            Cancelar
          </Button>
        }
        <Button variant='primary' size='lg' onClick={avancePage} ref={avance}>
          Avanzar
        </Button>
      </div>
    </div>
  )
}

export default FormDiv;