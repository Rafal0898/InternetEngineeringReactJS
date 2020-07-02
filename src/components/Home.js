import React from 'react'
import brownie from "../images/brownie.jpg";
import chicken from "../images/chicken.jpg";
import bread from "../images/bread.jpg";
import pasta from "../images/pasta.jpg";

export const Home = () => {
    return (
        <div className="text-center">
            <h4 className="card-header">Welcome to GoodRecipes</h4>
            Take a look at our <a href="/recipe">Recipe list </a>
            or <a href="/recipe/new">create own recipe</a>.<br/>
            <img src={brownie} className="rounded" alt=""/> {' '}
            <img src={chicken} className="rounded" alt=""/><br/>
            <img src={bread} className="rounded" alt=""/>{' '}
            <img src={pasta} className="rounded" alt=""/>
        </div>
    )
}