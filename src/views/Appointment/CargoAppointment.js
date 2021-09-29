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
  CInputCheckbox,
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
import Notification from "../custom/Notification";
import PersonalVehicle from "./PersonalVehicle";
import PersonaAppointment from "./PersonaAppointment";
import { hostList, uploadImage } from "../custom/Host";

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

const CargoAppointment = (props) => {
  const { setAppointmentData } = props;
  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);

  const [driverName, setDriverName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [reason, setReason] = useState();
  const [line, setLine] = useState();
  const [vehiclePlate, setVehiclePlate] = useState();
  const [platformPlate, setPlatformPlate] = useState();
  const [petition, setPetition] = useState();
  const [packageNumber, setPackageNumber] = useState();
  const [containerNumber, setContainerNumber] = useState();
  const [tractNumber, setTractNumber] = useState();
  const [sealsNumber, setSealsNumber] = useState();
  const [warehouse, setWarehouse] = useState();
  const [warehouses, setWarehouses] = useState();
  const [load, setLoad] = useState(false);
  const [unload, setUnload] = useState(false);
  const [host, setHost] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [hostId, setHostId] = useState();
  const [newVehicle, setNewVehicle] = useState(false);
  const [hostWId, setHostWId] = useState();

  const changeHandler = (e) => {
    console.log(e);
    if (e == "new") {
      setPersonAlready(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const hostsList = await hostList();
      onDataPrepare(hostsList);
      setHost(hostsList);
    };
    if (!host) {
      fetchData();
    }

    if (
      driverName &&
      email &&
      company &&
      reason &&
      phone &&
      line &&
      appointmentDate &&
      appointmentHour &&
      hostId &&
      load &&
      unload &&
      vehiclePlate &&
      platformPlate &&
      petition &&
      packageNumber &&
      containerNumber &&
      tractNumber &&
      sealsNumber
    ) {
      setAppointmentData({
        driverName: driverName,
        email: email,
        company: company,
        reason: reason,
        phone: phone,
        line: line,
        load: load,
        unload: unload,
        appointmentDate: appointmentDate,
        appointmentHour: appointmentHour,
        vehiclePlate: vehiclePlate,
        platformPlate: platformPlate,
        petition: petition,
        packageNumber: packageNumber,
        containerNumber: containerNumber,
        tractNumber: tractNumber,
        sealsNumber: sealsNumber,
        hostId: hostId,
        warehouse: warehouse,
      });
    }
  }, [
    personAlready,
    driverName,
    email,
    company,
    reason,
    phone,
    line,
    load,
    unload,
    appointmentDate,
    appointmentHour,
    hostId,
    vehiclePlate,
    platformPlate,
    petition,
    packageNumber,
    containerNumber,
    tractNumber,
    sealsNumber,
  ]);

  const onDataPrepare = (data) => {
    let whList = [];

    data.map((host) => {
      if (host.warehouse) {
        whList.push(host.warehouse.name);
      }
    });
    setWarehouses(Array.from(new Set(whList)));
  };

  const onSetWarehouse = (wh) => {
    setWarehouse(wh);
    onGetHostbyWh(wh);
  };

  const onGetHostbyWh = (wh) => {
    let hostNameList = [];
    host.map((h) => {
      if (h.warehouse || h.hostName) {
        if (h.warehouse.name == wh) {
          let fullname = h.hostName.firstName + " " + h.hostName.lastName;
          hostNameList.push({
            id: h.id,
            name: fullname,
          });
        }
      }
    });
    setHostWId(hostNameList);
  };

  const onHostIdSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setHostId(event.target.options[selectedIndex].getAttribute("data-key"));
  };

  return (
    <>
      <div className="custom-separation"></div>
      <CRow>
        <CCol xs="12" md="6">
          <CRow>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="driverName">Conductor</CLabel>
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
                      id="driverName"
                      placeholder=""
                      onChange={(e) => {
                        setDriverName(e.target.value);
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
                <CLabel htmlFor="phone">Teléfono</CLabel>
                <CInput
                  id="phone"
                  placeholder=""
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="company">Empresa</CLabel>
                <CInput
                  id="company"
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
                <CLabel htmlFor="line">Linea Transportista</CLabel>
                <CInput
                  id="line"
                  placeholder=""
                  onChange={(e) => {
                    setLine(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="vehiclePlate">Placa Vehículo</CLabel>
                <CInput
                  id="vehiclePlate"
                  placeholder=""
                  onChange={(e) => {
                    setVehiclePlate(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="12">
              <CFormGroup>
                <CLabel htmlFor="platformPlate">Placa Plataforma</CLabel>

                <CInput
                  id="platformPlate"
                  placeholder=""
                  onChange={(e) => {
                    setPlatformPlate(e.target.value);
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
              <CLabel htmlFor="petition">Pedimento</CLabel>
              <CInput
                id="petition"
                placeholder=""
                onChange={(e) => {
                  setPetition(e.target.value);
                }}
                required
              />
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12">
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="packageNumber">Numero de Bultos</CLabel>
                  <CInput
                    id="packageNumber"
                    placeholder=""
                    onChange={(e) => {
                      setPackageNumber(e.target.value);
                    }}
                    required
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
                    onChange={(e) => {
                      setContainerNumber(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCol>
          <CCol xs="12" md="12">
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="tractNumber">
                    Numero Económico del Tracto
                  </CLabel>
                  <CInput
                    id="tractNumber"
                    placeholder=""
                    onChange={(e) => {
                      setTractNumber(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="sealsNumber">Numero de Sellos</CLabel>
                  <CInput
                    id="sealsNumber"
                    placeholder=""
                    onChange={(e) => {
                      setSealsNumber(e.target.value);
                    }}
                    required
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
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    onChange={(e) => {
                      onSetWarehouse(e.target.value);
                    }}
                  >
                    <option value="0">Selecciona un recinto...</option>
                    {warehouses
                      ? warehouses.map((x, y) => <option key={y}>{x}</option>)
                      : null}
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="host">Anfitrión</CLabel>
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    onChange={(e) => {
                      onHostIdSelect(e);
                    }}
                  >
                    <option value="0">Selecciona a tu Anfitrión...</option>
                    {hostWId
                      ? hostWId.map((x, y) => (
                          <option key={y} data-key={x.id}>
                            {x.name}
                          </option>
                        ))
                      : null}
                  </CSelect>{" "}
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
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="time">Hora</CLabel>
                  <CSelect
                    custom
                    name="select"
                    id="time"
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
                // value="load"
                onChange={(e) => setLoad(!load)}
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
                // value="unload"
                onChange={(e) => setUnload(!unload)}
              />
              <CLabel variant="custom-checkbox" htmlFor="unload">
                Descarga
              </CLabel>
            </CFormGroup>
          </CCol>
          <CCol xs="12" md="12" className="fix-files-upload">
            <CRow>
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">Pedimento</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">INE Frente</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
              <CCol xs="12" md="4">
                <CLabel htmlFor="file-input">INE Reverso</CLabel>
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CRow>
          </CCol>
        </CCol>
      </CRow>
    </>
  );
};

export default CargoAppointment;
