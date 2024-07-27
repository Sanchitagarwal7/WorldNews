import loading from '../loading.gif'

import React, { Component } from 'react';

// class Spinner extends Component {
//     render() {
function Spinner(){
        return (
            <div style={{textAlign: 'center'}}>
            <img style={{width: "650px", height: "500px"}} src={loading} alt="loading" />
            </div>
        );
    // }
}

export default Spinner;