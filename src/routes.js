import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header'
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'

function Routes(){
    return(
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/filme/:id" component={Filme} />
            <Route exact path="/favoritos" component={Favoritos} />
        </Switch>
        <ToastContainer />
        </BrowserRouter>
    )
}

export default Routes;