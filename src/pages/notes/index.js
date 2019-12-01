import React from 'react';
import { Redirect } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

export default class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return <Loading />;

        return (
            <div className="container-fluid ">
                <h2>Notlarım</h2>
                <Loading />
                <p>{this.props.isLoggedIn.toString()}</p>
            </div>
        );
    }


}

function Loading() {
    return (
    <div className="d-flex flex-fill justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
    </div>
    );
}