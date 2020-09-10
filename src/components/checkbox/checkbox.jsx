import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition(props) {
  const { dados, prop } = props;
  const {
    title,
    itens
  } = dados;

  const handleChange = index => event => {
    dados.itens[index].value = event.target.checked
    props.handleChange(prop, dados);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <FormGroup aria-label="position">
        {itens.map((dado, index) => 
          <FormControlLabel
            name={dado.name}
            control={<Checkbox color="primary" />}
            label={dado.label}
            onChange={handleChange(index)}
            checked={dado.value}
            labelPlacement="end"
          />
        )}
      </FormGroup>
    </FormControl>
  );
}
