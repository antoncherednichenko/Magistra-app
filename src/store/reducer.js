
export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_COMPLEXITY':
            return {
                ...state, 
                gameSettings: {...state.gameSettings, complexity: action.payload}
            }
        case  'SET_WINDOWS':
            return {
                ...state,
                gameSettings: {...state.gameSettings, windows: action.payload}
            }
        case 'SET_GAME':
            return {
                ...state,
                gameSettings: {...state.gameSettings, game: action.payload}
            } 
        case 'SET_ROUTE':
            return {
                ...state,
                gameSettings: {...state.gameSettings, route: action.payload}
            }
        case 'SET_BACKGROUND_COLOR':
            return {
                ...state,
                backgroundColor: action.payload
            }              

        default: {
            return state
        }
    }
}