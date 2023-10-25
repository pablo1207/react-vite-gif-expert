import { useState } from "react";
import { AddCategory, GiftGrid } from './components';

const GiftExpertApp = () => {

  const [categories, SetCategories ] = useState([]);

  const handleAddCategory = (inputValue) => {
    
    // includes sirve para ver si el valor se encuentra dentro del arreglo
    if ( categories.includes(inputValue) )  return; 

    SetCategories( [...categories, inputValue])
  };

   return (
    <>
        <h1> GiftExperApp </h1>
    
        <AddCategory 
          onNewValue={ (value) => handleAddCategory(value) }
        />        

        {
          categories.map( ( category ) => 
          <GiftGrid  key={ category } Category= {category}/>)
        }
    </>
  )
}

export default GiftExpertApp;
