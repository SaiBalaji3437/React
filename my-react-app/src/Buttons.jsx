function Buttons()
{
    const handleclick=(e)=>e.target.textContent="OUCH!";
    let count=0;
    const handleclick2=(name)=>{
        if(count<3)
            {
                count++;
                console.log(`${name} you clicked me${count}`)
            }
        else{
            console.log(`${name} stop clicking me!`)
        }
    }
        
    return(
        <>
        <button onClick={(e)=>handleclick(e)}>click me mama</button>
         <button onClick={()=>handleclick2("Balaji")}>Clickme</button>
        </>
        
       
    );

}
export default Buttons