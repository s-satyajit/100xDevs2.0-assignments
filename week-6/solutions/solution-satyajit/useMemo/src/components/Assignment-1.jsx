import {useState, useMemo, useRef} from "react";

const Assignment1 = () => {
    const [inputVal, setInputVal] = useState()
    const [showText, setShowText] = useState(false)
    const inputElement = useRef()

    const calculateFactorial = () => {
        setShowText(true)
        setInputVal(inputElement.current.value)
    }

    const factorialOfInputVal = useMemo(() => {
        let fact = 1
        for(let i = inputVal; i > 0; i--) {
            fact *= i
        }
        return fact
    }, [inputVal])

    return (
        <>
            <input type="text" placeholder="Enter number to find factorial" ref={inputElement} />
            <button onClick={calculateFactorial}>Calculate Factorial</button>
            {showText && <p>Factorial of {inputVal} is {factorialOfInputVal}</p>}
        </>
    )
}

export default Assignment1