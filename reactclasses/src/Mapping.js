function Mapping(){
    let lang ='js';
    // let list =['html','css','js','react'];
    let list =[{id:1, con:'html'},{id:2, con:'css'},{id:3,con:'js'},{id:4,con:'react'}];
    return(
        <>
            <h1>{lang}</h1>
            <ul>
                {
                    list.map((e)=><li key={e.id}>{e.con}</li>)
                    // list.map((e,index)=> <li key={index}>{e}</li>
                    //It is not recommended to pass index as key value in real time because of modifying list of string is easy causing index mismatch issue.
                    //Instead list values should be in object type so that unique property of object
                    //can be passed as key.
                        // { //For more than one line to define
                        //     return(
                        //     <li>{e}</li>
                        //     );
                        // }
                    // )
                }
            </ul>
        </>
    )
}

export default Mapping;