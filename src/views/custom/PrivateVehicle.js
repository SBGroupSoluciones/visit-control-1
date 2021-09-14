import { createPrivateVehicle } from "src/graphql/mutations";
import { listPrivateVehicles, getAccount } from "src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export const CreatePrivateVehicle = async (params) => {
  const { firstName, lastName, email, phone, company } = params;
  const accountData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phones: phone,
    company: company,
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

export const ListAccount = async () => {
  try {
    const accounts = await API.graphql(graphqlOperation(listAccounts));
    return accounts.data.listAccounts.items;
  } catch (e) {
    console.log(e);
  }
};

export const GetAccount = async (email) => {
  try {
    const account = await API.graphql(
      graphqlOperation(getAccount, { email: email })
    );
    return account.data.getAccount;
  } catch (error) {}
};
