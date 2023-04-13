import { sumNumber } from '../sample01/calc'

test('1 + 2 = 3', () => {
    expect(sumNumber(1, 2)).toBe(3)
})

describe('Sample Test', () => {
    it('1 + 2 = 3', () => {
        expect(sumNumber(1, 2)).toBe(3)
    })

    it('1 + 2 = 4じゃない', () => {
        expect(sumNumber(1, 2)).not.toBe(4)
    })

    it('0.1 + 0.2 = 0.3', () => {
        expect(sumNumber(0.1, 0.2)).toBeCloseTo(0.3, 5)
    })

    it('10 + 20 = 25より大きい', () => {
        expect(sumNumber(10, 20)).toBeGreaterThan(25)
    })
})
