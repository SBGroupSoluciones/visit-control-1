import { createHost } from "src/graphql/mutations";
import { listHosts, getHost } from "src/graphql/queries";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import awsconfig from "../../aws-exports";
import CreateHost from "../Host/CreateHost";
Auth.configure(awsconfig);

export const hostCreate = async (params) => {
  const { hostNameId, warehouseId } = params;
  const hostData = {
    hostHostNameId: hostNameId,
    hostWarehouseId: warehouseId,
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

export const uploadImage = async (data) => {
  try {
    const file = await Storage.put(data.fileName, data.file, {
      level: "public",
      contentType: "image/png",
    });
    return file;
  } catch (error) {}
};

export const getImage = async (name) => {
  try {
    // const s3Image = await Storage.get(name);

    const s3Image = await Storage.get(name, { level: "public" });
    // Storage.get(name, { level: 'public' })
    //   .then ( (result) => {S
    //     console.log("La imagen", result);
    //     return result
    //   })
    //   .catch( (err) => {
    //     console.log(err);
    //   });

    return s3Image;
  } catch (error) {
    console.log("elerror ", error);
  }
};
export const GetHost = async (id) => {
  try {
    const host = await API.graphql(graphqlOperation(getHost, { id: id }));
    return host.data.getHost;
  } catch (error) {
    console.log(error);
  }
};
