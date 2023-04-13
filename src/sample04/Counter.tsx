import { useState } from 'react'

/**
 * ボタンをクリックするとカウントが増える
 * 初期値は0
 */
export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <p>Count: {count}</p>
        </>
    )
}
