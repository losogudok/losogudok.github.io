import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import {NavLink} from 'react-router-dom'
import createHistory from 'history/createHashHistory'

const history = createHistory()

const RecipesList = ({match}) => (
    <div>
        <h1>
            Список рецептов
        </h1>
        <ul>
            <li>Борщ</li>
            <li>Утка по-пекински</li>
            <li>Рыбы Фуга</li>
        </ul>
    </div>
)

const NewRecipe = () => (
    <div>
        <div>Новый рецепт</div>
        <textarea name='recipe' id='recipe' cols="30" rows="10" placeholder='Напиши свой рецепт'></textarea>
    </div>
)

const activeStyle = {
    color: 'red'
}

const style = {
    display: 'block'
}

const App = () => (
    <Router history={history}>
        <div>
            <NavLink to='/recipes' style={style} activeStyle={activeStyle}>
                Рецепты
            </NavLink>
            <NavLink strict to='/recipes/' style={style} activeStyle={activeStyle}>
                Рецепты с аттрибутом strict
            </NavLink>
            <NavLink exact to='/recipes' style={style} activeStyle={activeStyle}>
                Рецепты с аттрибутом exact
            </NavLink>
            <NavLink to='/recipes/new' style={style} activeStyle={activeStyle}>
                Новый рецепт
            </NavLink>
            <NavLink to={{hash: '/recipec/new', search: '?foo=bar'}} style={style} activeStyle={activeStyle}>
                Новый рецепт с параметрами
            </NavLink>
            <NavLink exact to={{hash: '/recipec/new', search: '?foo=bar'}} style={style} activeStyle={activeStyle}>
                Новый рецепт с параметрами и аттрибутом exact
            </NavLink>
            <Route path='/recipes' component={RecipesList}/>
            <Route path='/recipes/new' component={NewRecipe}/>
        </div>
    </Router>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)