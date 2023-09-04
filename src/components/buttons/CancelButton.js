import React from "react";

function CancelButton({ cancelHandler }) {
    return (
        <div className="p-2">
            <button className="btn btn-danger" style={{marginRight:'8px'}} onClick={cancelHandler}>
                Cancel
            </button>
        </div>
    );
};

export default CancelButton;