import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import createHistory from 'history/createHashHistory'

const history = createHistory()

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path='/recipes' component={RecipesList} />
                    <Route path='/recipe' component={Recipe} />
                </div>
            </Router>
        )
    }
}

class RecipesList extends Component {
    render() {
        return (
            <h1>
                Recipes List!
            </h1>
        )
    }
}

class Recipe extends Component {
    render() {
        return (
            <h1>
                Recipe!
            </h1>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)