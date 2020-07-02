import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {showErrorPopup} from "../redux/actions";

export const ErrorModal = () => {
    const dispatch = useDispatch();
    const error_message = useSelector(state => state.error_message);
    const handleClose = () => dispatch(showErrorPopup(null));

    return (
        <>
            <Modal show={error_message != null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error_message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
