import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const GuestHeader = () => {
  const history = useHistory();

  const onNewAccout = () => {
    history.push("/signup");
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar avatar-name">Invitado</div>
        <div className="c-avatar">
          <CImg
            src={"avatars/user-profile-default.jpg"} 
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Cuenta</strong>
        </CDropdownItem>
        <CDropdownItem onClick={(e) => onNewAccout()}>
          <CIcon name="cil-user" className="mfe-2" />
          Crear cuenta
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default GuestHeader;
