import React from 'react';
function SumHook(){
    // const[user,setUser]=React.setUser({name:"VIshwa", grnder:"female" , Age:"20"})
    // return(<>
    //     Name:{user.name}
    //     Gender:{user.grnder}
    //     Age:{user.Age}
    //     <input type='button' value='update' onClick={()=> setUser({...user,age:21})}/>
    //     </>); 

    const[no1,setNo1]=React.useState(0)
    const[no2,setNo2]=React.useState(0)
    const[ans,setAns]=React.useState("")

    const dosum=()=>{
        var c=parseInt(no1)+parseInt(no2)
        setAns("Sum is"+c)
    }
    return(<>
    no1:<input type='text' onChange={(e)=>setNo1(e.target.value)}/>
    no2:<input type='text' onChange={(e)=>setNo2(e.target.value)}/>
    <input type='button' value="+" onClick ={dosum}/>
    {ans}
    </>);
    }
export default SumHook;