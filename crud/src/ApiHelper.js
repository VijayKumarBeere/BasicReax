import axios from 'axios';

const rootAPI = axios.create({
    baseURL: 'http://localhost:4200/'
});
export function GetData(){
    return rootAPI.get('/products')
}

export function postData(data){
    rootAPI.post('/products',data,{
        headers:
        {
            'Content-Type':'application/json'
        }
    });
}

export function updateData(data){
    rootAPI.put('/products/'+data.id,data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

export function deleteData(id){
    rootAPI.delete('/products/'+id);
}