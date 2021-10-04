import {
  createVisit,
  createPerson,
  createCargoVehicle,
} from "src/graphql/mutations";
import { listHosts, listVisits } from "src/graphql/queries";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import CreateHost from "../Host/CreateHost";

Auth.configure(awsconfig);

export const visitCreate = async (params) => {
  const {
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
  } = params;

  if (type == "PERSON") {
    const visitData = {
      reason: reason,
      dateTimestamp: dateTimestamp,
      status: status,
      qr: qr,
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
    console.log("#LAS VISITAS ", visits);
    return visits.data.listVisits.items;
  } catch (e) {
    console.log("Error al obtener visitas ", e);

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

// export const GetAccount = async (email) => {

//   try {
//     const account = await API.graphql(
//       graphqlOperation(getAccount, { email: email })
//     );
//     return account.data.getAccount;
//   } catch (error) {
//     console.log(error);
//   }
// };
