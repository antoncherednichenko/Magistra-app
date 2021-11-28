
export default function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_COMPLEXITY':
            const value = state.gameSettings.complexity + action.payload
            return {
                ...state, 
                gameSettings: {...state.gameSettings, complexity: value}
            }
        case  'CHANGE_WINDOWS':
            const windowsValue = state.gameSettings.windows + action.payload
            return {
                ...state,
                gameSettings: {...state.gameSettings, windows: windowsValue}
            }
            case 'SET_DEFAULT':
                return {
                    ...state, 
                    gameSettings: {
                        ...state.gameSettings,
                         complexity: 1,
                         windows: 1,
                         route: 1,
                        }
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