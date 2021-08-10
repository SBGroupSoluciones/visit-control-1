import React, { useState, useEffect } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

const Notification = (props) => {
  const { title, body, setNotification, activated} = props;

  const toggle = () => {
    setNotification(!activated);
  };

  return (
    <CModal show={true}>
      <CModalHeader closeButton>{title}</CModalHeader>
      <CModalBody>{body}</CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={toggle}>Aceptar</CButton>{" "}
      </CModalFooter>
    </CModal>
  );
};

export default Notification;
