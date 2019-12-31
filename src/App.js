import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './store'



export default () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {
                        Routes.map((route, i) => {
                            if (route.protected) {
                                return <PrivateRoute key={i} {...route} />
                            } else {
                                return <Route key={i} {...route} />
                            }
                        }
                        )
                    }
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    return (
                        <>
                            {
                                localStorage.isAuth === "true" ?
                                    <Component {...props} /> :
                                    <Redirect
                                        to={{
                                            pathname: '/login',
                                            state: { from: props.location }
                                        }}
                                    />
                            }
                        </>
                    )

                }
            }
        />
    )
}