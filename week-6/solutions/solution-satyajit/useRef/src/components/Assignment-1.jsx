import { useEffect, useRef, useCallback } from "react";

const Assignment1 = () => {

    const inputComponent = useRef()

    useEffect(() => {
        inputComponent.current.focus()
    }, [inputComponent])

    const focusInput = useCallback(() => {
        inputComponent.current.focus()
    }, [])

    return (
        <>
            <input type="text" placeholder="Enter text here" ref={inputComponent} />
            <button onClick={focusInput}>Focus input</button>
        </>
    )
}

export default Assignment1