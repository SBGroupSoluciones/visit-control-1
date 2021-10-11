import { createPrivateVehicle } from "src/graphql/mutations";
import { listPrivateVehicles, getAccount } from "src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const CreatePrivateVehicle = async (params) => {
  const { plate, color, brand, subBrand, model ,privateVehicleAccountId} = params;
  const vehicleData = {
    plate: plate,
    color: color,
    brand: brand,
    model: model,
    subBrand: subBrand,
    privateVehicleAccountId: privateVehicleAccountId,
  };

  try {
    const vehicle = await API.graphql({
      query: createPrivateVehicle,
      variables: { input: vehicleData },
    });
    return vehicle.data.createPrivateVehicle;
  } catch (e) {
    console.log(e);
  }
};

// export const ListAccount = async () => {
//   try {
//     const accounts = await API.graphql(graphqlOperation(listAccounts));
//     return accounts.data.listAccounts.items;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const GetAccount = async (email) => {
  try {
    const account = await API.graphql(
      graphqlOperation(getAccount, { email: email })
    );
    return account.data.getAccount;
  } catch (error) {}
};
