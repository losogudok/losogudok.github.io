import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path='/recipes' component={RecipesList} />
                    <Route path='/recipe' component={Recipe} />
                    <Route path='*' component={Page404} />
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

class Page404 extends Component {
    render() {
        return (
            <h1>
                Page not found
            </h1>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)