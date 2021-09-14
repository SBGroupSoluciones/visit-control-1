import React, { useEffect, useState, createRef } from "react";
import QRCode from "react-qr-code";
import classNames from "classnames";
import {
  CContainer,
  CRow,
  CBadge,
  CDataTable,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
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
import CarbonDatePicker from "react-carbon-datepicker";
import Notification from "./Notification";
import PersonalVehicle from "./PersonalVehicle";
import PersonaAppointment from "./PersonaAppointment";

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

const CargoAppointment = () => {
  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [reason, setReason] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [hostId, setHostId] = useState();
  const [newVehicle, setNewVehicle] = useState(false);

  const config = {
    squareEdge: false,
    background: "#fff",
    dateHeaderColor: "#777",
    button: {
      background: "#fff",
      color: "#999",
      hover: {
        background: "#f9f9f9",
        color: "#555",
      },
    },
    input: {
      background: "#f4f4f4",
      color: "#555",
    },
    year: {
      selector: {
        background: "#fff",
        pointerColor: "rgba(0,0,0,0.03)",
        listItem: {
          background: "transparent",
          color: "#999",
          hover: {
            background: "transparent",
            color: "#333",
          },
          active: {
            background: "transparent",
            color: "#333",
            hover: {
              background: "transparent",
              color: "#222",
            },
          },
        },
        button: {
          background: "#fff",
          color: "#999",
          hover: {
            background: "#f9f9f9",
            color: "#555",
          },
        },
      },
      button: {
        background: "#fff",
        color: "#555",
        hover: {
          background: "#f9f9f9",
          color: "#222",
        },
      },
    },
    month: {
      button: {
        background: "#fff",
        color: "#555",
        hover: {
          background: "#f9f9f9",
          color: "#222",
        },
      },
      selector: {
        background: "rgba(255,255,255,0.95)",
        button: {
          background: "transparent",
          color: "#777",
          hover: {
            background: "#f5f5f5",
            color: "#444",
          },
          active: {
            background: "#c1e2c0",
            color: "#555",
            hover: {
              background: "#b0d8af",
              color: "#444",
            },
          },
        },
      },
    },
    date: {
      background: "transparent",
      color: "#555",
      hover: {
        background: "#f9f9f9",
        color: "#333",
      },
      active: {
        background: "#ed1f4f",
        color: "#fff",
        hover: {
          background: "#ed1f4f",
          color: "#fff",
        },
      },
      highlight: {
        background: "#fde1e7",
        color: "#333",
        hover: {
          background: "#fde1e7",
          color: "#333",
        },
      },
      disabled: {
        opacity: 0.4,
        color: "#555",
        background: "transparent",
      },
    },
    reminder: {
      headerColor: "#666",
      descriptionColor: "#999",
    },
  };
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

  const changeHandler = (e) => {
    console.log(e);
    if (e == "new") {
      setPersonAlready(false);
    }
  };

  useEffect(() => {}, [personAlready]);

  // const onFirstNameValidation = (firstName) => {
  //   setFirstNameValid(isValidFirstName(firstName) && firstName);
  //   setFirstName(firstName);
  // };

  const onVehicleSelect = (e) => {
    console.log("data", e);
    if (e == "new") {
      setNewVehicle(true);
    }
  };
  return (
    <>
      <div className="custom-separation"></div>

      <CRow>
        <CCol xs="12" md="6">
          <CRow>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Conductor</CLabel>
                {personAlready ? (
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    onChange={(e) => {
                      changeHandler(e.target.value);
                    }}
                  >
                    <option value="0">Seleccione una Persona...</option>
                    <option value="new">Nueva Persona</option>
                  </CSelect>
                ) : (
                  <div>
                    <CInput
                      id="firstName"
                      placeholder=""
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                    />
                  </div>
                )}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="email">Correo</CLabel>
                <CInput
                  id="email"
                  placeholder=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Teléfono</CLabel>
                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Empresa</CLabel>
                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Linea Transportista</CLabel>
                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Placa Vehículo</CLabel>

                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Placa Plataforma</CLabel>

                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="firstName">Pedimento</CLabel>

                <CInput
                  id="firstName"
                  placeholder=""
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
        </CCol>
        <CCol xs="12" md="6">
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Numero de Bultos</CLabel>

              <CInput
                id="firstName"
                placeholder=""
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                required
              />
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Numero del Contenedor</CLabel>

              <CInput
                id="firstName"
                placeholder=""
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                required
              />
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Numero Económico del Tracto</CLabel>

              <CInput
                id="firstName"
                placeholder=""
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                required
              />
            </CFormGroup>
          </CCol>

          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Recinto</CLabel>
              <CSelect
                custom
                name="select"
                id="select"
                onChange={(e) => {
                  setHostId(e.target.value);
                }}
              >
                <option value="0">Selecciona un recinto...</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
              </CSelect>{" "}
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Anfitrión</CLabel>
              <CSelect
                custom
                name="select"
                id="select"
                onChange={(e) => {
                  setHostId(e.target.value);
                }}
              >
                <option value="0">Selecciona a tu Anfitrión...</option>
                <option value="any">Cualquiera</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
              </CSelect>{" "}
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="date-input">Fecha</CLabel>
              <CInput
                type="date"
                id="date-input"
                name="date-input"
                placeholder="date"
                min="2021-09-03"
                onChange={(e) => {
                  setAppointmentDate(e.target.value);
                }}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CFormGroup>
              <CLabel htmlFor="firstName">Hora</CLabel>
              <CSelect
                custom
                name="select"
                id="select"
                onChange={(e) => {
                  setAppointmentHour(e.target.value);
                }}
              >
                <option value="0">Seleccione una hora...</option>
                <option value="09:00:00">09:00 a.m.</option>
                <option value="09:30:00">09:30 a.m.</option>
                <option value="10:00:00">10:00 a.m.</option>
                <option value="10:30:00">10:30 a.m.</option>
                <option value="11:00:00">11:00 a.m.</option>
                <option value="11:30:00">11:30 a.m.</option>
                <option value="12:00:00">12:00 p.m.</option>
                <option value="12:30:00">12:30 p.m.</option>
                <option value="13:00:00">01:00 p.m.</option>
                <option value="13:30:00">01:30 p.m.</option>
                <option value="14:00:00">02:00 p.m.</option>
                <option value="14:30:00">02:30 p.m.</option>
                <option value="15:00:00">03:00 p.m.</option>
                <option value="15:30:00">03:30 p.m.</option>
                <option value="16:00:00">04:00 p.m.</option>
                <option value="16:30:00">04:30 p.m.</option>
                <option value="17:00:00">05:00 p.m.</option>
                <option value="17:30:00">05:30 p.m.</option>
              </CSelect>{" "}
            </CFormGroup>
          </CCol>

          <CCol xs="12" md="12">
            <CRow>
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">Pedimento</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">INE Frente</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>{" "}
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">INE Reverso</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CRow>
          </CCol>
          <CCol xs="12" md="12">
            <CRow>
              <CButton type="submit" color="primary">
                Agendar
              </CButton>
            </CRow>
          </CCol>
        </CCol>
      </CRow>
    </>
  );
};

export default CargoAppointment;
