import React, { useState } from "react"

function Challange()
{
    const[step , setStep] = useState(0);
    const[count,setCount] = useState(0);

    const date = new Date('june 7 2024');
    date.setDate(date.getDate() + count);

    function InStep()
    {
       if(step >= 0) setStep(step + 1);
    }
    function DeStep()
    {
        if(step > 0) setStep(step - 1);
    }

    function InCount()
    {
        setCount(count + 1);
    }
    function DeCount()
    {
        setCount(count - 1);
    }

    return(
        <div className="container">
            <div className="steps">
                <button onClick={InStep}>+</button>
                <p>Step : {step}</p>
                <button onClick={DeStep}>-</button>
            </div>
            <div className="counts">
                <button onClick={InCount}>+</button>
                <p>Count : {count}</p>
                <button onClick={DeCount}>-</button>
            </div>
            <p className="dates">
                {date.toDateString()}
            </p>
        </div>
    );
}
export default Challange;