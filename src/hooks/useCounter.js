import { useState } from "react";

export const useCounter = (initialState = 1, available, updateCart, id) => {

    const [counter, setState] = useState(initialState);

    const increment = async () => {
        if(counter < available){
            const res = await updateCart(id, '0');
            if(res)setState(counter + 1);
        }
    }

    const decrement = async () => {
        if(counter > 1){
            const res = await updateCart(id, '1');
            if(res)setState(counter - 1);
        }
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