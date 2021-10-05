import { createCargoVehicle } from "src/graphql/mutations";
import { listHosts, getHost } from "src/graphql/queries";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import awsconfig from "../aws-exports";
Auth.configure(awsconfig);

export const cargoCreate = async (params) => {
  const { cargo } = params;
  try {
    const newCargo = await API.graphql({
      query: createCargoVehicle,
      variables: { input: cargo },
    });
    return newCargo.data.createCargoVehicle;
  } catch (e) {
    console.log(e);
  }
};

// export const hostList = async () => {
//   try {
//     const hosts = await API.graphql(graphqlOperation(listHosts));
//     return hosts.data.listHosts.items;
//   } catch (e) {
//     console.log(e);
//   }
// };


// export const GetHost = async (id) => {
//   try {
//     const host = await API.graphql(graphqlOperation(getHost, { id: id }));
//     return host.data.getHost;
//   } catch (error) {
//     console.log(error);
//   }
// };
