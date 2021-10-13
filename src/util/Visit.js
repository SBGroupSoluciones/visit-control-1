import {
  createVisit,
  createPerson,
  createCargoVehicle,
  updateVisit,
} from "src/graphql/mutations";
import { listHosts, listVisits, getVisit } from "src/graphql/queries";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import awsconfig from "../aws-exports";
import { idGenerate } from "./IdUtils";
import { accountUpdate } from "src/views/Auth/Account";

Auth.configure(awsconfig);

export const visitCreate = async (params) => {
  const {
    id,
    reason,
    dateTimestamp,
    status,
    qr,
    timestamp,
    adminApprove,
    operApprove,
    type,
    visitHostId,
    visitAccountId,
    visitPersonId,
    visitPrivateVehicleId,
    visitCargoVehicleId,
  } = params;

  if (type == "PERSON") {
    const visitData = {
      id: id,
      qr: qr,
      reason: reason,
      dateTimestamp: dateTimestamp,
      status: status,
      timestamp: timestamp,
      adminApprove: adminApprove,
      operApprove: operApprove,
      type: type,
      visitHostId: visitHostId,
      visitAccountId: visitAccountId,
      visitPersonId: visitPersonId,
      visitPrivateVehicleId: visitPrivateVehicleId,
    };

    try {
      console.log("ANTES DE CREAR LA VISITA ", visitData);
      const visit = await API.graphql({
        query: createVisit,
        variables: { input: visitData },
      });
      return visit.data.createVisit;
    } catch (e) {
      console.log(e);
    }
  }
  if (type == "CARGO") {
    const visitData = {
      id: id,
      qr: qr,
      reason: reason,
      dateTimestamp: dateTimestamp,
      status: status,
      timestamp: timestamp,
      adminApprove: adminApprove,
      operApprove: operApprove,
      type: type,
      visitHostId: visitHostId,
      visitAccountId: visitAccountId,
      visitCargoVehicleId: visitCargoVehicleId,
    };

    try {
      const visit = await API.graphql({
        query: createVisit,
        variables: { input: visitData },
      });
      return visit.data.createVisit;
    } catch (e) {
      console.log(e);
    }
  }
};

const personVisit = async (personData) => {
  try {
    const person = await API.graphql({
      query: createPerson,
      variables: { input: personData },
    });
    return person.data.createPerson.id;
  } catch (e) {
    console.log(e);
  }
};

export const visitList = async () => {
  try {
    const visits = await API.graphql(graphqlOperation(listVisits));
    // console.log("#LAS VISITAS ", visits);
    return visits.data.listVisits.items;
  } catch (e) {
    // console.log("Error al obtener visitas ", e);
    if (e.data) {
      return e.data.listVisits.items;
    }
  }
};

export const hostList = async () => {
  try {
    const hosts = await API.graphql(graphqlOperation(listHosts));
    return hosts.data.listHosts.items;
  } catch (e) {
    console.log(e);
  }
};

export const uploadImage = async (data) => {
  // Storage.put(data.fileName, data.file, {
  //   progressCallback(progress) {
  //     console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
  //   },
  // });
  try {
    const file = await Storage.put(data.fileName, data.file);
    console.log("SE SUBIO ", file);
  } catch (error) {
    console.log("elerror ", error);
  }
};

export const GetVisit = async (id) => {
  try {
    const visit = await API.graphql(graphqlOperation(getVisit, { id: id }));
    return visit.data.getVisit;
  } catch (error) {
    console.log(error);
  }
};

export const visitUpdate = async (visit) => {
  console.log("la visita que llego a ser ", visit);

  if (visit) {
    if (visit.type == "CARGO") {
      const {
        id,
        dateTimestamp,
        checkInTimestamp,
        checkOutTimestamp,
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
      } = visit;
      const cargoData = {
        id: id,
        dateTimestamp: dateTimestamp,
        checkInTimestamp: checkInTimestamp,
        checkOutTimestamp: checkOutTimestamp,
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
      };

      try {
        const visit = await API.graphql({
          query: updateVisit,
          variables: { input: cargoData },
        });
        console.log("la visita se edito ", visit);
        return visit.data;
      } catch (e) {
        console.log("Error actualizar visita ", e);
      }
    }
    if (visit.type == "PERSON") {
      const {
        id,
        dateTimestamp,
        checkInTimestamp,
        checkOutTimestamp,
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
        hostName,
        hostWarehouse,
        firstName,
        lastName,
        email,
        phone,
        company,
      } = visit;

      const personData = {
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
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        company: company,
      };

      try {
        const visit = await API.graphql({
          query: updateVisit,
          variables: { input: personData },
        });
        console.log("la visita se edito ", visit);
        return visit.data;
      } catch (e) {
        console.log("Error actualizar visita ", e);
      }
    }
  }

  // try {
  //   const visit = await API.graphql({
  //     query: updateVisit,
  //     variables: { input: newData },
  //   });
  //   console.log("la visita se edito ", visit);
  //   return visit.data;
  // } catch (e) {
  //   console.log("Error actualizar visita ", e);
  // }
};
