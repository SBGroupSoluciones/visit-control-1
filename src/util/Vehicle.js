import { createPrivateVehicle } from "src/graphql/mutations";
import { getPrivateVehicle, listPrivateVehicles } from "src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Auth.configure(awsconfig);

export const vehicleCreate = async (params) => {
  const { brand, color, model, plate, account,  subBrand } = params;

  const vehicleData = {
    brand: brand,
    color: color,
    model: model,
    plate: plate,
    privateVehicleAccountId: account,
    subBrand: subBrand,
  };

  try {
    const vehicle = await API.graphql({
      query: createPrivateVehicle,
      variables: { input: vehicleData },
    });
    return vehicle.data.createVehicle;
  } catch (e) {
    console.log(e);
  }
};

export const vehiclesList = async () => {
  try {
    const vehicles = await API.graphql(graphqlOperation(listPrivateVehicles));
    return vehicles.data.listPrivateVehicles.items;
  } catch (e) {
    console.log(e);
  }
};

export const getVehicle = async (plate) => {
  try {
    const vehicle = await API.graphql(
      graphqlOperation(getPrivateVehicle, { plate: plate })
    );
    return vehicle.data.getPrivateVehicle;
  } catch (error) {
    console.log(error);
  }
};
