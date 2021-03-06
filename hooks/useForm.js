import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState);
  }

  const handleInputChange = (e, parent = undefined, others, A) => {
    const update = JSON.parse(JSON.stringify(form));

    if (parent === 'ownersPerson') {
      update.owners[others][A][e.target.name] = e.target.value;
    } else if (parent === 'owners' || parent === 'constructions') {
      if (parent === 'constructions') update.constructions[others][e.target.name] = e.target.value;
      else update.owners[others][e.target.name] = e.target.value;
    } else if (parent) {
      update[parent][e.target.name] = e.target.value;
    } else {
      update[e.target.name] = e.target.value;
    }

    setForm(update);
  }

  const changeAll = data => {
    setForm(data);
  }

  const addConstrution = () => {
    const update = JSON.parse(JSON.stringify(form));

    update.constructions[uuidv4()] = {
      number_pisos: '',
      area: '',
      type_construction: '',
      direccion: ''
    };

    setForm(update);
  }

  const deleteConstruction = id => {
    const update = JSON.parse(JSON.stringify(form));
    delete update.constructions[id];
    setForm(update);
  }

  const addOwner = () => {
    const update = JSON.parse(JSON.stringify(form));

    update.owners[uuidv4()] = {
      type: '',
      natural: {
        type_document: '',
        number_document: '',
        first_name: '',
        last_name: '',
        direccion: '',
        telefono: '',
        correo: ''
      },
      juridic: {
        razon_social: '',
        NIT: '',
        direccion: '',
        telefono: '',
        correo: ''
      }
    };

    setForm(update);
  }

  const deleteOwner = id => {
    const update = JSON.parse(JSON.stringify(form));
    delete update.owners[id];
    setForm(update);
  }

  return {
    form,
    handleInputChange,
    reset,
    addOwner,
    deleteOwner,
    addConstrution,
    deleteConstruction,
    changeAll
  }
}