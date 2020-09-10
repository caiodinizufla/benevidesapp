import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import API_DOMAIN from '../../config/api'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import Button from '../button/button'
import Grid from '@material-ui/core/Grid';
import MyInput from '../input/input'
import Table from '../table/selectItem'

import HomeIcon from '@material-ui/icons/Home';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Filter2Icon from '@material-ui/icons/Filter2';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PublicIcon from '@material-ui/icons/Public';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


export default function FormAdress(props){
  const [state, setState] = React.useState({
      form: {
        name: "",
        price: "",
        quantity: "",
      }
  });

  const { 
    form
  } = state; 
  
  const {
    name,
    price,
    quantity
  } = form;

  const register = async () => {
    console.log('Cadastrando')
  };

  return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >                  
          <Grid container justify="center" spacing={24}>
            <h2>Novo</h2>
          </Grid>
          <Grid container justify="center" spacing={24}>
            <MyInput enter={()=>{register()}} autoFocus={true} textfield='Nome' icon={<HomeIcon/>} value={nickname} onChange={handleChange('nickname')} width={300}/>
          </Grid>
          <Grid container justify="center" spacing={24}>
            <MyInput enter={()=>{register()}} textfield='Preço' icon={<ConfirmationNumberIcon/>} value={street} onChange={handleChange('street')} width={300}/>
          </Grid>
          <Grid container justify="center" spacing={24}>
            <MyInput enter={()=>{register()}} textfield='Quantidade' icon={<Filter2Icon/>} value={number} onChange={handleChange('number')} width={300}/>
          </Grid>
          <Grid container justify="center" spacing={24}>
            <Button type="submit" label="Cadastrar" color="primary" width={200} onClick={() => {register()}}/>
          </Grid>   
        </Grid>
  )
}