function Table(props){
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                {/* {console.log(props)} */}
                <tbody>
                    {
                        // console.log(props)
                        props.products.map((data)=>{
                            return (<tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.category}</td>
                                <td>
                                    <button className="btn btn-primary"
                                    onClick={() => props.edit(data)}
                                    >Edit</button>
                                    <button className="btn btn-danger" onClick={()=>{
                                        props.delete(data.id)
                                    }}>Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;