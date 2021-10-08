import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CFormGroup,
  CSelect,
  CInputCheckbox,
} from "@coreui/react";
import { calendarCreate, calendarUpdate, GetCalendar } from "src/util/Calendar";
import { filterArray } from "../../util/Utils";
import { S3Image, PhotoPicker } from "aws-amplify-react";
import { hostList, uploadImage } from "../custom/Host";
import moment from "moment";
import { idGenerate } from "src/util/IdUtils";

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

const CargoAppointment = (props) => {
  const { setAppointmentData } = props;
  const [account, setAccount] = useState();
  const [personAlready, setPersonAlready] = useState(false);
  const [driverName, setDriverName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [company, setCompany] = useState();
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
  const [hosts, setHosts] = useState();
  const [hostName, setHostName] = useState();
  const [host, setHost] = useState();
  const [selectedHost, setSelectedHost] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [availableHours, setAvailableHours] = useState();
  const [hostId, setHostId] = useState();
  const [hostWId, setHostWId] = useState();
  const [imageName, setImageName] = useState();
  const [imageData, setImageData] = useState();
  const [ineFrontName, setIneFrontName] = useState();
  const [ineFrontData, setIneFrontData] = useState();
  const [ineBackName, setIneBackName] = useState();
  const [ineBackData, setIneBackData] = useState();
  const [petitionName, setPetitionName] = useState();
  const [petitionData, setPetitionData] = useState();
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
      setHosts(hostsList);
      setHost(hostsList);
      setAccount(localStorage.getItem("account"));
    };
    if (!hosts) {
      fetchData();
    }
    console.log("conductor ", driverName);

    if (
      driverName &&
      email &&
      company &&
      phone &&
      line &&
      appointmentDate &&
      appointmentHour &&
      hostId &&
      // load &&
      // unload &&
      // warehouse &&
      vehiclePlate &&
      platformPlate &&
      petition &&
      packageNumber &&
      containerNumber &&
      tractNumber &&
      sealsNumber &&
      imageName &&
      ineFrontName &&
      ineBackName &&
      petitionName
      // availableHours
    ) {
      if (selectedHost) {
        idGenerate(selectedHost.warehouse.code).then((newId) => {
          setAppointmentData({
            id:newId,
            driverName: driverName,
            email: email,
            company: company,
            phone: phone,
            line: line,
            load: load,
            unload: unload,
            host: selectedHost,
            appointmentDate: appointmentDate,
            appointmentHour: appointmentHour,
            vehiclePlate: vehiclePlate,
            platformPlate: platformPlate,
            petition: petition,
            packageNumber: packageNumber,
            containerNumber: containerNumber,
            tractNumber: tractNumber,
            sealsNumber: sealsNumber,
            imageName: imageName,
            ineFrontName: ineFrontName,
            ineBackName: ineBackName,
            petitionName: petition,
          });
        });
      }
    }

    if (imageName && imageData) {
      let data = {
        fileName: imageName,
        file: imageData,
      };
      uploadImage(data).then((uploaded) => {
        if (uploaded) console.log(uploaded.key);
      });
    }
    if (ineFrontName && ineFrontData) {
      let data = {
        fileName: `${account}/${onNameFormat(driverName)}/${ineFrontName}`,
        file: ineFrontData,
      };
      uploadImage(data).then((uploaded) => {
        if (uploaded) console.log(uploaded.key);
      });
    }
    if (ineBackName && ineBackData) {
      let data = {
        fileName: `${account}/${onNameFormat(driverName)}/${ineBackName}`,
        file: ineBackData,
      };
      uploadImage(data).then((uploaded) => {
        if (uploaded) console.log(uploaded.key);
      });
    }
    if (petitionName && petitionData) {
      let data = {
        fileName: `${account}/${onNameFormat(driverName)}/${petitionName}`,
        file: petitionData,
      };
      uploadImage(data).then((uploaded) => {
        if (uploaded) console.log(uploaded.key);
      });
    }

    const onNameFormat = (name) => {
      return name.replaceAll(" ", "-");
    };
  }, [
    personAlready,
    driverName,
    email,
    company,
    phone,
    line,
    // load,
    // unload,
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
    imageName,
    imageData,
    ineFrontName,
    ineFrontData,
    ineBackName,
    ineBackData,
    petitionName,
    petitionData,
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
            <CCol xs="12" md="6">
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
            <CCol xs="12" md="6">
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
                    min={moment().format("YYYY-MM-DD")}
                    onChange={(e) => {
                      onDateSelect(e.target.value);
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
        </CCol>
        <CCol xs="12" md="12" className="fix-files-upload">
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
        </CCol>
      </CRow>
    </>
  );
};

export default CargoAppointment;
