import { getDayOfWeek } from '../sample03/getDayOfWeek'

describe('曜日を取得', () => {
  it('2023-4-13日は木曜日', () => {
    expect(getDayOfWeek('2023-04-13')).toEqual({ en: 'Thu', ja: '木' })
  })

  it('2023-12-31日は日曜日', () => {
    expect(getDayOfWeek('2023-12-31')).toEqual({ en: 'Sun', ja: '日' })
  })

  it('日付の書式が不正', () => {
    expect(getDayOfWeek('2023年4月13日')).toBeUndefined()
  })

  it('存在しない日付', () => {
    expect(getDayOfWeek('2023-04-31')).toBeUndefined()
  })
})
