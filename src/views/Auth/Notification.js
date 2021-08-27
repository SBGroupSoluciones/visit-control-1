import React, { useState, useEffect } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

const Notification = (props) => {
  const {
    title,
    body,
    buttonText,
    secundaryButton,
    show,
    setNotification,
    setPressedButton,
    color,
  } = props;

  const toggle = (e) => {
    setPressedButton(e.target.value);
    setNotification(!show);
  };

  return (
    <CModal show={show} color={color}>
      <CModalHeader closeButton>{title}</CModalHeader>
      <CModalBody>{body}</CModalBody>
      <CModalFooter>
        <CButton value="primary" color="primary" onClick={(e) => toggle(e)}>
          {buttonText ? buttonText : "Aceptar"}
        </CButton>
        {secundaryButton ? (
          <CButton
            value="secundary"
            color="secondary"
            onClick={(e) => toggle(e)}
          >
            {secundaryButton}
          </CButton>
        ) : null}
      </CModalFooter>
    </CModal>
  );
};

export default Notification;
