import { useState } from "react";

export const useCounterInDetail = (initialState = 1, available) => {

    const [counter, setState] = useState(initialState);

    const increment = () => {
        if(counter < available) setState(counter + 1);
    }

    const decrement = () => {
        if(counter > 1) setState(counter - 1);
    }

    const reset = () => {
        setState(initialState);
    }

    return [
        counter,
        increment,
        decrement,
        reset
    ]
}