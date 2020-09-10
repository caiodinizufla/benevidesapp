import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

function ButtonSizes(props) {
  const { classes, to, color, width, heigh, onClick, type, name, label, icon, style} = props;
  return (        
    <Link to={to} activeClassName="current" style={{textDecoration:"none"}}>
      <Button name={name} type={type} variant="contained" style={{width, height: heigh, ...style}} size="large" color={color} className={classes.margin} onClick={onClick}>
          {label}
      </Button>
    </Link>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);