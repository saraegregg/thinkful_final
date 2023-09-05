import React from 'react';
import CancelButton from '../components/buttons/CancelButton';
import DoneButton from '../components/buttons/DoneButton';
import SubmitButton from '../components/buttons/SubmitButton';

function Form(props) {
    if (props.formTitle === "Create Deck"){
        return (
            <div>
                <h2 className="p-2">{props.formTitle}</h2>
                <form onSubmit={props.submitHandler}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor={props.htmlForOne}>{props.formLabelOne}</label>
                        <input
                            type="text"
                            className="textarea"
                            required
                            rows="4" 
                            cols="30"
                            placeholder={props.formPlaceholderOne}
                            name={props.formNameOne}
                            onChange={props.changeHandler}
                            defaultValue={props.formValueOne ? props.formValueOne : ""}
                        />
                        </div>
                        <div className="col">
                        <label htmlFor={props.htmlForTwo}>{props.formLabelTwo}</label>
                        <textarea
                            className="textarea"
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderTwo}
                            name={props.formNameTwo}
                            type="text"
                            onChange={props.changeHandler}
                            defaultValue={props.formValueTwo ? props.formValueTwo : ""}
                        />
                        </div>
                        </div>
                        <br />
                            <div className="row">
                        <CancelButton cancelHandler={props.cancelHandler} />
                        <SubmitButton />
                    </div>
                </form>
            </div>
        );
    } else if (props.formTitle.includes("Add Card")) {
        return (
            <div>
                <h2 className="p-2">{props.formTitle}</h2>
                <form onSubmit={props.submitHandler}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor={props.htmlForOne}>{props.formLabelOne}</label>
                        <textarea
                            className="textarea"
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderOne}
                            name={props.formNameOne}
                            onChange={props.changeHandler}
                            defaultValue={props.formValueOne ? props.formValueOne : ""}
                        />
                        </div>
                        <div className="col">
                        <label htmlFor={props.htmlForTwo}>{props.formLabelTwo}</label>
                        <textarea
                            className="textarea"
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderTwo}
                            name={props.formNameTwo}
                            onChange={props.changeHandler}
                            defaultValue={props.formValueTwo ? props.formValueTwo : ""}
                        />
                        </div>
                        </div>
                        <br />
                            <div className="row">
                        <DoneButton cancelHandler={props.cancelHandler} />
                        <SubmitButton />
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h2 className="p-2">{props.formTitle}</h2>
                <form onSubmit={props.submitHandler}>
                    <div className="row">
                        <div className="col">
                        <label htmlFor={props.htmlForOne}>{props.formLabelOne}</label>
                        <textarea
                            className="textarea"
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderOne}
                            name={props.formNameOne}
                            onChange={props.changeHandler}
                            defaultValue={props.formValueOne ? props.formValueOne : ""}
                        />
                        </div>
                        <div className="col">
                        <label htmlFor={props.htmlForTwo}>{props.formLabelTwo}</label>
                        <textarea
                            className="textarea"
                            required
                            rows="4" cols="30"
                            placeholder={props.formPlaceholderTwo}
                            name={props.formNameTwo}
                            onChange={props.changeHandler}
                            defaultValue={props.formValueTwo ? props.formValueTwo : ""}
                        />
                        </div>
                        </div>
                        <br />
                            <div className="row">
                        <CancelButton cancelHandler={props.cancelHandler} />
                        <SubmitButton />
                    </div>
                </form>
            </div>
        );
    }
};

export default Form;