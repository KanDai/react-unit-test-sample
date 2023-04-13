const TAX_RATE = 0.1
const REDUCED_TAX_RATE = 0.08

/**
 * 税込の金額を返す
 * 通常の税率は10%
 * 軽減税率適用の場合は8%
 * 飲食店で食べる場合は10%
 * 軽減税率適用かつ店内で食べる場合は10%
 *
 * @param amount 金額
 * @param isReducedTax 軽減税率適用かどうか
 * @param isEatIn 飲食店で食べるかどうか
 * @return 税込み金額(四捨五入)
 */
export const calculateTax = (
    amount: number,
    isReducedTax: boolean = false,
    isEatIn: boolean = false
) => {
    if (isReducedTax) {
        return Math.floor(amount * (1 + REDUCED_TAX_RATE))
    }
    if (isEatIn) {
        return Math.floor(amount * (1 + TAX_RATE))
    }
    return Math.floor(amount * (1 + TAX_RATE))
}
