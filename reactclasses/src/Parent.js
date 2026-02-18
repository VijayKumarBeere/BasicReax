import Child from "./Child";

function Parent(){
    return(
        <>
            <h3>Parent Comp</h3>
            <Child></Child> 
        </>
    )
}
 //Chaining of functional components(Parent -> Child -> Grand Child) to access the object by passing it 
 //everytime as a property is known as Props drilling.

 //In order to avoid Props drilling we simply use createContext() hook in react.
 //exported createContext() hook object in index.js and imported in GChild.js
export default  Parent;