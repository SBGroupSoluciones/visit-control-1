/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      firstName
      lastName
      imgUrl
      company
      email
      phones
      createdAt
      updatedAt
      owner
      visit {
        items {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      persons {
        items {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      privateVehicles {
        items {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      cargoVehicles {
        items {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      enclosure {
        id
        name
        address
        phone
        lat
        lon
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      role {
        id
        roleName
        description
        admin
        user
        guest
        host
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getVisit = /* GraphQL */ `
  query GetVisit($id: ID!) {
    getVisit(id: $id) {
      id
      dateTimestamp
      checkInTimestamp
      checkOutTimestamp
      reason
      status
      qrUrl
      timestamp
      adminApprove
      operApprove
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      owner
      person {
        id
        firstName
        lastName
        email
        imgUrl
        phone
        company
        idFrontPath
        idBackPath
        timestamp
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        site {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      privateVehicle {
        id
        color
        brand
        subBrand
        model
        timestamp
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      cargoVehicle {
        id
        line
        platformPlate
        petition
        packs
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        petitionPath
        timestamp
        driverNAme
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      enclosure {
        id
        name
        address
        phone
        lat
        lon
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const listVisits = /* GraphQL */ `
  query ListVisits(
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qrUrl
        timestamp
        adminApprove
        operApprove
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
        person {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      firstName
      lastName
      email
      imgUrl
      phone
      company
      idFrontPath
      idBackPath
      timestamp
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      site {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qrUrl
        timestamp
        adminApprove
        operApprove
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
        person {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        imgUrl
        phone
        company
        idFrontPath
        idBackPath
        timestamp
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        site {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getPrivateVehicle = /* GraphQL */ `
  query GetPrivateVehicle($id: ID!) {
    getPrivateVehicle(id: $id) {
      id
      color
      brand
      subBrand
      model
      timestamp
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      visit {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qrUrl
        timestamp
        adminApprove
        operApprove
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
        person {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listPrivateVehicles = /* GraphQL */ `
  query ListPrivateVehicles(
    $filter: ModelPrivateVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        color
        brand
        subBrand
        model
        timestamp
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getCargoVehicle = /* GraphQL */ `
  query GetCargoVehicle($id: ID!) {
    getCargoVehicle(id: $id) {
      id
      line
      platformPlate
      petition
      packs
      containerNumber
      tractNumber
      load
      unload
      sealsNumber
      additionalDoc
      additionalDocPath
      petitionPath
      timestamp
      driverNAme
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      visit {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qrUrl
        timestamp
        adminApprove
        operApprove
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
        person {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listCargoVehicles = /* GraphQL */ `
  query ListCargoVehicles(
    $filter: ModelCargoVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCargoVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        line
        platformPlate
        petition
        packs
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        petitionPath
        timestamp
        driverNAme
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getEnclosure = /* GraphQL */ `
  query GetEnclosure($id: ID!) {
    getEnclosure(id: $id) {
      id
      name
      address
      phone
      lat
      lon
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      visit {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qrUrl
        timestamp
        adminApprove
        operApprove
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
        person {
          id
          firstName
          lastName
          email
          imgUrl
          phone
          company
          idFrontPath
          idBackPath
          timestamp
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          color
          brand
          subBrand
          model
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          platformPlate
          petition
          packs
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petitionPath
          timestamp
          driverNAme
          createdAt
          updatedAt
          owner
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listEnclosures = /* GraphQL */ `
  query ListEnclosures(
    $filter: ModelEnclosureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnclosures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        lat
        lon
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qrUrl
          timestamp
          adminApprove
          operApprove
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      roleName
      description
      admin
      user
      guest
      host
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        phones
        createdAt
        updatedAt
        owner
        visit {
          nextToken
        }
        persons {
          nextToken
        }
        privateVehicles {
          nextToken
        }
        cargoVehicles {
          nextToken
        }
        enclosure {
          id
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        role {
          id
          roleName
          description
          admin
          user
          guest
          host
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roleName
        description
        admin
        user
        guest
        host
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          phones
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
