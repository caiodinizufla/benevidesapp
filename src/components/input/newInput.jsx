import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


export default function InputWithIcon(props){
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
    searchIcon,
    aditivos
  } = props;

  React.useEffect(() => { 
    setValue(props.value);
  },[props.value]);

  const handleChange = (event) => {
    setValue(event.target.value);
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
              {(searchIcon) ? 
                  <IconButton onClick={()=> {enter(value); setValue("")}}>
                    <SearchIcon/>
                  </IconButton> :false
              }
            </InputAdornment>
          ),
          aditivos,
        }}
        id="input-with-icon-textfield"
        name={name}
        type={type}
      />
  );
}