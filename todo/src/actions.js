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

export function Credit(amount,tranId){
    return {type:'Credit',payload:{
        id: tranId,
        amount: amount,
        date: new Date(),
        Type: 'Credit'
    }};
}

export function Debit(amount,tranId){
    return{
        type:'Debit',payload:{
            id: tranId,
            amount: amount,
            date: new Date(),
            Type: 'Debit'
    }
    }
}