import React from 'react';
import { Link } from 'react-router-dom';

function EditButton({ routePath, buttonFunction }) {
    return (
        <div className="p-2">
            <Link className="btn btn-secondary" to={routePath}>Edit {buttonFunction}</Link>
        </div>
    );
};

export default EditButton;