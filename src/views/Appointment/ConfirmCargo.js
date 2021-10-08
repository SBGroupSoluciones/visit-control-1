import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CLabel,
  CContainer,
  CImg,
} from "@coreui/react";
import QRCode from "react-qr-code";
import { jwtEncode } from "src/util/Utils";
import { visitCreate } from "../../util/Visit";
import moment from "moment";
import "moment/locale/es";
import { cargoCreate } from "src/util/Cargo";
import { S3Image } from "aws-amplify-react";

moment.locale("es");

const ConfirmCargo = (props) => {
  const { show, setCargoConfirm, appointmentData } = props;
  const history = useHistory();
  const [appointmentConfirmData, setAppointmentConfirmData] = useState();
  const [qrJson, setQrJson] = useState();

  useEffect(() => {
    if (appointmentData) {
      const {
        driverName,
        email,
        company,
        phone,
        line,
        load,
        unload,
        host,
        appointmentDate,
        appointmentHour,
        vehiclePlate,
        platformPlate,
        petition,
        packageNumber,
        containerNumber,
        tractNumber,
        sealsNumber,
        imageName,
        ineFrontName,
        ineBackName,
        petitionName,
      } = appointmentData;

      setAppointmentConfirmData({
        type: "CARGO",
        driverName: driverName,
        email: email,
        company: company,
        phone: phone,
        line: line,
        load: load,
        unload: unload,
        host: host,
        appointmentDate: appointmentDate,
        appointmentHour: appointmentHour,
        cDate: `${appointmentDate}T${appointmentHour}`,
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
        petitionName: petitionName,
      });
      setQrJson(
        jwtEncode({
          account: localStorage.getItem("account"),
          email: appointmentData.email,
          // host: appointmentData.host,
          date: appointmentData.cDate,
        })
      );
    }
  }, [appointmentData, show]);

  const onEditButton = (e) => {
    setCargoConfirm(!show);
  };

  const onConfirmData = () => {
    const vehicleData = {
      cargo: {
        driverName: appointmentConfirmData.driverName,
        petition: appointmentConfirmData.petition,
        cargoVehicleAccountId: localStorage.getItem("account"),
        company: appointmentConfirmData.company,
        containerNumber: appointmentConfirmData.containerNumber,
        email: appointmentConfirmData.email,
        idBackPath: appointmentConfirmData.ineBackName,
        idFrontPath: appointmentConfirmData.ineFrontName,
        imgUrl: appointmentConfirmData.imageName,
        line: appointmentConfirmData.line,
        load: appointmentConfirmData.load,
        packageNumber: appointmentConfirmData.packageNumber,
        petitionPath: appointmentConfirmData.petitionName,
        phone: appointmentConfirmData.phone,
        platformPlate: appointmentConfirmData.platformPlate,
        sealsNumber: appointmentConfirmData.sealsNumber,
        tractNumber: appointmentConfirmData.tractNumber,
        unload: appointmentConfirmData.unload,
        vehiclePlate: appointmentConfirmData.vehiclePlate,
      },
    };
    cargoCreate(vehicleData).then((createdVehicle) => {
      console.log("Se creo el cargo ", createdVehicle);
      const visit = {
        dateTimestamp: appointmentConfirmData.cDate,
        status: "SCHEDULED",
        qr: qrJson,
        timestamp: "",
        adminApprove: false,
        operApprove: false,
        type: "CARGO",
        visitHostId: appointmentConfirmData.host.id,
        visitAccountId: localStorage.getItem("account"),
        visitCargoVehicleId: createdVehicle.id,
      };

      console.log("VISITA A CREAR ", visit);
      visitCreate(visit).then((visitCreated) => {
        console.log("VISiTA CREADA", visitCreated);
        history.push("/appointment/list");
      });
    });
  };

  return (
    <CModal color="success" show={show} size="lg">
      <CModalHeader closeButton>
        <p className="h4">Confirmar cita</p>
      </CModalHeader>
      {appointmentConfirmData ? (
        <CModalBody>
          <CRow>
            <CCol xs="12" md="6">
              <CContainer>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Fecha y Hora</strong>
                    </CLabel>
                    <p className="h5">
                      {`${appointmentConfirmData.appointmentDate} ${appointmentConfirmData.appointmentHour}`}
                    </p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Nombre</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.driverName}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Correo</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.email}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Empresa</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.company}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Teléfono</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.phone}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Placa del Vehiculo</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.vehiclePlate}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Placa de la Plataforma</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.platformPlate}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Pedimento</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.petition}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Numero de Paquetes</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.packageNumber}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Numero de Contenedor</strong>
                    </CLabel>
                    <p className="h5">
                      {appointmentConfirmData.containerNumber}
                    </p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Numero de Tracto</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.tractNumber}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Numero de Sellos</strong>
                    </CLabel>
                    <p className="h5">{appointmentConfirmData.sealsNumber}</p>
                  </CCol>
                </CRow>
                {appointmentConfirmData.host ? (
                  <div>
                    <CRow>
                      <CCol xs="12" md="12">
                        <CLabel htmlFor="firstName">
                          <strong>Recinto</strong>
                        </CLabel>
                        <p className="h5">
                          {appointmentConfirmData.host.warehouse.name}
                        </p>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12" md="12">
                        <CLabel htmlFor="firstName">
                          <strong>Anfitrión</strong>
                        </CLabel>
                        <p className="h5">{`${appointmentConfirmData.host.hostName.firstName} ${appointmentConfirmData.host.hostName.lastName}`}</p>
                      </CCol>
                    </CRow>
                  </div>
                ) : null}
              </CContainer>
            </CCol>
            <CCol xs="12" md="6">
              <CContainer>
                <CRow>
                  {/* <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>QR</strong>
                    </CLabel>
                    <p className="h5">
                      <QRCode
                        value={JSON.stringify("CARGO")}
                        level="L"
                        fgColor="#212121"
                        size="128"
                      />
                    </p>
                  </CCol> */}
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>Imagen</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointmentConfirmData.imageUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>INE Frente</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointmentConfirmData.imageUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>INE Atras</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointmentConfirmData.imageUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>INE Atras</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointmentConfirmData.imageUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                </CRow>
              </CContainer>
            </CCol>
          </CRow>
        </CModalBody>
      ) : null}

      <CModalFooter>
        <CButton color="secondary" onClick={(e) => onEditButton(e)}>
          Editar
        </CButton>
        <CButton color="success" onClick={(e) => onConfirmData(e)}>
          Confirmar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmCargo;
