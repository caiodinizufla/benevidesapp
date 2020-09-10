import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs() {
  const [value, setValue] = React.useState("");
  let { 
    onBlur, 
    onFocus,
    enter, 
    esc, 
    autoFocus, 
    endAdornment, 
    hidden, 
    placeholder, 
    type, 
    textfield, 
    icon, 
    disabled, 
    readOnly, 
    name, 
    style, 
    width,
  } = props;

  React.useEffect(() => { 
    setValue(props.value);
  },[props.value]);

  const handleChange = (event) => {
    setValues(event.target.value);
  };
  
  const keyHandler = (e) => {
    if(enter !== undefined){
      if(e.key === "Enter"){
        enter(value);
      }
    }
    if(esc !== undefined){
      if(e.key === "Escape"){
        esc(value);
      }
    }
  }

  return (
      <TextField
        label={textfield}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
        onKeyUp = {keyHandler}
        onBlur= {() => onBlur(value)}
        onFocus={()=> onFocus}
        readOnly={readOnly}
        style={{...style, width}}
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
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
  );
}
