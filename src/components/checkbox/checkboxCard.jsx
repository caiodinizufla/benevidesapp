import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition(props) {
  const { disabled, label ,value, clicked, labelPlacement } = props;

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position">
        <FormControlLabel
          name="value"
          control={<Checkbox color="primary" onClick={() => {clicked()}}/>}
          label={label}
          disabled={disabled}
          checked={value}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </FormControl>
  );
}
