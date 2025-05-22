import { useState, useCallback, memo, useRef } from "react";

const Assignment2 = () => {

    // const inputElement = useRef()
    const [inputText, setInputText] = useState()

    const showAlert = useCallback(() => {
        // setInputText(inputElement.current.value)
        alert(inputText)
    }, [inputText])

    return (
        <>
            <input type="text" onChange={(e) => setInputText(e.target.value)} />
            <Alert onShowAlert={showAlert} />
        </>
    )
}

const Alert = memo(({onShowAlert}) => {
    return (
        <>
            <button onClick={onShowAlert} >Show alert</button>
        </>
    )
})

export default Assignment2