import { createStore } from 'redux'
import Maze from '../Components/Math/Maze/Maze'
import Shulte from '../Components/Math/Shulte/Shulte'
import Solve from '../Components/Math/Solve/Solve'
import reducer from './reducer'

const initialState = {
    menuList: [
        {id: 1, title: 'Математика', route: '/math'},
        {id: 3, title: 'Русский язык', route: '/russian_leng'},
        {id: 4, title: 'Английский язык', route: '#'}
    ],
    mathCards: [
        {
            id: <Maze />,
            title: 'ЛАБИРИНТЫ',
            icon: '/img/labirint_animated.svg',
            route: '/maze'
        },
        {
            id: <Shulte />,
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            icon: './img/table_animated.svg',
            route: '/table_shulte'
        },
        {
            id: <Solve />,
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
        complexity: 'Легко',
        windows: 1,
        game: '',
        route: '',
    },
    bgColor: '#fff'
}

export default createStore(reducer, initialState)