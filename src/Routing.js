import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {RecipesList} from './components/RecipesList'
import {Form} from './components/Form'
import {Recipe} from './components/Recipe'
import {Page404} from './components/Error404'
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";

import {Home} from "./components/Home";
import {NewUserStartPage} from "./components/NewUserStartPage";
import {About} from "./components/About";
import {EditRecipe} from "./components/EditRecipe";

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <NewUserStartPage/>
                </Route>

                <Route exact path='/home'>
                    <Home/>
                </Route>

                <Route exact path="/signIn">
                    <SignIn/>
                </Route>

                <Route exact path="/signUp">
                    <SignUp/>
                </Route>

                <Route exact path="/recipe">
                    <RecipesList/>
                </Route>

                <Route path='/recipe/new'>
                    <Form/>
                </Route>

                <Route path='/recipe/:id'>
                    <Recipe/>
                </Route>

                <Route path='/editRecipe/:id'>
                    <EditRecipe/>
                </Route>

                <Route path = '/about'>
                    <About/>
                </Route>
                <Route>
                    <Page404/>
                </Route>
            </Switch>
        </>
    );
};