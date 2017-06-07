import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import {Link} from 'react-router-dom'
import createHistory from 'history/createHashHistory'

const history = createHistory()

const RecipesList = () => (
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

const App = () => (
    <Router history={history}>
        <div>
            <div>
                <Link to='/recipes'>
                    Рецепты
                </Link>
            </div>
            <div>
                <Link to='/recipes/new'>
                    Новый рецепт
                </Link>
            </div>
            <Route exact path='/recipes' component={RecipesList}/>
            <Route exact path='/recipes/new' component={NewRecipe}/>
        </div>
    </Router>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)