import React from "react";
import CIcon from "@coreui/icons-react";

export const superAdminNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Tablero",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "Nuevo",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Super-Admin"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cuentas",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Cuenta",
        to: "/account",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Cuentas",
        to: "/account/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Recinto",
    route: "/warehouse",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Recinto",
        to: "/warehouse/create",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Recintos",
        to: "/warehouse/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Anfitrión",
    route: "/host",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Anfitrión",
        to: "/host/create",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Anfitriones",
        to: "/host/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Personas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Personas registradas",
        to: "/person/list",
      }
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Vehículos",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos de Carga",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos Personales",
        to: "/appointment",
      }
    ],
  }
];


export const adminNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Tablero",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Administrador"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Anfitrion",
    route: "/host",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/appointment",
    icon: "cil-calendar-plus",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cuentas",
    route: "/base",
    icon: "cil-calendar-plus",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Personas",
    route: "/base",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Recintos",
    route: "/warehouse",
    icon: "cil-building",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/warehouse/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/warehouse/list",
      },
    ],
  },

  {
    _tag: "CSidebarNavDivider",
  },
];

export const userNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Admin"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Personas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Personas registradas",
        to: "/person/list",
      }
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Vehículos",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos de Carga",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos Personales",
        to: "/appointment",
      }
    ],
  }
];

export const guestNav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Invitado"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment",
      },
    ],
  }
];
