import React from "react";

function DoneButton({ cancelHandler }) {
    return (
        <div className="p-2">
            <button className="btn btn-secondary" style={{marginRight:'8px'}} onClick={cancelHandler}>
                Done
            </button>
        </div>
    );
};

export default DoneButton;