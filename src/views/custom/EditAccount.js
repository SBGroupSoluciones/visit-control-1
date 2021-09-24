import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CLabel,
  CContainer,
  CImg,
  CFormGroup,
  CInput,
  CForm,
  CInvalidFeedback,
  CSelect,
} from "@coreui/react";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidCompanyName,
  isValidPhoneNumber,
} from "../Auth/utils";
import QRCode from "react-qr-code";
import { accountUpdate } from "../Auth/Account";

const EditAccount = ({ match }) => {
  console.log("masdka ", match);
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
};
export default EditAccount;

//   const history = useHistory();
//   const location = useLocation();
//   const [color, setColor] = useState();
//   const [brand, setBrand] = useState();
//   const [subBran, setSubBrand] = useState();
//   const [model, setModel] = useState();
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();
//   const [company, setCompany] = useState();
//   const [phone, setPhone] = useState();
//   const [role, setRole] = useState();

//   const [firstNameValid, setFirstNameValid] = useState(false);

//   useEffect(() => {
//     if (match.data) {
//       const { firstName, lastName, email, company, phones, role } =
//         match.data;
//       setFirstName(firstName);
//       setLastName(lastName);
//       setEmail(email);
//       setCompany(company);
//       setPhone(phones);
//       setRole(role);
//     }
//   }, []);

//   const onUpdateData = () => {
//     const updatedData = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       company: company,
//       phones: phone,
//       role: role,
//     };

//     accountUpdate(updatedData)
//       .then((account) => {
//         history.push({
//           pathname: "/account/list",
//         });
//         console.log("Updated Account ", account);
//       })
//       .catch((e) => console.log("Error ", e));
//   };

//   const onCancel = () => {
//     history.push("/account/list");
//   };

//   return (
//     <>
//       <CRow>
//         <CCol md="6">
//           <CCard accentColor="success">
//             <CCardHeader>Editar cuenta</CCardHeader>
//             <CCardBody>
//               <CForm>
//                 <CRow>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="firstName" className="ln-top">
//                       Nombre
//                     </CLabel>
//                     <CInput
//                       type="text"
//                       autoComplete="firstName"
//                       value={firstName ? firstName : null}
//                       // value={firstName ? firstName : null}
//                       onChange={(e) => {
//                         setFirstName(e.target.value);
//                         // onFirstNameValidation(e.target.value);
//                       }}
//                       // valid={firstNameValid}
//                       // invalid={!firstNameValid && firstName}
//                     />
//                   </CCol>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="lastName" className="ln-top">
//                       Apellido
//                     </CLabel>
//                     <CInput
//                       type="text"
//                       autoComplete="lastName"
//                       value={lastName ? lastName : null}
//                       // onChange={(e) => {
//                       //   onLastNameValidation(e.target.value);
//                       // }}
//                       // valid={lastNameValid}
//                       // invalid={!lastNameValid && lastName}
//                     />
//                   </CCol>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="firstName" className="ln-top">
//                       Correo
//                     </CLabel>
//                     <CInput
//                       type="text"
//                       autoComplete="username"
//                       disabled={true}
//                       value={email ? email : null}
//                       // onChange={(e) => {
//                       //   onEmailValidation(e.target.value);
//                       // }}
//                       // valid={emailValid}
//                       // invalid={!emailValid && email}
//                     />
//                     <CInvalidFeedback>
//                       Introduzca una dirección de correo electrónico válida
//                     </CInvalidFeedback>
//                   </CCol>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="firstName" className="ln-top">
//                       Empresa
//                     </CLabel>
//                     <CInput
//                       type="text"
//                       autoComplete="company"
//                       value={company ? company : null}
//                       // onChange={(e) => {
//                       //   onCompanyValidation(e.target.value);
//                       // }}
//                       // valid={companyValid}
//                       // invalid={!companyValid && company}
//                     />
//                   </CCol>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="firstName" className="ln-top">
//                       Teléfono
//                     </CLabel>
//                     <CInput
//                       type="text"
//                       autoComplete="phone"
//                       value={phone ? phone[0] : null}
//                       // onChange={(e) => {
//                       //   onPhoneValidation(e.target.value);
//                       // }}
//                       // valid={phoneValid}
//                       // invalid={!phoneValid && phone}
//                     />
//                     <CInvalidFeedback>
//                       Introduzca un numero de telefono valido
//                     </CInvalidFeedback>
//                   </CCol>
//                   <CCol xs="12" md="12">
//                     <CLabel htmlFor="role" className="ln-top">
//                       Rol
//                     </CLabel>
//                     <CSelect
//                       custom
//                       name="select"
//                       id="role"
//                       value={role ? role : null}
//                       // value={role}
//                       // onChange={(e) => {
//                       //   setRole(e.target.value);
//                       // }}
//                     >
//                       <option value="USER">Usuario</option>
//                       <option value="HOST">Anfitrión</option>
//                       <option value="OPERATOR">Operador</option>
//                       <option value="ADMIN">Administrador</option>
//                       <option value="SUPER_ADMIN">Super Admin ✯</option>
//                     </CSelect>
//                   </CCol>
//                 </CRow>
//               </CForm>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="secondary" onClick={(e) => onCancel(e)}>
//                 Cancelar
//               </CButton>
//               <CButton color="primary" onClick={(e) => onUpdateData()}>
//                 Guardar
//               </CButton>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </>
//   );
// };
