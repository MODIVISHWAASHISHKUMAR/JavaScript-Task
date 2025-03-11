import React from "react"; 
function CounterHook(){
    const[counter,setCounter]=React.useState(0)
    const[msg,setMasg]=React.useState("")
    const[mycounter,setmycounter]=React.useState(1)
    React.useEffect(()=>{
        console.log("Hello Component Loaded or Update for myCounter")
    },[mycounter])
   
    const increment=()=>{
        if(counter>4){
            setMasg("sorry +")
        }else{
            setCounter(counter+1)
            setMasg("")
        }
    }
    const decrement=()=>{
        if(counter<1){
            setMasg("sorry -")
        }else{
            setCounter(counter-1)
            setMasg("")
        }
    }
    return(<>
        <h1>{counter}</h1>
        <input type="button" value="+" onClick={increment}/>
        <input type="button" value="-" onClick={decrement}/>
        {msg}
        <hr/>
        {mycounter}
        <input type="button" value="++" onClick ={()=>setmycounter(mycounter+1)}/>
        </>
    );
}
export default CounterHook;
