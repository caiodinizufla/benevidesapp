import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { toReal, toFloat } from '../../helpers/toReal';

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
      onChange = {onChange}
      allowNegative={false}
      decimalScale="2"
      decimalSeparator=","
      isNumericString
      prefix="R$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs(props) {
  const classes = useStyles();
  const { 
    style,
    disabled,
    icon,
    name,
    value,
    textfield,
    width,
    onBlur, 
    enter, 
    esc,
    autoFocus, 
  } = props;
  
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

  const onChange = () => (event) => {
      let newValue = event.target.value.toString().substring(2); 
      if(
        (value.toString()).substring(0,1) === "0" && (
          newValue.substring(1,5) === "0,00" ||
          newValue.substring(1,4) === "0,0" ||
          newValue.substring(1,3) === "0," ||
          newValue.substring(1,2) === "0" 
        )
      ){
          newValue = newValue.substring(0, 1);
      }
      if(newValue === "," || isNaN(toFloat(newValue)) || newValue.toString() === "" || toFloat(newValue) <= 0){
        newValue = 0;
      }
      props.onChange(toFloat(newValue))
  };

  return (
      <TextField
        label={textfield}
        style={{...style, width}}
        value={value}
        disabled={disabled}
        onChange={onChange()}
        autoFocus={autoFocus}
        onKeyUp = {keyHandler}
        onBlur= {onBlur}
        name={name}
        id="formatted-numberformat-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
          inputComponent: NumberFormatCustom,
        }}
      />
  );
}