/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($email: String!) {
    getAccount(email: $email) {
      id
      firstName
      lastName
      imgUrl
      company
      email
      role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      privateVehicles {
        items {
          id
          plate
          color
          brand
          subBrand
          model
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
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      host {
        id
        createdAt
        updatedAt
        hostName {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          nextToken
        }
        warehouse {
          id
          code
          name
          address
          phone
          admin
          oper
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
        calendar {
          nextToken
        }
      }
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $email: String
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const accountsByRole = /* GraphQL */ `
  query AccountsByRole(
    $role: String
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByRole(
      role: $role
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
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
      qr
      timestamp
      adminApprove
      operApprove
      adminInProgress
      operInProgress
      adminFinished
      operFinished
      adminInTimestamp
      operInTimestamp
      adminOutTimestamp
      operOutTimestamp
      type
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
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
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
          createdAt
          updatedAt
          owner
        }
        owner
      }
      privateVehicle {
        id
        plate
        color
        brand
        subBrand
        model
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
          createdAt
          updatedAt
          owner
        }
        owner
      }
      cargoVehicle {
        id
        line
        vehiclePlate
        platformPlate
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        packageNumber
        petition
        petitionPath
        timestamp
        driverName
        email
        company
        reason
        phone
        imgUrl
        idFrontPath
        idBackPath
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
          createdAt
          updatedAt
          owner
        }
        owner
      }
      host {
        id
        createdAt
        updatedAt
        hostName {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          nextToken
        }
        warehouse {
          id
          code
          name
          address
          phone
          admin
          oper
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
        calendar {
          nextToken
        }
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
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const visitByStatus = /* GraphQL */ `
  query VisitByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const visitByType = /* GraphQL */ `
  query VisitByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelVisitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visitByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dateTimestamp
        checkInTimestamp
        checkOutTimestamp
        reason
        status
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
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
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
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
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
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
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
      plate
      color
      brand
      subBrand
      model
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
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
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
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
    $id: ID
    $filter: ModelPrivateVehicleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPrivateVehicles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        plate
        color
        brand
        subBrand
        model
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
export const privateVehicleByPlate = /* GraphQL */ `
  query PrivateVehicleByPlate(
    $plate: String
    $sortDirection: ModelSortDirection
    $filter: ModelPrivateVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    privateVehicleByPlate(
      plate: $plate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        plate
        color
        brand
        subBrand
        model
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
      vehiclePlate
      platformPlate
      containerNumber
      tractNumber
      load
      unload
      sealsNumber
      additionalDoc
      additionalDocPath
      packageNumber
      petition
      petitionPath
      timestamp
      driverName
      email
      company
      reason
      phone
      imgUrl
      idFrontPath
      idBackPath
      createdAt
      updatedAt
      account {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
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
        qr
        timestamp
        adminApprove
        operApprove
        adminInProgress
        operInProgress
        adminFinished
        operFinished
        adminInTimestamp
        operInTimestamp
        adminOutTimestamp
        operOutTimestamp
        type
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          createdAt
          updatedAt
          owner
        }
        privateVehicle {
          id
          plate
          color
          brand
          subBrand
          model
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          vehiclePlate
          platformPlate
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          packageNumber
          petition
          petitionPath
          timestamp
          driverName
          email
          company
          reason
          phone
          imgUrl
          idFrontPath
          idBackPath
          createdAt
          updatedAt
          owner
        }
        host {
          id
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
    $id: ID
    $filter: ModelCargoVehicleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCargoVehicles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        line
        vehiclePlate
        platformPlate
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        packageNumber
        petition
        petitionPath
        timestamp
        driverName
        email
        company
        reason
        phone
        imgUrl
        idFrontPath
        idBackPath
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
export const cargoVehicleByPetition = /* GraphQL */ `
  query CargoVehicleByPetition(
    $petition: String
    $sortDirection: ModelSortDirection
    $filter: ModelCargoVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cargoVehicleByPetition(
      petition: $petition
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        line
        vehiclePlate
        platformPlate
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        packageNumber
        petition
        petitionPath
        timestamp
        driverName
        email
        company
        reason
        phone
        imgUrl
        idFrontPath
        idBackPath
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
export const cargoVehicleByDirverName = /* GraphQL */ `
  query CargoVehicleByDirverName(
    $driverName: String
    $sortDirection: ModelSortDirection
    $filter: ModelCargoVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cargoVehicleByDirverName(
      driverName: $driverName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        line
        vehiclePlate
        platformPlate
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        packageNumber
        petition
        petitionPath
        timestamp
        driverName
        email
        company
        reason
        phone
        imgUrl
        idFrontPath
        idBackPath
        createdAt
        updatedAt
        account {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
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
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
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
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($code: String!) {
    getWarehouse(code: $code) {
      id
      code
      name
      address
      phone
      admin
      oper
      lat
      lon
      createdAt
      updatedAt
      owner
      host {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $code: String
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWarehouses(
      code: $code
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        code
        name
        address
        phone
        admin
        oper
        lat
        lon
        createdAt
        updatedAt
        owner
        host {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getHost = /* GraphQL */ `
  query GetHost($id: ID!) {
    getHost(id: $id) {
      id
      createdAt
      updatedAt
      hostName {
        id
        firstName
        lastName
        imgUrl
        company
        email
        role
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
        host {
          id
          createdAt
          updatedAt
          owner
        }
      }
      visit {
        items {
          id
          dateTimestamp
          checkInTimestamp
          checkOutTimestamp
          reason
          status
          qr
          timestamp
          adminApprove
          operApprove
          adminInProgress
          operInProgress
          adminFinished
          operFinished
          adminInTimestamp
          operInTimestamp
          adminOutTimestamp
          operOutTimestamp
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      warehouse {
        id
        code
        name
        address
        phone
        admin
        oper
        lat
        lon
        createdAt
        updatedAt
        owner
        host {
          nextToken
        }
      }
      owner
      calendar {
        items {
          id
          date
          hours
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listHosts = /* GraphQL */ `
  query ListHosts(
    $filter: ModelHostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        hostName {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          nextToken
        }
        warehouse {
          id
          code
          name
          address
          phone
          admin
          oper
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
        calendar {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCalendar = /* GraphQL */ `
  query GetCalendar($date: String!) {
    getCalendar(date: $date) {
      id
      date
      hours
      createdAt
      updatedAt
      host {
        id
        createdAt
        updatedAt
        hostName {
          id
          firstName
          lastName
          imgUrl
          company
          email
          role
          phones
          createdAt
          updatedAt
          owner
        }
        visit {
          nextToken
        }
        warehouse {
          id
          code
          name
          address
          phone
          admin
          oper
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
        calendar {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listCalendars = /* GraphQL */ `
  query ListCalendars(
    $date: String
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCalendars(
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        date
        hours
        createdAt
        updatedAt
        host {
          id
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
