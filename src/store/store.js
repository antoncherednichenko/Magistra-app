import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    menuList: [
        {id: 1, title: 'Игры', route: '/games'},
        {id: 2, title: 'Правила', route: '/rules'},
    ],
    mathCards: [
        {
            id: 1,
            title: 'ЛАБИРИНТЫ',
            icon: '/img/labirint.svg',
            route: '/maze'
        },
        {
            id: 2,
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            icon: './img/table.svg',
            route: '/table_shulte'
        },
        {
            id: 3,
            title: 'РЕШИ ПРИМЕР',
            icon: './img/primer.svg',
            route: '/solve'
        },
        {
            id: 4,
            title: 'ЗАПОМНИ И ПОВТОРИ',
            icon: './img/memory.svg',
            route: '/remember'
        },
    ],
    gameSettings:{
        complexity: 'Легко',
        windows: 1,
        game: '',
        route: '',
    },
    bgColor: '#fff',
    rules: {
        'maze-rule': {
            title: 'ЛАБИРИНТЫ',
            animation: '/img/labirint_animated.svg',
            description:`Пройди сначала взглядом от зеленой 
                        до красной точки, а потом соедени линией`
        },
        'table_shulte-rule': {
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            animation: './img/table_animated.svg',
            description:`Найди по порядку и произнеси в слух
                        все числа начиная с единицы`
        },
        'solve-rule': {
            title: 'РЕШИ ПРИМЕР',
            animation: './img/primer_animated.svg',
            description:`Впиши в поле ответа какого числа не хватает,
                        чтобы равенство стало верным`
        },
        'remember-rule': {
            title: 'ЗАПОМНИ И ПОВТОРИ',
            animation: './img/memory_animated.svg',
            description:`Запомни какие плитки загорались и попробую указать на них`
        }
    }
}

export default createStore(reducer, initialState)