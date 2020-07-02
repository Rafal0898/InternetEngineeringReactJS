import React, {useState} from 'react'
import API from '../services/api'
import {Button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {showErrorPopup} from "../redux/actions";
import {useDispatch} from "react-redux";

export const AddRecipeStep = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const handleSubmit = (event) => {
        API.post(`/recipeStep`, {description: description, time: time, recipeId: id})
            .then()
            .catch(error => {
                dispatch(showErrorPopup(error.response.data))
            })
    };
    return (
        <Form.Group>
            <Form.Group>
                <Form.Label>Description: </Form.Label>
                <Form.Control onChange={event => setDescription(event.target.value)} type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Time(minutes): </Form.Label>
                <Row>
                    <Col>
                        <Form.Control onChange={event => setTime(event.target.value)} type="text"/>
                    </Col>
                    <Col>
                        <Button variant="outline-success" className="mr-2" type='submit' block onClick={handleSubmit}>Add
                            recipe step</Button>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
            </Form.Group>
        </Form.Group>
    )
};