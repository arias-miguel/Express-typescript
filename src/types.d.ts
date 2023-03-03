export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy'| 'storwy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

interface SpecialDiaryEntry extends DiaryEntry{
    flightNumber: number
}