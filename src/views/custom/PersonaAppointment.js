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
import {
  isValidText,
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidCompanyName,
  isValidPhoneNumber,
} from "../Auth/utils";
import { hostList, uploadImage, getImage } from "./Host";
import { S3Image, PhotoPicker } from "aws-amplify-react";
import moment from "moment";

const PersonaAppointment = (props) => {
  const { setAppointmentData } = props;

  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [reason, setReason] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [hostId, setHostId] = useState();
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [newVehicle, setNewVehicle] = useState(false);
  const [host, setHost] = useState();
  const [warehouses, setWarehouses] = useState();
  const [warehouse, setWarehouse] = useState();
  const [hostWId, setHostWId] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const [imageKey, setImageKey] = useState();

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
      console.log("los host", hostsList);
      setHost(hostsList);
    };
    if (!host) {
      fetchData();
    }

    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      company &&
      reason &&
      appointmentDate &&
      appointmentHour &&
      hostId &&
      image &&
      imageUrl
    ) {
      setAppointmentData({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone, 
        company: company,
        reason: reason,
        appointmentDate: appointmentDate,
        appointmentHour: appointmentHour,
        hostId: hostId,
        warehouse: warehouse,
        image: image,
        imageUrl: imageUrl,
      });
    }

    if (imageName && imageData) {
      console.log("ambos cargaron");
      let data = {
        fileName: imageName,
        file: imageData,
      };
      uploadImage(data).then((uploaded) => {
        console.log(uploaded.key);
        setImageKey(uploaded.key);
      });
    }
  }, [
    personAlready,
    host,
    firstName,
    lastName,
    company,
    reason,
    appointmentDate,
    appointmentHour,
    hostId,
    image,
    imageUrl,
    imageName,
    imageData,
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

  const onVehicleSelect = (e) => {
    console.log("data", e);
    if (e == "new") {
      setNewVehicle(true);
    }
  };

  const onImageLoad = (image) => {
    console.log("la imagen cargada", image);
    setImage(image.name);
    let data = {
      fileName: image.name,
      file: image,
    };
    uploadImage(data).then((uploaded) => {
      getImage(image.name).then((imagePath) => {
        setImageUrl(imagePath);
      });
    });
  };

  const onHostIdSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setHostId(event.target.options[selectedIndex].getAttribute("data-key"));
  };

  return (
    <>
      <div className="custom-separation"></div>
      <PersonalVehicle show={newVehicle} setNotification={setNewVehicle} />
      <CRow>
        <CCol xs="12" md="12">
          <CRow>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Nombre</CLabel>
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
            <CCol xs="12" md="3">    border: 1px solid #ccc;
              <CFormGroup>
                <CLabel htmlFor="lastName">Apellido</CLabel>
                <CInput
                  id="lastName"
                  placeholder=""
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Empresa</CLabel>
                {personAlready ? (
                  <CSelect custom name="select" id="select">
                    <option value="0">Seleccione una Persona...</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                ) : (
                  <CInput
                    id="firstName"
                    placeholder=""
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    required
                  />
                )}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="phone">Telefono</CLabel>
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
            <CCol xs="12" md="3">
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
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="6">
              <CFormGroup>
                <CLabel htmlFor="firstName">Motivo de la visita</CLabel>
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="1"
                  placeholder="Escriba el motivo de su visita..."
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Recinto</CLabel>
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
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Anfitrión</CLabel>
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
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="date-input">Fecha</CLabel>
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="date"
                  min={moment().format("YYYY-MM-DD")}
                  onChange={(e) => {
                    setAppointmentDate(e.target.value);
                  }}
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
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
                  <option value="17:30:00">05:30 p.m.</option>
                </CSelect>{" "}
              </CFormGroup>
            </CCol>

            <CCol xs="12" md="12">
              <CRow>
                <CCol xs="12" md="4">
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
                <CCol xs="12" md="4">
                  <CRow>
                    <CCol xs="12" md="6">
                      <PhotoPicker
                        onPick={(data) => setImageName(data.name)}
                        preview
                        title="Seleccione una Imagen"
                        headerText="INE Frente"
                        headerHint=" "
                        onLoad={(dataURL) => setImageData(dataURL)}
                      />
                    </CCol>
                  </CRow>
                </CCol>
                <CCol xs="12" md="4">
                  <CRow>
                    <CCol xs="12" md="6">
                      <PhotoPicker
                        onPick={(data) => setImageName(data.name)}
                        preview
                        title="Seleccione una Imagen"
                        headerText="INE Reverso"
                        headerHint=" "
                        onLoad={(dataURL) => setImageData(dataURL)}
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default PersonaAppointment;
