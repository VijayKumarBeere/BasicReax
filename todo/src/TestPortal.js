import { useState } from 'react';
import ReactDOM from 'react-dom';
import './TestPortal.css';
function App(){
    let [showModal, setModal] = useState(false)
    return(
        // <div id="parent" style={{position:'absolute', border:'1px solid black'}}>
        //     <h1>App Component</h1>
        //     <Popup data='Login success'></Popup>
        // </div>
        <div className='app'>
            <button className='btn btn-primary' onClick={toggle}>Open Modal</button>
            {
                showModal && <Modal close={toggle}></Modal>
            }
        </div>
    )

    function toggle(){
        setModal(!showModal);
    }
}

function Modal(props){
    return(
        ReactDOM.createPortal(
            <div className='model-overlay'>
                <div className='content'>
                    <h1 className='text-primary mt-2'>Modal</h1>
                    <p>Modal message box has been opened. Click close to disappear</p>
                    <button className='btn btn-danger' onClick={props.close}>Close</button>
                </div>
            </div>, document.getElementById('portal')
        )
    )
}


export default App;