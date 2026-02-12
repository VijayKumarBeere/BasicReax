import './Keypad.css'
function Keypad({allow, clear, equals, back}){
    return(
        <div className="keypad">
            <div className='row'>
                <button className='name' id='title'>CASIO</button>
                <button className='operator' onClick={back}>←</button>
            </div>
            <div className="row">
                <button className='digit' onClick={()=>{
                    allow('7')
                }}>7</button>
                <button className='digit' onClick={()=>{
                    allow('8')
                }}>8</button>
                <button className='digit' onClick={()=>{
                    allow('9')
                }}>9</button>
                <button className='operator' onClick={()=>{
                    allow('/')
                }}>/</button>
            </div>
            <div className="row">
                <button className='digit' onClick={()=>{
                    allow('4')
                }}>4</button>
                <button className='digit' onClick={()=>{
                    allow('5')
                }}>5</button>
                <button className='digit' onClick={()=>{
                    allow('6')
                }}>6</button>
                <button className='operator' onClick={()=>{
                    allow('*')
                }}>*</button>
            </div>
            <div className="row">
                <button className='digit' onClick={()=>{
                    allow('1')
                }}>1</button>
                <button className='digit' onClick={()=>{
                    allow('2')
                }}>2</button>
                <button className='digit' onClick={()=>{
                    allow('3')
                }}>3</button>
                <button className='operator' onClick={()=>{
                    allow('-')
                }}>-</button>
            </div>
            <div className="row">
                <button className='digit' onClick={()=>{
                    allow('0')
                }}>0</button>
                <button className='func-key' onClick={equals}>=</button>
                <button className='func-key' onClick={clear}>C</button>
                <button className='operator' onClick={()=>{
                    allow('+')
                }}>+</button>
            </div>
        </div>
    )
}

export default Keypad;