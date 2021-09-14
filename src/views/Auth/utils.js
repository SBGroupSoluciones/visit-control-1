const FIRST_NAME_REGEX =
  /^(([A-Za-zñ]+[\-\']?)*([A-Za-zñ]+)\s?)+([A-Za-zñ]+[\-\']?)*([A-Za-zñ]+)?/;
const LAST_NAME_REGEX =
  /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)\s?)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const COMPANY_NAME_REGEX = /^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$/;
const PHONE_NUMBER_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const VERIFICATION_CODE = /^[0-9][0-9][0-9][0-9][0-9][0-9]$/;

export const isValidText = (text) =>{
  let result = false;
  if (FIRST_NAME_REGEX.test(text)) {
    result = true;
  }
  return result;
}


export const isValidFirstName = (firstName) => {
  let result = false;
  if (FIRST_NAME_REGEX.test(firstName)) {
    result = true;
  }
  return result;
};

export const isValidLastName = (lastName) => {
  let result = false;
  if (LAST_NAME_REGEX.test(lastName)) {
    result = true;
  }
  return result;
};

export const isValidEmail = (email) => {
  let result = false;
  if (EMAIL_REGEX.test(email)) {
    result = true;
  }
  return result;
};

export const isValidPassword = (password) => {
  let result = false;
  if (PASS_REGEX.test(password)) {
    result = true;
  }
  return result;
};

export const isValidCompanyName = (company) => {
  let result = false;
  if (COMPANY_NAME_REGEX.test(company)) {
    result = true;
  }
  return result;
};

export const isValidPhoneNumber = (phone) => {
  let result = false;
  if (PHONE_NUMBER_REGEX.test(phone)) {
    result = true;
  }
  return result;
};

export const isValidVerificationCode = (code) => {
  let result = false;
  if (VERIFICATION_CODE.test(code)) {
    result = true;
  }
  return result;
};