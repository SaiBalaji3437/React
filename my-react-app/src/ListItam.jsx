import PropTypes from "prop-types"
function ListItam(props)
{
    const category=props.category
    const itemlist=props.items;
    const listitems=itemlist.map(fruit =><li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.cal}</b></li>)
    return(
        <>
        <h3>{category}</h3>
        <ol>
            
            {listitems}
        </ol>
        </>
        
    );
}
ListItam.ProtoTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            cal:PropTypes.number
    }))
}
ListItam.defaultProps={
    category:"Category",
    items:[],
}
export default ListItam;