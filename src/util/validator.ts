export function isEmail(val:string):boolean {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
        return false;
    }
    return true;
}

export function isPhoneNumber(inputtxt:string)
{
    var phoneno = /^\d*$/;
    if(phoneno.test(inputtxt)) {
        return true;
    }
    return false;
}

export function isInput(value:string, props: string[], obj:any):string[] {
    let missing:string[] = [];
    props.forEach(prop => {
        if( !obj[prop] || obj[prop] === value)
            missing.push(prop)
    })
    return missing;
}

