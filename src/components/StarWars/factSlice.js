import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 5,
    facts: [
        'Прообразом Чубакки стал пес режиссера.',
        'Актерам разрешили подобрать любимый цвет для своих световых мечей.',
        'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
        'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
        'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок'
    ]
}

export const factSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {
        changeNum: (state, action) => {
            state.number = action.payload
        }
    }
})

export const { changeNum } = factSlice.actions;

export const selectNumber = (state) => state.facts.number;


export const selectFacts = (state) => state.facts.facts;

export default factSlice.reducer
