import { createWarehouse } from "src/graphql/mutations";
import { listWarehouses, getWarehouse } from "src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Auth.configure(awsconfig);

export const warehouseCreate = async (params) => {
  const { name, address, phone } = params;
  const warehouseData = {
    name:name, 
    address:address, 
    phone: phone,
  };

  try {
    const warehouse = await API.graphql({
      query: createWarehouse,
      variables: { input: warehouseData },
    });
    return warehouse.data.createWarehouse;
  } catch (e) {
    console.log(e);
  }
};

// export const accountList = async () => {
//   try {
//     const accounts = await API.graphql(graphqlOperation(listAccounts));
//     return accounts.data.listAccounts.items;
//   } catch (e) {
//     console.log(e);
//   }
// };

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
