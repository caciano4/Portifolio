import './App.css';
import Body from './pages/Home/index.jsx'
import NavBar from './components/NavBar/index.jsx'
import Sobre from './pages/Sobre/index.jsx'
import Contact from "./pages/Contato/Contact";
import Projects from "./pages/Projetos/Projects";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        <Body/>
                    </Route>
                    <Route path="/sobre">
                        <NavBar />
                        <Sobre />
                    </Route>
                    <Route path="/projetos">
                        <NavBar />
                        <Projects />
                    </Route>
                    <Route path="/contato">
                        <NavBar />
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
