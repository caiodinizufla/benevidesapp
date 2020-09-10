export const toFloat = (value) => {
    if(typeof value !== "string"){
        value = value.toString();
    }
    value = parseFloat(value.replace(",","."))
    return value;
}

export const toReal = (value) => {
    value = toFloat(value);
    value = value * 100;
    if(value - Math.floor(value) > 0.3){
        value = (Math.ceil(value)) / 100;
    }else{
        value = (Math.floor(value)) / 100;
    }
    if(isNaN(value)){
        value = "-";
    }else{
        value = value.toString();
        if(value == ""){
            value = "0,00";
        }
        value = value.replace(".",",")
        if(value.indexOf(",") !== -1){
            switch(value.length - value.indexOf(",")){
                case 1:
                    value = value + "00"
                    break;
                case 2:
                    value = value + "0"
                    break;
                case 3:
                    break;
            }
        }else{
            value = "R$" + value + ",00"
        }
    }
    return value;
}