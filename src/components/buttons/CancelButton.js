import React from "react";

function CancelButton({ cancelHandler }) {
    return (
        <div>
            <button className="btn btn-secondary" style={{marginRight:'8px'}} onClick={cancelHandler}>
                Cancel
            </button>
        </div>
    );
};

export default CancelButton;