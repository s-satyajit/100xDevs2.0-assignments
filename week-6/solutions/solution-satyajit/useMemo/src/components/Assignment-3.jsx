import { useState, useMemo } from "react";

const Assignment3 = () => {

    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
    ])

    const totalValue = useMemo(() => {
        let total = 0
        for(let i = 0; i < items.length; i++) {
            total += items[i].value
        }
        return total
    }, [items])

    return (
        <div>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                )}
            </ul>
            <p>Total Price: ${totalValue}</p>
        </div>
    )
}

export default Assignment3