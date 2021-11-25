import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    menuList: [
        {id: 1, title: 'Математика', route: '/math'},
        {id: 3, title: 'Русский язык', route: '/math/maze'},
        {id: 4, title: 'Английский язык', route: '#'}
    ],
    mathCards: [
        {
            id: '1',
            title: 'ЛАБИРИНТЫ',
            icon: './img/labirint_animated.svg',
            route: '/maze'
        },
        {
            id: 2,
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            icon: './img/table_animated.svg',
            route: '/table_shulte'
        },
        {
            id: 3,
            title: 'РЕШИ ПРИМЕР',
            icon: './img/primer_animated.svg',
            route: '/solve'
        },
        {
            id: 4,
            title: 'ЗАПОМНИ И ПОВТОРИ',
            icon: './img/memory_animated.svg',
            route: '/remember'
        },
    ],
    gameSettings:{
        complexity: 1,
        windows: 1,
        game: '',
        route: '',
    },
    backgoundColor: `#fff`,
}

export default createStore(reducer, initialState)