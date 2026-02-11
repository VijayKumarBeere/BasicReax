function ColorChange(){
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", height:"100vh"}}>
            <h4>Change background color</h4>
            <input type="color" onChange={
                (e) =>{
                    document.body.style.background = e.target.value;
                }
            }/>
        </div>
    )
}
export default ColorChange;