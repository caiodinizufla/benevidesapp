import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '../../components/table/table'
import Grid from '@material-ui/core/Grid';
import Template from '../../common/page/pageHome';
import Checkbox from '../../components/checkbox/checkboxCard'
import MyInput from '../../components/input/input'
import IntInput from '../../components/input/intInput'
import RealInput from '../../components/input/realInput'
import Button from '../../components/button/button'

import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Filter2Icon from '@material-ui/icons/Filter2';

import { register, getProducts } from './homeActions'


const useStyles = makeStyles(theme => ({
    widthButton: {
        display: "inline"
    },
}));

function Home(props){
    const classes = useStyles();
    const [state, setState] = React.useState({
        headers: ["Id", "Nome", "Preço", "Quantidade", "Situação"],
        markCritical: false,
        markAlert: false,
        markOk: false,
        name: "",
        price: "",
        quantity: ""
    });

    let { 
        headers,
        markCritical,
        markAlert,
        markOk,
        name,
        price,
        quantity
    } = state;   

    const { } = props;

    React.useEffect(() => { 
        props.getProducts(markOk, markAlert, markCritical);
    },[]);

    const handleChange = prop => event => {
        setState({...state, [prop]: event.target.value });
    };

    const register = async () => {
        setState({...state, name: "", price: "", quantity: "" });
        props.register({name, price, quantity}, markOk, markAlert, markCritical);
    };

    const markFilter = (name) => {
        let newState = true;
        if(state[name] === false){
            setState({...state, [name]: newState });
        }else{
            newState = false;
            setState({...state, [name]: newState });
        }
        let newOk = markOk,
            newAlert = markAlert,
            newCritical = markCritical;
        switch(name){
            case "markOk":
                newOk = newState;
                break;
            case "markAlert":
                newAlert = newState;
                break;
            case "markCritical":
                newCritical = newState;
                break;
        }
        props.getProducts(newOk, newAlert, newCritical);
    };

    const especialChange = (prop, value) => {
        setState({...state, [prop]: value });
    }

    return(
        <Template
            title={
                "Estoque"
            }
            content={
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    
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
                            <MyInput enter={()=>{register()}} autoFocus={true} textfield='Nome' icon={<ArtTrackIcon/>} value={name} onChange={handleChange('name')} width={300}/>
                        </Grid>
                        <Grid container justify="center" spacing={24}>
                            <RealInput
                                enter={()=>{register()}}
                                value={price} 
                                icon={<AttachMoneyIcon/>}
                                onChange={(value) => especialChange('price', value)}
                                prefix="R$"
                                textfield="Preço"
                                width={300}/>
                        </Grid>
                        <Grid container justify="center" spacing={24}>
                            <IntInput 
                                enter={()=>{register()}} 
                                textfield='Quantidade' 
                                icon={<Filter2Icon/>} 
                                value={quantity} 
                                onChange={(value) => especialChange('quantity', value)}
                                width={300}/>
                        </Grid>
                        <Grid container justify="center" spacing={24}>
                            <Button type="submit" label="Cadastrar" color="primary" width={200} onClick={() => {register()}}/>
                        </Grid>   
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid item>
                            <Checkbox 
                                label = "Ok" 
                                labelPlacement="start"
                                value = {markOk} 
                                clicked={() => {markFilter("markOk")}}
                            /> 
                        </Grid>
                        <Grid item>
                            <Checkbox 
                                label = "Alerta" 
                                labelPlacement="start"
                                value = {markAlert} 
                                clicked={() => {markFilter("markAlert")}}
                            />  
                        </Grid>
                        <Grid item>
                            <Checkbox 
                                label = "Crítico" 
                                labelPlacement="start"
                                value = {markCritical} 
                                clicked={() => {markFilter("markCritical")}}
                            /> 
                        </Grid>
                    </Grid>
                    <Table headers={headers} rows={props.products}/>

                </Grid>
            }
        /> 
    )
}
const mapStateToProps = state => ({
    products: state.home.products
})
const mapDispatchToProps = dispatch => bindActionCreators({
    register,
    getProducts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)