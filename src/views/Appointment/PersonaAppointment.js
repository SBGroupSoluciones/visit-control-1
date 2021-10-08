import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CFormGroup,
  CSelect,
  CTextarea,
} from "@coreui/react";
import PersonalVehicle from "./PersonalVehicle";
import { hostList, uploadImage, getImage, GetHost } from "../custom/Host";
import { calendarCreate, calendarUpdate, GetCalendar } from "src/util/Calendar";
import { S3Image, PhotoPicker } from "aws-amplify-react";
import Amplify from "aws-amplify";
import { AmplifyS3Image, AmplifyS3ImagePicker } from "@aws-amplify/ui-react";
import { filterArray } from "../../util/Utils";
import moment from "moment";
import { icons } from "src/assets/icons";
import { vehiclesList } from "src/util/Vehicle";
import { idGenerate } from "../../util/IdUtils";

const PersonaAppointment = (props) => {
  const { setAppointmentData } = props;
  const [account, setAccount] = useState();

  const [id, setId] = useState();
  const [newVehicle, setNewVehicle] = useState(false);
  const [personAlready, setPersonAlready] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
  const [reason, setReason] = useState();
  const [plate, setPlate] = useState();
  const [vehicleList, setVehicleList] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [availableHours, setAvailableHours] = useState();
  const [hostId, setHostId] = useState();
  const [selectedHost, setSelectedHost] = useState();
  const [hosts, setHosts] = useState();
  const [hostName, setHostName] = useState();
  const [warehouses, setWarehouses] = useState();
  const [warehouse, setWarehouse] = useState();
  const [hostWId, setHostWId] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const [ineFrontName, setIneFrontName] = useState();
  const [ineFrontData, setIneFrontData] = useState();
  const [ineBackName, setIneBackName] = useState();
  const [ineBackData, setIneBackData] = useState();
  const [imageKey, setImageKey] = useState();

  const changeHandler = (e) => {
    if (e == "new") {
      setPersonAlready(false);
    }
  };

  useEffect(() => {
    // console.log("LA PLACA DEL VEHICULO NUEVO ES ", plate)
    onGetVehicleList();
    const fetchData = async () => {
      const hostsList = await hostList();
      onDataPrepare(hostsList);
      setHosts(hostsList);
      setAccount(localStorage.getItem("account"));
    };
    if (!hosts) {
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
      hostName &&
      warehouse
      // &&
      // imageName &&
      // ineFrontName &&
      // ineBackName
    ) {
      if (selectedHost) {
        idGenerate(selectedHost.warehouse.code).then((newId)=>{
          setAppointmentData({
            id:newId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            company: company,
            reason: reason,
            plate: plate,
            appointmentDate: appointmentDate,
            appointmentHour: appointmentHour,
            host: selectedHost,
            imageName: imageName,
            ineFrontName: ineFrontName,
            ineBackName: ineBackName,
          });
        });
      }


      if (imageName && imageData) {
        let data = {
          fileName: `${account}/${onNameFormat(firstName)}-${onNameFormat(
            lastName
          )}/${imageName}`,
          file: imageData,
        };
        uploadImage(data)
          .then((uploaded) => {
            if (uploaded) console.log(uploaded.key);
          })
          .catch((error) => console.log("error al subir imagen", error));
      }
      if (ineFrontName && ineFrontData) {
        let data = {
          fileName: `${account}/${onNameFormat(firstName)}-${onNameFormat(
            lastName
          )}/${ineFrontName}`,
          file: ineFrontData,
        };
        uploadImage(data)
          .then((uploaded) => {
            if (uploaded) console.log(uploaded.key);
          })
          .catch((error) => console.log("error al subir imagen", error));
      }
      if (ineBackName && ineBackData) {
        let data = {
          fileName: `${account}/${onNameFormat(firstName)}-${onNameFormat(
            lastName
          )}/${ineBackName}`,
          file: ineBackData,
        };
        uploadImage(data)
          .then((uploaded) => {
            if (uploaded) console.log(uploaded.key);
          })
          .catch((error) => console.log("error al subir imagen", error));
      }
    }
  }, [
    personAlready,
    hosts,
    firstName,
    lastName,
    company,
    reason,
    appointmentDate,
    appointmentHour,
    hostId,
    plate,
    imageName,
    imageData,
    ineFrontName,
    ineFrontData,
    ineBackName,
    ineBackData,
    availableHours,
    vehicleList,
  ]);

  const onNameFormat = (name) => {
    return name.replaceAll(" ", "-");
  };

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
    hosts.map((h) => {
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
    console.log("data vehicle selectr", e);
    if (e == "new") {
      setNewVehicle(true);
    } else {
      setPlate(e);
    }
  };

  const onHostIdSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setHostId(event.target.options[selectedIndex].getAttribute("data-key"));
    hosts.map((item) => {
      if (
        item.id == event.target.options[selectedIndex].getAttribute("data-key")
      ) {
        const fullHostName = `${item.firstName} ${item.lastName}`;
        setHostName(fullHostName);
        setSelectedHost(item);
        console.log(item);
      }
    });
  };

  const onDateSelect = (date) => {
    setAppointmentDate(date);
    GetCalendar(date).then((calendar) => {
      console.log("CALENDARIO  ", calendar);
      if (calendar === null) {
        const data = { hostId: hostId, date: date };
        console.log("DATAA CALENDAR ", data);
        calendarCreate(data).then((createdCalendar) => {
          setAvailableHours(createdCalendar.hours);
          console.log("CALENDARIO CREADO ", createdCalendar);
        });
      } else {
        setAvailableHours(calendar.hours);
      }
    });
  };

  const onGetVehicleList = () => {
    vehiclesList().then((vehicles) => {
      setVehicleList(vehicles);
      // console.log("LOS VEHICULOS ", vehicles);
    });
  };

  const onHourSelect = (hour) => {
    if (!appointmentHour) {
      setAppointmentHour(hour);
      onAvailableHoursUpdate(hour);
    } else {
      const hourArray = filterArray({ hourList: availableHours, hour: hour });
      hourArray.push(appointmentHour);
      setAppointmentHour(hour);
      onAvailableHoursUpdate(hour);
    }
  };

  const onAvailableHoursUpdate = (hour) => {
    GetCalendar(appointmentDate).then((currentCalendar) => {
      currentCalendar.hours = filterArray({
        hourList: availableHours,
        hour: hour,
      });
      calendarUpdate(currentCalendar).then((updatedCalendar) => {
        GetCalendar(appointmentDate).then((calendar) => {
          setAvailableHours(calendar.hours);
        });
      });
    });
  };

  const formatHour = (hour) => {
    switch (hour) {
      case "09:00:00":
        return "09:00 a.m.";
      case "09:30:00":
        return "09:30 a.m.";
      case "10:00:00":
        return "10:00 a.m.";
      case "10:30:00":
        return "10:30 a.m.";
      case "11:00:00":
        return "11:00 a.m.";
      case "11:30:00":
        return "11:30 a.m.";
      case "12:00:00":
        return "12:00 p.m.";
      case "12:30:00":
        return "12:30 p.m.";
      case "13:00:00":
        return "01:00 p.m.";
      case "13:30:00":
        return "01:30 p.m.";
      case "14:00:00":
        return "02:00 p.m.";
      case "14:30:00":
        return "02:30 p.m.";
      case "15:00:00":
        return "03:00 p.m.";
      case "15:30:00":
        return "03:30 p.m.";
      case "16:00:00":
        return "04:00 p.m.";
      case "16:30:00":
        return "04:30 p.m.";
      case "17:00:00":
        return "05:00 p.m.";
      case "17:30:00":
        return "05:30 p.m.";
      default:
        break;
    }
  };

  return (
    <>
      <div className="custom-separation"></div>
      <PersonalVehicle
        show={newVehicle}
        setNotification={setNewVehicle}
        setVehiclePlate={setPlate}
      />
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
            <CCol xs="12" md="3">
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
                  {vehicleList
                    ? vehicleList.map((x, y) => (
                        <option key={y}>{x.plate}</option>
                      ))
                    : null}
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
                </CSelect>
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
                    onDateSelect(e.target.value);
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
                    onHourSelect(e.target.value);
                  }}
                >
                  <option value="0">Selecciona una hora...</option>
                  {availableHours
                    ? availableHours.map((x, y) => (
                        <option key={y} value={x}>
                          {formatHour(x)}
                        </option>
                      ))
                    : null}
                </CSelect>
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
                <CCol xs="12" md="4">
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
                      {/* <AmplifyS3Image imgKey="aaaaaaaa.jpg" level="protected" */}
                    </CCol>
                    {/* <AmplifyS3ImagePicker
                      path={`${account}/`}
                      buttonText="Subir Imagen"
                    /> */}
                    {/* <AmplifyS3Image 
                    imgKey={`${account}/Screenshot%20from%202021-09-29%2022-51-17.png`}/> */}
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
