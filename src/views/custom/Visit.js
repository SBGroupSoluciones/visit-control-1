import {
  createVisit,
  createPerson,
  createCargoVehicle,
} from "src/graphql/mutations";
import { listHosts } from "src/graphql/queries";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import CreateHost from "./CreateHost";

Auth.configure(awsconfig);

export const visitCreate = async (params) => {
  const {
    type,
    firstName,
    lastName,
    email,
    company,
    reason,
    phone,
    host,
    cDate,
  } = params;

  if (type == "PERSON") {
    const personData = {
      company: company,
      email: email,
      firstName: firstName,
      lastName: lastName,
      personAccountId: localStorage.getItem("account"),
      phone: phone,
      timestamp: new Date(),
    };
    const personID = await personVisit(personData);

    const visitData = {
      checkInTimestamp: cDate,
      checkOutTimestamp: cDate,
      dateTimestamp: cDate,
      operApprove: false,
      adminApprove: false,
      status: "SCHEDULED",
      type: type,
      visitAccountId: localStorage.getItem("account"),
      visitHostId: host,
      visitPersonId: personID,
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
