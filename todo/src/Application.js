import Account from "./AccountDetails";
import Form from "./Form";
import './Application.css'
function App(){
    return(
        <>
        <div className="w-75 m-3 mx-auto justify-content-center align-items-center border border-secondary rounded">
            <Form></Form>
            <Account></Account>
        </div>
        </>
    )
}

export default App;