import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Calculator } from '../sample05/Calculator'

describe('Calculator', () => {
    test('render', () => {
        render(<Calculator />)
        screen.getByText('Result: 0')
    })
    test('入力された値の合計が正しく表示されている', () => {
        render(<Calculator />)
        const leftSideInput = screen.getByTestId('leftSideInput')
        const rightSideInput = screen.getByTestId('rightSideInput')

        fireEvent.input(leftSideInput, { target: { value: '4' } })
        fireEvent.input(rightSideInput, { target: { value: '13' } })

        screen.getByText('Result: 17')
    })

    test('入力された値が片方だけでも正しく表示されている', () => {
        render(<Calculator />)
        const leftSideInput = screen.getByTestId('leftSideInput')

        fireEvent.input(leftSideInput, { target: { value: '123' } })

        screen.getByText('Result: 123')
    })

    test('clearボタンをクリックして値と合計がリセットされる', () => {
        render(<Calculator />)
        const leftSideInput = screen.getByTestId('leftSideInput')
        const rightSideInput = screen.getByTestId('rightSideInput')
        const clearButton = screen.getByRole('button')

        fireEvent.input(leftSideInput, { target: { value: '4' } })
        fireEvent.input(rightSideInput, { target: { value: '13' } })
        fireEvent.click(clearButton)

        screen.getByText('Result: 0')
    })
})
