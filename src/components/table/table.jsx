import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { toReal, toFloat } from '../../helpers/toReal'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: yellow[500],
    },
    error: {
      main: red[700],
    }
  },
});

//criar table com endereços
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({

}))(TableRow);


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  }
}));

export default function(props) {
  const classes = useStyles();
  const { rows, headers } = props;
  
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{headers[0]}</StyledTableCell>
            {headers.map((head, index) => 
              (index === 0) ? false : <StyledTableCell align="center">{head}</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => 
            <StyledTableRow hover={true} key={index}>
              {row.map((item, index2) => 
                (index2 === 2) ? 
                  <StyledTableCell align="center">
                    {toReal(item)}
                  </StyledTableCell>
                : (index2 === 4) ? 
                    <StyledTableCell align="center">
                      <ThemeProvider theme={theme}>
                        {(item === "Ok") ?
                        <Badge badgeContent={item} color="primary"/>:
                        (item === "Alerta") ?
                        <Badge badgeContent={item} color="secondary"/>:
                        <Badge badgeContent={item} color="error"/>}
                      </ThemeProvider>
                    </StyledTableCell>
                : <StyledTableCell align="center">{item}</StyledTableCell>
              )}
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

/*
              <StyledTableCell component="th" scope="row">
              </StyledTableCell>
              <StyledTableCell align="center">
                {row[0]}
              </StyledTableCell>*/