import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { TextField } from '@mui/material';

export interface TextFieldLimitCharacters {}

const CHARACTER_LIMIT = 50;

export const TextFieldLimitCharacters: React.FC<TextFieldLimitCharacters> = () => {
  const [values, setValues] = useState({
    name: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
    const value = e.target.value
    setValues(prevState => ({...values, [inputName]: value})) 
  };
  return (
    <>
      <TextField
        label="About"
        inputProps={{
          maxLength: CHARACTER_LIMIT
        }}
        value={values.name}
        helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
        onChange={(event)=> handleChange(event, 'name')}
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </>
  );
}

export default TextFieldLimitCharacters;
