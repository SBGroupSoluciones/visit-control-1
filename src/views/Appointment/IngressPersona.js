import React, { useEffect, useState } from "react";
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
moment.locale("es");

const IngressPersona = (props) => {
  const { setAppointmentData, show, visit } = props;

  const [visitData, setVisitData] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    if (visit) {
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

        setRole(role);
      }
    }
  }, [visit]);

  const onIngress = () => {
    visitUpdate(visitIngressHandler(visit)).then((updated) => {
      console.log("se actualizo la cuenta ", updated);
    });
  };
  const onReject = () => {
    visitUpdate(visitRejectHandler(visit)).then((updated) => {
      console.log("se actualizo la cuenta ", updated);
    });
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
  };

  const visitIngressHandler = (visitData) => {
    if (role == "ADMIN" && !visitData.operApprove) {
      if (visitData.adminApprove) {
        visitData.status = "FINISHED";
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
    }
    if (role == "OPERATOR" && visitData.adminApprove) {
      if (visitData.operApprove) {
        visitData.status = "FINISHED_OPERATOR";
        visitData.operInProgress = false;
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

  return (
    <>
      <CModal color="success" show={show} size="lg">
        <CModalHeader closeButton>
          <p className="h4">Confirmar Cita</p>
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
                  {/* <CCol xs="12" md="3">
                  <CFormGroup>
                    <CLabel htmlFor="firstName">Vechículo</CLabel>
                    <CSelect
                      custom
                      name="select"
                      id="select"
                      onChange={(e) => {
                        onVehicleSelect(e.target.value);
                      }}
                    >
                      <option value="none">Ninguno</option>
                      <option value="new">Añadir nuevo</option>
                      {vehicleList
                        ? vehicleList.map((x, y) => (
                            <option key={y}>{x.plate}</option>
                          ))
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol> */}
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
              <CCol xs="12" md="12">
                <CLabel htmlFor="firstName">Datos del Vehiculo</CLabel>
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
            </CRow>
          ) : null}
        </CModalBody>
        {true ? (
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
        )}
      </CModal>
    </>
  );
};

export default IngressPersona;
