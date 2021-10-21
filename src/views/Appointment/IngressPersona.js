import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CRow,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CLabel,
  CInput,
  CFormGroup,
  CButton,
  CTextarea,
  CModalFooter,
} from "@coreui/react";
import moment from "moment-timezone";
import "moment/locale/es";
import { visitUpdate } from "src/util/Visit";
import { GetAccount } from "../Auth/Account";
import { statusColor } from "../../util/StatusUtil";
moment.locale("es");

const IngressPersona = (props) => {
  const { setAppointmentData, show, visit, showHandler } = props;
  const history = useHistory();

  const [visitData, setVisitData] = useState();
  const [role, setRole] = useState();
  const [buttons, setButtons] = useState();
  useEffect(() => {
    if (visit) {
      console.log("ka vusuta qye se sekecuibi", visit);
      const {
        id,
        person,
        dateTimestamp,
        checkInTimestamp,
        checkOutTimestamp,
        privateVehicle,
        reason,
        status,
        adminApprove,
        operApprove,
        adminInProgress,
        operInProgress,
        adminFinished,
        operFinished,
        adminInTimestamp,
        operInTimestamp,
        adminOutTimestamp,
        operOutTimestamp,
        account,
        hostName,
        hostWarehouse,
      } = visit;
      if (person) {
        const { firstName, lastName, email, phone, company } = person;
        const { role } = account;

        setVisitData({
          id: id,
          dateTimestamp: dateTimestamp,
          checkInTimestamp: checkInTimestamp,
          checkOutTimestamp: checkOutTimestamp,
          reason: reason,
          status: status,
          adminApprove: adminApprove,
          operApprove: operApprove,
          adminInProgress: adminInProgress,
          operInProgress: operInProgress,
          adminFinished: adminFinished,
          operFinished: operFinished,
          adminInTimestamp: adminInTimestamp,
          operInTimestamp: operInTimestamp,
          adminOutTimestamp: adminOutTimestamp,
          operOutTimestamp: operOutTimestamp,
          hostName: hostName,
          hostWarehouse: hostWarehouse,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          company: company,
          brand: privateVehicle ? privateVehicle.brand : null,
          color: privateVehicle ? privateVehicle.color : null,
          model: privateVehicle ? privateVehicle.model : null,
          plate: privateVehicle ? privateVehicle.plate : null,
          subBrand: privateVehicle ? privateVehicle.subBrand : null,
        });

        GetAccount(localStorage.getItem("account")).then((account) => {
          setRole(account.role);
        });
      }
    }
  }, [visit, role]);

  const onCloseModal = () => {
    showHandler(false);
  };

  const onIngress = () => {
    visitUpdate(visitIngressHandler(visit)).then((updated) => {
      console.log("se actualizo la cuenta ", updated);
      history.push("/appointment/list");
      showHandler(false);
    });
  };
  const onReject = () => {
    visitUpdate(visitRejectHandler(visit)).then((updated) => {
      history.push("/appointment/list");
      console.log("se actualizo la cuenta ", updated);
      showHandler(false);
    });
  };

  const onCancel = () => {
    visitUpdate(visitCanceled(visit)).then((updated) => {
      history.push("/appointment/list");
      console.log("se actualizo la cuenta ", updated);
      showHandler(false);
    });
  };

  const visitCanceled = (visitData) => {
    if (role == "SUPER_ADMIN") {
      visitData.status = "CANCELLED_SA";
    } else {
      visitData.status = "CANCELLED";
    }
    return visitData;
  };

  const visitRejectHandler = async (visitData) => {
    const REJECTED = "N/A";

    if (role == "ADMIN" && !visitData.operApprove) {
      visitData.status = "REJECTED_BY_ADMIN";
      visitData.adminApprove = false;
      visitData.adminInProgress = false;
      visitData.adminInTimestamp = REJECTED;
      visitData.checkInTimestamp = moment().tz("America/Mexico_City").format();
      visitData.adminFinished = false;
      visitData.adminOutTimestamp = REJECTED;
      visitData.checkOutTimestamp = moment().tz("America/Mexico_City").format();
    }
    if (role == "OPERATOR" && visitData.adminApprove) {
      visitData.status = "REJECTED_BY_OPERATOR";
      visitData.operApprove = false;
      visitData.operInProgress = false;
      visitData.operInTimestamp = REJECTED;
    }
    return visitData;
  };

  const visitIngressHandler = (visitData) => {
    if (role == "ADMIN" && !visitData.operApprove) {
      if (visitData.adminApprove) {
        visitData.status = "FINISHED_ADMIN";
        visitData.adminInProgress = false;
        visitData.adminFinished = true;
        visitData.adminOutTimestamp = moment()
          .tz("America/Mexico_City")
          .format();
        visitData.checkOutTimestamp = moment()
          .tz("America/Mexico_City")
          .format();
      } else {
        visitData.status = "IN_PROGRESS_ADMIN";
        visitData.adminApprove = true;
        visitData.adminInProgress = true;
        visitData.adminInTimestamp = moment()
          .tz("America/Mexico_City")
          .format();
        visitData.checkInTimestamp = moment()
          .tz("America/Mexico_City")
          .format();
      }
      return visitData;
    }
    console.log("TEST CHARLY ", role, visitData.adminApprove);
    if (role == "OPERATOR" && visitData.adminApprove) {
      if (visitData.operApprove) {
        visitData.status = "FINISHED_OPERATOR";
        visitData.operInProgress = false;
        visitData.operApprove = false;
        visitData.operOutTimestamp = moment()
          .tz("America/Mexico_City")
          .format();
      } else {
        visitData.status = "IN_PROGRESS_OPERATOR";
        visitData.operApprove = true;
        visitData.operInProgress = true;
        visitData.operInTimestamp = moment().tz("America/Mexico_City").format();
      }
    }
    return visitData;
  };

  const onAdminButtons = () => {
    if (visitData.status == "SCHEDULED") {
      return (
        <CModalFooter>
          <CButton color="danger" onClick={(e) => onReject(e)}>
            Rechazar
          </CButton>
          <CButton color="success" onClick={(e) => onIngress(e)}>
            Ingresar
          </CButton>
        </CModalFooter>
      );
    } else {
      return (
        <CModalFooter>
          <CButton color="success" onClick={(e) => onIngress(e)}>
            Dar Salida
          </CButton>
        </CModalFooter>
      );
    }
  };

  const onOperButtons = () => {
    if (visitData.status == "IN_PROGRESS_ADMIN") {
      return (
        <CModalFooter>
          <CButton color="danger" onClick={(e) => onReject(e)}>
            Rechazar
          </CButton>
          <CButton color="success" onClick={(e) => onIngress(e)}>
            Ingresar
          </CButton>
        </CModalFooter>
      );
    } else {
      return (
        <CModalFooter>
          <CButton color="success" onClick={(e) => onIngress(e)}>
            Dar Salida
          </CButton>
        </CModalFooter>
      );
    }
  };

  const onButtonAssign = (type) => {
    switch (type) {
      case "SUPER_ADMIN":
        if (visitData.status == "SCHEDULED") {
          return (
            <CModalFooter>
              <CButton color="danger" onClick={(e) => onCancel(e)}>
                Cancelar Cita
              </CButton>
            </CModalFooter>
          );
        }
        break;
      case "USER":
        if (visitData.status == "SCHEDULED") {
          return (
            <CModalFooter>
              <CButton color="danger" onClick={(e) => onCancel(e)}>
                Cancelar Cita
              </CButton>
            </CModalFooter>
          );
        }
        break;
      case "HOST":
        if (visitData.status == "SCHEDULED") {
          return (
            <CModalFooter>
              <CButton color="danger" onClick={(e) => onCancel(e)}>
                Cancelar Cita
              </CButton>
            </CModalFooter>
          );
        }
        break;

      case "ADMIN":
        onAdminButtons();
        break;

      case "OPERATOR":
        onOperButtons();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <CModal
        color={visitData ? statusColor(visitData.status) : null}
        show={show}
        size="lg"
        onClose={onCloseModal}
      >
        <CModalHeader closeButton>
          <p className="h4">Datos de la Cita</p>
        </CModalHeader>
        <CModalBody>
          {visitData ? (
            <CRow>
              <CCol xs="12" md="12">
                <CRow>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Nombre</CLabel>
                      <div>
                        <CInput
                          id="firstName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.firstName}
                        />
                      </div>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="lastName">Apellido</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.lastName}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="email">Correo</CLabel>
                      <CInput
                        id="email"
                        placeholder=""
                        disabled
                        required
                        value={visitData.email}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Empresa</CLabel>
                      <CInput
                        id="firstName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.company}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="phone">Telefono</CLabel>
                      <CInput
                        id="phone"
                        placeholder=""
                        disabled
                        required
                        value={visitData.phone}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Motivo de la visita</CLabel>
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="1"
                        disabled
                        required
                        value={visitData.reason}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Recinto</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.hostWarehouse}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Anfitrión</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.hostName}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="date-input">Fecha</CLabel>
                      <CInput
                        type="text"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                        value={moment(visitData.dateTimestamp).format(
                          "DD-MMM-YYYY"
                        )}
                        disabled
                        // min={moment().format("YYYY-MM-DD")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Hora</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={moment(visitData.dateTimestamp).format("h:mm a")}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
              <hr />
              {visitData.plate ? (
                <CCol xs="12" md="12" className="custom-separation-two">
                  <CLabel htmlFor="firstName">
                    <strong>Datos del Vehículo</strong>
                  </CLabel>
                  <CRow>
                    <CCol xs="12" md="4">
                      <CFormGroup>
                        <CLabel htmlFor="firstName">Placa</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.plate}
                          required
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="4">
                      <CFormGroup>
                        <CLabel htmlFor="firstName">Color</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.color}
                          required
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="4">
                      <CFormGroup>
                        <CLabel htmlFor="firstName">Marca</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.brand}
                          required
                        />
                      </CFormGroup>
                    </CCol>{" "}
                    <CCol xs="12" md="4">
                      <CFormGroup>
                        <CLabel htmlFor="firstName">Sub-Marca</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.subBrand}
                          required
                        />
                      </CFormGroup>
                    </CCol>{" "}
                    <CCol xs="12" md="4">
                      <CFormGroup>
                        <CLabel htmlFor="firstName">Modelo</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.model}
                          required
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCol>
              ) : null}
            </CRow>
          ) : null}
        </CModalBody>
        {onButtonAssign(role)}
        {/* {true ? (
          <CModalFooter>
            <CButton color="danger" onClick={(e) => onReject(e)}>
              Rechazar
            </CButton>
            <CButton color="success" onClick={(e) => onIngress(e)}>
              Ingresar
            </CButton>
          </CModalFooter>
        ) : (
          <CModalFooter>
            <CButton color="danger" onClick={(e) => onReject(e)}>
              Cancelar
            </CButton>
            <CButton color="success" onClick={(e) => onIngress(e)}>
              Aceptar
            </CButton>
          </CModalFooter>
        )} */}
      </CModal>
    </>
  );
};

export default IngressPersona;
