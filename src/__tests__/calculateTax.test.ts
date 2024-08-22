import { calculateTax } from '../sample02/calculateTax'

describe('消費税計算', () => {
    it('通常の消費税が適用されて100円が110円になる', () => {
        expect(calculateTax(100)).toBe(110)
    })

    it('軽減税率が適用されて100円が108円になる', () => {
        expect(calculateTax(100, true, false)).toBe(108)
    })

    it('イートインのため通常の消費税で100円が110円になる', () => {
        expect(calculateTax(100, false, true)).toBe(110)
    })

    it('軽減税率対象だがイートインのため100円が110円になる', () => {
        expect(calculateTax(100, true, true)).toBe(110)
    })

    it('通常の消費税で切り捨てになる金額', () => {
        expect(calculateTax(123, false, false)).toBe(135)
    })

    it('通常の消費税で切り上げになる金額', () => {
        expect(calculateTax(198, false, false)).toBe(218)
    })
})
