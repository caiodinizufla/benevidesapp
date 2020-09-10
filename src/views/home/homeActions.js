import axios from 'axios'
import API_DOMAIN from '../../config/api'
import { toastr } from 'react-redux-toastr'
import { toReal, toFloat } from '../../helpers/toReal'
import { home } from './homeReducers'

export function getProducts(markOk, markAlert, markCritical) {
    console.log(markOk, markAlert, markCritical);
    return dispatch => {
        axios.post(`${API_DOMAIN}api/getProducts`,
        {
            markOk, 
            markAlert, 
            markCritical
        })
        .then((response) => {
            console.log(response.data)
            dispatch({
                type: "getProducts",
                payload: response.data
            })
        }).catch(err => {
            console.log(err);
            if(err.request && err.request.response && JSON.parse(err.request.response).message){
                toastr.error('Ops...', JSON.parse(err.request.response).message)
            }else{
                toastr.error('Ops...', "Perda de conexão com servidor")
            }
        });
    }
}

export function register(product, markOk, markAlert, markCritical) {
    console.log(product);
    return dispatch => {
        let passou = true;
        if(product.name == ""){
            passou = false;
            toastr.warning('Nome', "Campo não pode ser vazio")
        }
        if(product.price == ""){
            product.price = "-";
        }
        if(product.quantity == ""){
            passou = false;
            toastr.warning('Quantidade', "Campo não pode ser vazio")
        }
        if(passou){
            axios.post(`${API_DOMAIN}api/register`, product)
            .then(response => {
                this.getProducts(markOk, markAlert, markCritical);
                toastr.success('Sucesso', response.data.message)
            }).catch(err => {
                console.log(err);
                if(err.request && err.request.response && JSON.parse(err.request.response).message){
                    toastr.error('Ops...', JSON.parse(err.request.response).message)
                }else{
                    toastr.error('Ops...', "Perda de conexão com servidor")
                }
            });
        }
    }
}