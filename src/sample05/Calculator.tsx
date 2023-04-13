import { useMemo, useState } from 'react'

/**
 * 2つの入力欄に入力された値を足し算する
 * clearボタンを押すと入力欄と結果がクリアされる
 */

export const Calculator = () => {
    const [leftSideValue, setLeftSideValue] = useState('')
    const [rightSideValue, setRightSideValue] = useState('')

    const result = useMemo(() => {
        return Number(leftSideValue) + Number(rightSideValue)
    }, [leftSideValue, rightSideValue])

    const clear = () => {
        setLeftSideValue('0')
        setRightSideValue('0')
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                }}
            >
                <input
                    type="number"
                    data-testid="leftSideInput"
                    value={leftSideValue}
                    onInput={(e) => {
                        setLeftSideValue(e.currentTarget.value)
                    }}
                />
                <span>+</span>
                <input
                    type="number"
                    data-testid="rightSideInput"
                    value={rightSideValue}
                    onInput={(e) => {
                        setRightSideValue(e.currentTarget.value)
                    }}
                />
                <button type="button" onClick={clear}>
                    Clear
                </button>
            </div>
            <p>Result: {result}</p>
        </>
    )
}
