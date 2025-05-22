import { useState, useCallback, memo } from "react";

const Assignment1 = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrement = useCallback(() => {
        setCounter(c => c + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        setCounter(c => c - 1)
    })

    return (
        <>
            <p>Counter: {counter}</p>
            <ButtonComponenet onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </>
    )
}

const ButtonComponenet = memo(({onIncrement, onDecrement}) => {
    return (
        <>
            <button onClick={onIncrement} >Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </>
    )
})

export default Assignment1