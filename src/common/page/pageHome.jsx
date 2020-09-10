import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles';
import If from '../../helpers/if'
import { Redirect } from 'react-router-dom'
import { resetRouter } from '../../reducers/routerActions'
import Message from '../msg/messages'
import Header from '../header'
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/title/title'
import blue from '@material-ui/core/colors/blue';



const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        width: '97%',   
    },
    container: {  
        width: '100%', 
        display:"flex",
        textAlign: 'center',  
    },
    title: { 
        //backgroundColor: blue[100],  
        marginBottom: 20
    },
    content: {  
        //backgroundColor: blue[300],
        marginBottom: 20
    },
    footer: {  
        //backgroundColor: blue[500],   
        marginBottom: 20
    },
}));

const notLogout = () => {
    return dispatch => {
        dispatch({
            type: "/adress",
        })
    }
}

function Template(props) {


    const classes = useStyles();
    const { title, content, footer, route } = props;
    const { redirect, from } = route;

    return (
        <div className={classes.root}>
            <If teste={redirect}>
                <Redirect to={from}/>
            </If>
            <Header/>
            <div className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <div className={classes.title}>
                            <Typography variant="h4">
                                {title}
                            </Typography>
                        </div>
                        <div className={classes.content}>
                            {content}
                        </div>
                        <div className={classes.footer}>
                            {footer}
                            <Message/>
                        </div>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({route: state.router.route})
const mapDispatchToProps = dispatch => bindActionCreators({resetRouter, notLogout}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Template)