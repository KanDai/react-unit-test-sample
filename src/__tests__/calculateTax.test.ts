import { calculateTax } from '../sample02/calculateTax'

describe('消費税計算', () => {
    it('100円 -> 110円', () => {
        expect(calculateTax(100)).toBe(110)
    })

    it('100円 -> 108円', () => {
        expect(calculateTax(100, true, false)).toBe(108)
    })

    it('100円 -> 110円', () => {
        expect(calculateTax(100, false, true)).toBe(110)
    })

    it('100円 -> 110円', () => {
        expect(calculateTax(100, true, true)).toBe(110)
    })

    it('123円 -> 135円', () => {
        expect(calculateTax(123, false, false)).toBe(135)
    })

    it('198円 -> 218円', () => {
        expect(calculateTax(198, false, false)).toBe(218)
    })
})
