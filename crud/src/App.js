// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import { deleteData, GetData, postData, updateData } from './ApiHelper';
import Form from './Form';

function App() {
  const [products,setProducts] = useState([]);
  const [showForm, setVisibility] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [defProduct, editProduct] =useState({
    name:'', price:'',category:'-1'
  })
  useEffect(()=>{
    getProducts()
  },[products])

  function getProducts(){
    GetData().then(res => setProducts(res.data.sort((a,b)=>a.id-b.id)));
  }

  function deleteProduct(id){
      deleteData(id);
      getProducts();
  }

  function saveProduct(data){
    if(editMode)
      updateData(data);
    else
      postData(data);
    getProducts();
    toggleForm();
  }

  function showProduct(data){
    editProduct(data);
    setVisibility(!showForm)
    setEditMode(true);
  }

  function toggleForm(){
    setVisibility(!showForm);
    editProduct({name:'', price:'',category:'-1'})
  }

  return (
    <div className="wrapper m-5 w-75">
      <h2 className="text-primary m-3">Products (CRUD)</h2>
      <button className="btn btn-primary" onClick={()=>{
        setEditMode(false);
        toggleForm()
      }}>Add New</button>
      <Table products={products} delete ={deleteProduct} edit={showProduct}></Table>
      {
        showForm && <Form close= {toggleForm} save={saveProduct} default={defProduct}></Form>
      }
    </div>
  );
}

export default App;
