import React, { useEffect, useState, createRef } from "react";
import QRCode from "react-qr-code";
import classNames from "classnames";
import {
  CRow,
  CBadge,
  CDataTable,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CImg,
  CForm,
  CLabel,
  CInput,
  CInputFile,
  CFormGroup,
  CSelect,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CTextarea,
  CButton,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];

const Appointment = () => {
  const [active, setActive] = useState(1);
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";

  let qrCode = {
    recinto: {
      id: "",
      name: "",
      address: "",
      phone: "",
      lat: "",
      lon: "",
    },
  };
  return (
    <>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Agendar Cita</CCardHeader>
            <CCardBody>
              {/* <QRCode value={JSON.stringify(qrCode)}/> */}
              <CTabs
                activeTab={active}
                onActiveTabChange={(idx) => setActive(idx)}
              >
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-user" />
                      {active === 0 && " Persona"}
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-basket" />
                      {active === 1 && " Vehiculo Privado"}
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-chart-pie" />
                      {active === 2 && " Vehiculo de Carga"}
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    <div className="custom-separation"></div>
                    {/* <QRCode value={JSON.stringify(qrCode)}/> */}
                    <CRow>
                      <CCol xs="12" md="6">
                        <CRow>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Nombre</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Correo</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Empresa</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">
                                Motivo de la visita
                              </CLabel>
                              <CTextarea
                                name="textarea-input"
                                id="textarea-input"
                                rows="3"
                                placeholder="Content..."
                              />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Anfitrión</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CRow>
                          <CCol xs="12" md="3">
                            <CImg
                              src="https://images.generated.photos/65psqhFCtD25VWHJM_zLZXhUQBZkpnyOaG3tpSsNtG4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2Jm/YjlhMDE4LTU2MTMt/NDQzZC1hMjM3LTMw/MjlhZDI4MGFlMy5q/cGc.jpg"
                              shape="rounded-circle"
                              thumbnail
                              className="mb-2"
                              align="right"
                              fluidGrow
                            />
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol xs="12" md="4">
                            <img
                              src="https://www.ambientum.com/wp-content/uploads/2020/06/DNI.png"
                              alt="..."
                              class="img-thumbnail"
                            />
                          </CCol>
                        </CRow>
                        <CRow>
                          <CButton type="submit" color="primary">
                            Agendar
                          </CButton>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CRow>
                      <CCol xs="12" md="6">
                        <CRow>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Conductor</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Correo</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Empresa</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Vehiculo</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Placa del Vehiculo</CLabel>
                              <CInput
                                id="firstName"
                                placeholder=""
                                required
                              />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="12" md="12">
                            <CFormGroup>
                              <CLabel htmlFor="firstName">Anfitrión</CLabel>
                              <CSelect custom name="select" id="select">
                                <option value="0">
                                  Seleccione una Persona...
                                </option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                              </CSelect>{" "}
                            </CFormGroup>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>{`3. ${lorem}`}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard>
        <CCardHeader>Lista de Citas</CCardHeader>
        <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            columnHeaderSlot={{ name: "Nombre" }}
            scopedSlots={{
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Appointment;
