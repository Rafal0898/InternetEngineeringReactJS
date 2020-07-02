import React from 'react'
import brownie from "../images/brownie.jpg";
import chicken from "../images/chicken.jpg";
import bread from "../images/bread.jpg";
import pasta from "../images/pasta.jpg";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {ErrorModal} from "./ErrorModal";

export const NewUserStartPage = () => {
    const history = useHistory();
    if (JSON.parse(localStorage.getItem('user')) !== null) {
        history.push('/home')
    }
    return (
        <div className="text-center">
            <h4 className="card-header">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Seems that you are not logged in
                </div>
            </h4>
            Sign in, if you already have account<br/>
            <Button href='/signIn' variant="primary" className="mr-2" type='submit'>Sign in</Button><br/>
            or sign up, if you are new to this site<br/>
            <Button href='/signUp' variant="primary" className="mr-2" type='submit'>Sign up</Button><br/>

            <img src={brownie} className="rounded" alt=""/> {' '}
            <img src={chicken} className="rounded" alt=""/><br/>
            <img src={bread} className="rounded" alt=""/>{' '}
            <img src={pasta} className="rounded" alt=""/>
            <ErrorModal arg = 'elo 3 2 0'/>
        </div>
    )
}