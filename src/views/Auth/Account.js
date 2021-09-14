import { createAccount } from "src/graphql/mutations";
import { listAccounts, getAccount } from "src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import awsconfig from "../../aws-exports";

Auth.configure(awsconfig);

export const accountCreate = async (params) => {
  const { firstName, lastName, email, phone, company, role } = params;
  const accountData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phones: phone,
    company: company,
    role: role,
  };

  try {
    const account = await API.graphql({
      query: createAccount,
      variables: { input: accountData },
    });
    return account.data.createAccount;
  } catch (e) {
    console.log(e);
  }
};

export const accountList = async () => {
  try {
    const accounts = await API.graphql(graphqlOperation(listAccounts));
    return accounts.data.listAccounts.items;
  } catch (e) {
    console.log(e);
  }
};

export const GetAccount = async (email) => {
  // const client = new AWSAppSyncClient({
  //   url: awsconfig.aws_appsync_graphqlEndpoint,
  //   region: awsconfig.aws_appsync_region,
  //   auth: {
  //     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  //     jwtToken: async () =>
  //       (await Auth.currentSession()).getIdToken().getJwtToken(),
  //   },
  // });

  try {
    const account = await API.graphql(
      graphqlOperation(getAccount, { email: email })
    );
    return account.data.getAccount;
  } catch (error) {
    console.log(error);
  }
};
