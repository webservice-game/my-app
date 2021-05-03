import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return (
        <button className="back-button" onClick={history.goBack} style={{width: '100px', height: '40px'}}>Back</button>
    )
}