import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


export default function InputWithIcon(props){
  //const [value, setValue] = React.useState(props.value);
  let { onBlur, enter, esc, autoFocus, endAdornment, hidden, placeholder, type, textfield, icon, value, width, disable, minWidth, readOnly, name, onChange, style, classes, aditivos} = props;

  /*const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  const keyHandler = (e) => {
    if(enter !== undefined){
      if(e.key === "Enter"){
        enter();
      }
    }
    if(esc !== undefined){
      if(e.key === "Escape"){
        esc();
      }
    }
  }
  return (
      <TextField
        label={textfield}
        disabled={disable}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        onKeyUp = {keyHandler}
        onBlur= {onBlur}
        readOnly={readOnly}
        style={{...style, width: width}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {endAdornment}
            </InputAdornment>
          ),
          aditivos,
        }}
        className={classes}
        id="input-with-icon-textfield"
        name={name}
        type={type}
      />
  );
}