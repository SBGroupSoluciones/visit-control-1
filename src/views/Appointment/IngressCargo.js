import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CFormGroup,
  CButton,
  CInputCheckbox,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import moment from "moment-timezone";
import "moment/locale/es";
import { visitUpdate } from "src/util/Visit";
import { S3Image, PhotoPicker } from "aws-amplify-react";
import { hostList, uploadImage } from "../custom/Host";

const IngressCargo = (props) => {
  const { setAppointmentData, show, visit, showHandler } = props;
  const history = useHistory();

  const [visitData, setVisitData] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    if (visit) {
      const {
        id,
        cargoVehicle,
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

      if (cargoVehicle) {
        const {
          line,
          vehiclePlate,
          platformPlate,
          containerNumber,
          tractNumber,
          load,
          unload,
          sealsNumber,
          additionalDoc,
          additionalDocPath,
          packageNumber,
          petition,
          petitionPath,
          driverName,
          email,
          company,
          phone,
          imgUrl,
          idFrontPath,
          idBackPath,
        } = cargoVehicle;
        const { role } = account;

        setVisitData({
          id: id,
          dateTimestamp: dateTimestamp,
          checkInTimestamp: checkInTimestamp,
          checkOutTimestamp: checkOutTimestamp,
          privateVehicle: privateVehicle,
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
          line: line,
          vehiclePlate: vehiclePlate,
          platformPlate: platformPlate,
          containerNumber: containerNumber,
          tractNumber: tractNumber,
          load: load,
          unload: unload,
          sealsNumber: sealsNumber,
          additionalDoc: additionalDoc,
          additionalDocPath: additionalDocPath,
          packageNumber: packageNumber,
          petition: petition,
          petitionPath: petitionPath,
          driverName: driverName,
          email: email,
          company: company,
          phone: phone,
          imgUrl: imgUrl,
          idFrontPath: idFrontPath,
          idBackPath: idBackPath,
        });

        console.log(visitData);

        setRole(role);
      }
    }
  }, [visit]);

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
        visitData.adminFinished = false;
        visitData.adminOutTimestamp = "";
        visitData.checkOutTimestamp = "";
        visitData.operFinished = false;
        visitData.operInProgress = false;
        visitData.operInTimestamp = "";
        visitData.operOutTimestamp = "";
      }
      return visitData;
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
      return visitData;
    }
  };

  const visitCanceled = (visitData) => {
    visitData.status = "CANCELLED";
    return visitData;
  };

  function removeEmpty(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null)
    );
  }
  const onCloseModal = () => {
    showHandler(false);
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
        } else if (
          visitData.status !== "CANCELLED" &&
          visitData.status !== "FINISHED_ADMIN" &&
          visitData.status !== "IN_PROGRESS_OPERATOR"
        ) {
          return (
            <CModalFooter>
              <CButton color="success" onClick={(e) => onIngress(e)}>
                Dar Salida
              </CButton>
            </CModalFooter>
          );
        }
        break;

      case "OPERATOR":
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
        } else if (
          visitData.status !== "SCHEDULED" &&
          visitData.status !== "CANCELLED" &&
          visitData.status !== "FINISHED_ADMIN" &&
          visitData.status !== "FINISHED_OPERATOR" &&
          visitData.status !== "REJECTED_BY_ADMIN" &&
          visitData.status !== "REJECTED_BY_OPERATOR"
        ) {
          return (
            <CModalFooter>
              <CButton color="success" onClick={(e) => onIngress(e)}>
                Dar Salida
              </CButton>
            </CModalFooter>
          );
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <CModal color="success" show={show} size="lg" onClose={onCloseModal}>
        <CModalHeader closeButton>
          <p className="h4">Datos de la Cita</p>
        </CModalHeader>
        <CModalBody>
          {visitData ? (
            <CRow>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol xs="12" md="12">
                    <CFormGroup>
                      <CLabel htmlFor="driverName">Conductor</CLabel>

                      <CInput
                        id="driverName"
                        placeholder=""
                        disabled
                        value={visitData.driverName}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CFormGroup>
                      <CLabel htmlFor="email">Correo</CLabel>
                      <CInput
                        id="email"
                        placeholder=""
                        required
                        disabled
                        value={visitData.email}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CFormGroup>
                      <CLabel htmlFor="phone">Teléfono</CLabel>
                      <CInput
                        id="phone"
                        placeholder=""
                        required
                        disabled
                        value={visitData.phone}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CFormGroup>
                      <CLabel htmlFor="company">Empresa</CLabel>
                      <CInput
                        id="company"
                        placeholder=""
                        required
                        disabled
                        value={visitData.company}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CFormGroup>
                      <CLabel htmlFor="line">Linea Transportista</CLabel>
                      <CInput
                        id="line"
                        placeholder=""
                        required
                        disabled
                        value={visitData.line}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel htmlFor="vehiclePlate">Placa Vehículo</CLabel>
                      <CInput
                        id="vehiclePlate"
                        placeholder=""
                        required
                        disabled
                        value={visitData.vehiclePlate}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel htmlFor="platformPlate">Placa Plataforma</CLabel>
                      <CInput
                        id="platformPlate"
                        placeholder=""
                        required
                        disabled
                        value={visitData.platformPlate}
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CCol xs="12" md="12">
                  <CFormGroup>
                    <CLabel htmlFor="petition">Pedimento</CLabel>
                    <CInput
                      id="petition"
                      placeholder=""
                      required
                      disabled
                      value={visitData.petition}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="12">
                  <CRow>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="packageNumber">
                          Numero de Bultos
                        </CLabel>
                        <CInput
                          id="packageNumber"
                          placeholder=""
                          required
                          value={visitData.packageNumber}
                          disabled
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="containerNumber">
                          Numero del Contenedor
                        </CLabel>
                        <CInput
                          id="containerNumber"
                          placeholder=""
                          required
                          value={visitData.containerNumber}
                          disabled
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol xs="12" md="12">
                  <CRow>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="tractNumber">Numero del Tracto</CLabel>
                        <CInput
                          id="tractNumber"
                          placeholder=""
                          required
                          disabled
                          value={visitData.tractNumber}
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="sealsNumber">Numero de Sellos</CLabel>
                        <CInput
                          id="sealsNumber"
                          placeholder=""
                          required
                          disabled
                          value={visitData.sealsNumber}
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs="12" md="12">
                  <CRow>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="warehouse">Recinto</CLabel>
                        <CInput
                          id="sealsNumber"
                          placeholder=""
                          required
                          disabled
                          value={visitData.hostWarehouse}
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="host">Anfitrión</CLabel>
                        <CInput
                          id="sealsNumber"
                          placeholder=""
                          required
                          disabled
                          value={visitData.hostName}
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs="12" md="12">
                  <CRow>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="date">Fecha</CLabel>
                        <CInput
                          type="text"
                          id="date-input"
                          name="date-input"
                          placeholder="date"
                          value={moment(visitData.dateTimestamp).format(
                            "DD-MMM-YYYY"
                          )}
                          disabled
                        />
                      </CFormGroup>
                    </CCol>
                    <CCol xs="12" md="6">
                      <CFormGroup>
                        <CLabel htmlFor="time">Hora</CLabel>
                        <CInput
                          id="lastName"
                          placeholder=""
                          disabled
                          required
                          value={moment(visitData.dateTimestamp).format(
                            "h:mm a"
                          )}
                          required
                        />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol xs="12" md="12">
                  <CFormGroup className="no-bottom-margin">
                    <CLabel htmlFor="firstName">Motivo</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="load"
                      name="inline-checkbox1"
                      checked={visitData.load}
                      disabled
                    />
                    <CLabel variant="custom-checkbox" htmlFor="load">
                      Carga
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="unload"
                      name="inline-checkbox2"
                      checked={visitData.unload}
                      disabled
                    />
                    <CLabel variant="custom-checkbox" htmlFor="unload">
                      Descarga
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CCol>
              {/* <CCol xs="12" md="12" className="fix-files-upload">
                <CRow>
                  <CCol xs="12" md="3">
                    <CRow>
                      <CCol xs="12" md="6">
                        <PhotoPicker
                          onPick={(data) => setImageName(data.name)}
                          preview
                          title="Seleccione una Imagen"
                          headerText="Imagen"
                          headerHint=" "
                          onLoad={(dataURL) => setImageData(dataURL)}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CRow>
                      <CCol xs="12" md="6">
                        <PhotoPicker
                          onPick={(data) => setIneFrontName(data.name)}
                          preview
                          title="Seleccione una Imagen"
                          headerText="INE Frente"
                          headerHint=" "
                          onLoad={(dataURL) => setIneFrontData(dataURL)}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CRow>
                      <CCol xs="12" md="6">
                        <PhotoPicker
                          onPick={(data) => setIneBackName(data.name)}
                          preview
                          title="Seleccione una Imagen"
                          headerText="INE Reverso"
                          headerHint=" "
                          onLoad={(dataURL) => setIneBackData(dataURL)}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CRow>
                      <CCol xs="12" md="6">
                        <PhotoPicker
                          onPick={(data) => setPetitionName(data.name)}
                          preview
                          title="Seleccione una Imagen"
                          headerText="Pedimento"
                          headerHint=" "
                          onLoad={(dataURL) => setPetitionData(dataURL)}
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CCol> */}
            </CRow>
          ) : null}
        </CModalBody>
        {onButtonAssign(role)}
      </CModal>
    </>
  );
};

export default IngressCargo;
