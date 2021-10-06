import { useForm } from '../../hooks/useForm';
import React, { useState } from 'react';
import styles from '../../styles/stylesForm.module.css';
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';

import BasicInfo from './BasicInfo';
import Terreno from './Terreno';
import NaturalPerson from './NaturalPerson';
import JuridicPerson from './JuridicPerson';
import Contructions from './Constructions';


function FormDiv() {
  const { form, handleInputChange, reset, addOwner, deleteOwner} = useForm({
    basics: {
      predialID: '',
      name: '',
      department: '',
      municipality: '',
      value: ''
    },

    have_owners: 'no_have',
    owners: {},

    have_terreno: '',
    terreno: {
      area: '',
      valor_comercial: '',
      type_terreno: '',
      fuente_cerca: '',
      have_contrucciones: ''
    }
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert('what app');
    // alert(JSON.stringify(form));
    reset();
  }

  const handleSubmitFailed = () => {
    alert('error');
  }

  const metaTags = name => {
    return [
      { name: name },
      { onChange: handleInputChange, },
      { rules: [{ required: true }] },
      { className: styles.form_item },
    ];
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >

      {/* Basic Info */}
      <h2> Informacion basica </h2>
      <BasicInfo handleInputChange={handleInputChange} basics={form.basics} />

      {/*  Owners */}
      <h2> Propietarios </h2>
      <button onClick={addOwner}> Agregar Propietario </button>
      {
        Object.keys(form.owners).map(idOwner => {
          const owner = form.owners[idOwner];

          return <div key={idOwner}>
            <br /><br />
            <select
              name='type'
              value={owner.type}
              onChange={(e) => handleInputChange(e, 'owners', idOwner)}
              placeholder='Elije un tipo'
              required
            >
              <option value='' disabled> Elija </option>
              <option value='natural'> Natural </option>
              <option value='juridic'> Jurídica </option>
            </select>
            <button onClick={() => deleteOwner(idOwner)}> Eliminar </button>
            <br />
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

      {/* Terreno */}
      <h2> Terreno </h2>
      <select
        name='have_terreno'
        value={form.have_terreno}
        onChange={handleInputChange}
        placeholder='Tiene terrneno'
        className={styles.form_item}
        required
      >
        <option value='have'> SI </option>
        <option value='no_have'> NO </option>
      </select>

      {form.have_terreno === 'have' && (
        <Terreno handleInputChange={handleInputChange} terreno={form.terreno} />
      )}

      {/*  Construcciones */}
    </form>
  )
}

export default FormDiv;