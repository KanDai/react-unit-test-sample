import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Counter } from '../sample04/Counter'

describe('Counter', () => {
    test('render', () => {
        render(<Counter />)
        screen.getByText('Count: 0')
    })

    test('click:count', () => {
        render(<Counter />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        fireEvent.click(button)
        expect(screen.getByText('Count: 2')).toBeInTheDocument()
    })
})
