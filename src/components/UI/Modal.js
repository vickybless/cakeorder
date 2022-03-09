import { Fragment } from "react";

import ReactDOM from "react-dom";

//NB: we also defined the portal and backdrop in the index.html file.

const Backdrop = (props) => {
  //passing up "onClose" props from the Cart.js to the backdrop here and below
  return <div onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// this is helper component to rendener the fetched the portal in the index.html in the components in the Frament tags below:
// (1)Backdrop and (2)ModalOverlay, since they use same portalElement, this helper componets helps makes the code cleaner
const portalElement = document.getElementById("overlays");

//Now ,portalElement is the location.
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
