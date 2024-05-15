function List()
{
    const fruits=[{id:1,name:"apple",cal:100},
    {id:2,name:"banana",cal:45},
    {id:3,name:"cocount",cal:40}];
    // fruits.sort((a ,b )=>a.name.localeCompare(b.name));//ALPHABETICAL
    // fruits.sort((a ,b )=>b.name.localeCompare(a.name)) //REVERSE ALPHAETICAL
    // fruits.sort((a,b)=>a.cal-b.cal) //numeric

    const lowcalfruits=fruits.filter(fruit => fruit.cal<100);
    const highfruits=fruits.filter(fruit => fruit.cal>100);
    const listitems=fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.cal}</b></li>)
    const low=lowcalfruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.cal}</b></li>)
    const high=highfruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.cal}</b></li>)
    return(
       <ul>
        {high}
        {low}
        {listitems}
       </ul>
    );
}
export default List