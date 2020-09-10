import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import If from '../../helpers/if';
import Input from '../input/input'
import Calendar from '@material-ui/icons/CalendarToday/'
import IconButton from '@material-ui/core/IconButton';
import MyInput from '../input/input'


const useStyles = makeStyles(theme => ({
    divCima: {
        //backgroundColor: red[100],
    },
    divCentro: {
        //backgroundColor: red[300],
    },
    editButton: {
        marginTop: 4,
    },
    divBaixo: {
        //backgroundColor: red[500],
    },
}));

export default function Title(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        editavel: false,
        hiddenEditar: false,
        hiddenConfirmar: true
    })
    const { tamanho, text, showLabel, valueInput, showEdit } = props;
    const { editavel, hiddenEditar, hiddenConfirmar } = state;


    const Editar = () => {
        setState({ editavel: true, hiddenEditar: true, hiddenConfirmar: false });
    }
    const Confirmar = () => {
        setState({ editavel: false, hiddenEditar: false, hiddenConfirmar: true });
    }

    return (

        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >

            <Grid item >
                <div className={classes.divCima}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="baseline"
                    >
                        <Grid item>
                            <If teste={showLabel}>
                                <Input textfield='Vencimento' icon={<Calendar />} value={valueInput} width={200} />
                            </If>
                        </Grid>

                    </Grid>
                </div>
            </Grid>

            <Grid item >
                <div className={classes.divBaixo}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <div className={classes.divCentro}>
                                <If teste={!editavel}>
                                    <Typography variant={tamanho}>
                                        {text}
                                    </Typography>
                                </If>
                                <If teste={editavel}>
                                    <MyInput minWidth={350} value={text} />
                                </If>
                            </div>
                        </Grid>
                        <If teste={showEdit}>
                            <Grid item>
                                <If teste={!hiddenEditar}>
                                    <div className={classes.editButton}>
                                        <IconButton aria-label="edit" onClick={Editar}>
                                            <Editar />
                                        </IconButton>
                                    </div>
                                </If>
                                <If teste={!hiddenConfirmar}>
                                    <div className={classes.editButton}>
                                        <IconButton aria-label="confirmar" onClick={Confirmar}>
                                            <Confirmar />
                                        </IconButton>
                                    </div>
                                </If>
                            </Grid>
                        </If>

                    </Grid>
                </div>
            </Grid>
        </Grid>

    );
}