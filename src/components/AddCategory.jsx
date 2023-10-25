import { useState } from 'react';

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => setinputValue(target.value);

    const onSubmit = (event) => {

        event.preventDefault();

        const cleanInput =  inputValue.trim();

        if (cleanInput.length < 1) return;

        onNewValue(cleanInput);

        setinputValue('');
    };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange } />
    </form>
  )
}

export default AddCategory;
