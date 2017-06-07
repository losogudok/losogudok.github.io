import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Router, Route} from 'react-router'
import {Link} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const NewRecipe = () => (
    <div>
        <div>Новый рецепт</div>
        <textarea name='recipe' id='recipe' cols="30" rows="10" placeholder='Напиши свой рецепт'></textarea>
    </div>
)

const Recipe = ({match}) => (
    <p>
        {recipes.find((recipe) => recipe.id == match.params.id).name}
    </p>
)


const recipes = [
    {
        id: 1,
        name: 'Борщ'
    },
    {
        id: 2,
        name: 'Утка по-пекински'
    },
    {
        id: 3,
        name: 'Рыба Фуга'
    }
]

const App = () => (
    <Router history={history}>
        <div>
            <Link to='/recipes/new'>Новый рецепт</Link>
            <h2>Список рецептов</h2>
            {recipes.map((recipe) =>
                <div key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{`Рецепт ${recipe.name}`}</Link>
                </div>
            )}
            <Switch>
                <Route path='/recipes/new' component={NewRecipe}/>
                <Route path='/recipes/:id' component={Recipe}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)