import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const portalElement = document.getElementById('overlays') as Element;

function Backdrop(props: any) {
    return (
        <div className={classes.backdrop} onClick={props.onCloseBackdrop}></div>
    );
}
function Overlay(props: any) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

export function Modal(props: any) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCloseBackdrop={props.onCloseModal}></Backdrop>, portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </>
    )
}
