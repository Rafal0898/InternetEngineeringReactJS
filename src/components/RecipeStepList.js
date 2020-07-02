import React, {useEffect, useState} from 'react'
import API from '../services/api'
import {useParams} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {showErrorPopup} from "../redux/actions";
import {useDispatch} from "react-redux";

const checkTime=(time)=> {
    if(time !== 0) return ` Time: ${time}min`;
    return '';
};

const RecipeStepItem = (props) => {
    const {description, time} = props;
    return <ListGroup.Item variant="primary">{description}.<br/> {checkTime(time)} </ListGroup.Item>
};

export const RecipeStepList = () => {
    const dispatch = useDispatch();
    const [recipeSteps, setRecipeSteps] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        API.get(`/recipe/${id}/recipeSteps`)
            .then((response) => {
                console.log(response);
                setRecipeSteps(response.data)
            })
            .catch(error => {
                dispatch(showErrorPopup(error.response.data))
            })
    }, [id, dispatch]);
    return (
        <div>
            <p>Steps:</p>
            <ListGroup>
                {recipeSteps.map((item) => <RecipeStepItem key={item.recipe_step_id}
                                                           id = {item.recipe_id}
                                                           time = {item.time}
                                                           description={item.description}/>)}
            </ListGroup>
        </div>
    )
};