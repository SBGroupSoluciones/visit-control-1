import { createHost } from "src/graphql/mutations";
import { listHosts } from "src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import CreateHost from "./CreateHost";

Auth.configure(awsconfig);

export const hostCreate = async (params) => {
  const { hostNameId, warehouseId } = params;
  const hostData = {
    hostHostNameId:hostNameId, 
    hostWarehouseId:warehouseId, 
  };

  try {
    const hosts = await API.graphql({
      query: createHost,
      variables: { input: hostData },
    });
    return hosts.data.createHost;
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
