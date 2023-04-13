const DAY_LABELS_JA = ['日', '月', '火', '水', '木', '金', '土'] as const
const DAY_LABELS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

type DayLabelJa = (typeof DAY_LABELS_JA)[number]
type DayLabelEn = (typeof DAY_LABELS_EN)[number]
type DayOfWeek = {
    ja: DayLabelJa
    en: DayLabelEn
}

/**
 * 受け取った日付の曜日を日本語と英語で返す
 * 受け取った日付が不正な日付の場合は undefined を返す
 *
 * @param date 日付 '2023-04-13'のような形式
 * @return type DayOfWeek
 */

export const getDayOfWeek = (date: string): DayOfWeek | undefined => {
    const dayOfWeek = new Date(date).getDay()

    if (isNaN(dayOfWeek)) {
        return undefined
    }

    return {
        ja: DAY_LABELS_JA[dayOfWeek],
        en: DAY_LABELS_EN[dayOfWeek],
    }
}
