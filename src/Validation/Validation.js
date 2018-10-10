import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength < 5){
    validationMessage = 'Text too short! Make sure that input is longer than 5 characters.';
  }

  return(
    <div>

      <p>{validationMessage}</p>

    </div>
  );
}

export default validation;
