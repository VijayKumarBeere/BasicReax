export function Deposit(amount){
    return {type:'deposit',payload:amount};
}

export function Withdraw(amount){
    return {type:'withdraw', payload:amount};
}

export function UpdateName(name){
    return {type:'nameUpdate', payload:name};
}

export function UpdateMobile(mobile){
    return {type:'mobileUpdate', payload:mobile};
}

export function Reset(){
    return {type:'reset'};
}