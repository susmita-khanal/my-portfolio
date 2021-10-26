import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Pages from "./components/Pages";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./Footer";

import "./App.css";

function App() {
    return (
        <>
            <div className="app">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/pages" component={Pages} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
