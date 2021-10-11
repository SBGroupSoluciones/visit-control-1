import { createAccount, updateAccount } from "src/graphql/mutations";
import { listAccounts, getAccount, accountsByRole } from "src/graphql/queries";
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
  try {
    const account = await API.graphql(
      graphqlOperation(getAccount, { email: email })
    );
    return account.data.getAccount;
  } catch (error) {
    console.log(error);
  }
};

export const getAccountByRole = async (role) => {
  try {
    const account = await API.graphql(
      graphqlOperation(accountsByRole, { role: role })
    );
    return account.data.accountsByRole;
  } catch (error) {
    console.log(error);
  }
};

export const accountUpdate = async (params) => {
  const { firstName, lastName, email, phones, company, role } = params;
  const accountData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phones: phones,
    company: company,
    role: role,
  };

  try {
    const account = await API.graphql({
      query: updateAccount,
      variables: { input: accountData },
    });
    console.log("la cuenta se edito ", account);
    return account.data;
  } catch (e) {
    console.log(e);
  }
};
