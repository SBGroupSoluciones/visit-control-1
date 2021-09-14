/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          plate
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
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          plate
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
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const updateVisit = /* GraphQL */ `
  mutation UpdateVisit(
    $input: UpdateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    updateVisit(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        petition
        petitionPath
        timestamp
        driverName
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const deleteVisit = /* GraphQL */ `
  mutation DeleteVisit(
    $input: DeleteVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    deleteVisit(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        petition
        petitionPath
        timestamp
        driverName
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const updatePrivateVehicle = /* GraphQL */ `
  mutation UpdatePrivateVehicle(
    $input: UpdatePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    updatePrivateVehicle(input: $input, condition: $condition) {
      id
      plate
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const deletePrivateVehicle = /* GraphQL */ `
  mutation DeletePrivateVehicle(
    $input: DeletePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    deletePrivateVehicle(input: $input, condition: $condition) {
      id
      plate
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const updateCargoVehicle = /* GraphQL */ `
  mutation UpdateCargoVehicle(
    $input: UpdateCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    updateCargoVehicle(input: $input, condition: $condition) {
      id
      line
      containerNumber
      tractNumber
      load
      unload
      sealsNumber
      additionalDoc
      additionalDocPath
      petition
      petitionPath
      timestamp
      driverName
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const deleteCargoVehicle = /* GraphQL */ `
  mutation DeleteCargoVehicle(
    $input: DeleteCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    deleteCargoVehicle(input: $input, condition: $condition) {
      id
      line
      containerNumber
      tractNumber
      load
      unload
      sealsNumber
      additionalDoc
      additionalDocPath
      petition
      petitionPath
      timestamp
      driverName
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      id
      name
      address
      phone
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
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      id
      name
      address
      phone
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
export const updateHost = /* GraphQL */ `
  mutation UpdateHost(
    $input: UpdateHostInput!
    $condition: ModelHostConditionInput
  ) {
    updateHost(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      warehouse {
        id
        name
        address
        phone
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
    }
  }
`;
export const deleteHost = /* GraphQL */ `
  mutation DeleteHost(
    $input: DeleteHostInput!
    $condition: ModelHostConditionInput
  ) {
    deleteHost(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      warehouse {
        id
        name
        address
        phone
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
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          plate
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
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const createVisit = /* GraphQL */ `
  mutation CreateVisit(
    $input: CreateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    createVisit(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
        containerNumber
        tractNumber
        load
        unload
        sealsNumber
        additionalDoc
        additionalDocPath
        petition
        petitionPath
        timestamp
        driverName
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
          qrUrl
          timestamp
          adminApprove
          operApprove
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
          name
          address
          phone
          lat
          lon
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const createPrivateVehicle = /* GraphQL */ `
  mutation CreatePrivateVehicle(
    $input: CreatePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    createPrivateVehicle(input: $input, condition: $condition) {
      id
      plate
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const createCargoVehicle = /* GraphQL */ `
  mutation CreateCargoVehicle(
    $input: CreateCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    createCargoVehicle(input: $input, condition: $condition) {
      id
      line
      containerNumber
      tractNumber
      load
      unload
      sealsNumber
      additionalDoc
      additionalDocPath
      petition
      petitionPath
      timestamp
      driverName
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
        qrUrl
        timestamp
        adminApprove
        operApprove
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
          timestamp
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
          timestamp
          createdAt
          updatedAt
          owner
        }
        cargoVehicle {
          id
          line
          containerNumber
          tractNumber
          load
          unload
          sealsNumber
          additionalDoc
          additionalDocPath
          petition
          petitionPath
          timestamp
          driverName
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
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      id
      name
      address
      phone
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
export const createHost = /* GraphQL */ `
  mutation CreateHost(
    $input: CreateHostInput!
    $condition: ModelHostConditionInput
  ) {
    createHost(input: $input, condition: $condition) {
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
          qrUrl
          timestamp
          adminApprove
          operApprove
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      warehouse {
        id
        name
        address
        phone
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
    }
  }
`;
