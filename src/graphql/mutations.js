/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createPrivateVehicle = /* GraphQL */ `
  mutation CreatePrivateVehicle(
    $input: CreatePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    createPrivateVehicle(input: $input, condition: $condition) {
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
export const updatePrivateVehicle = /* GraphQL */ `
  mutation UpdatePrivateVehicle(
    $input: UpdatePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    updatePrivateVehicle(input: $input, condition: $condition) {
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
export const deletePrivateVehicle = /* GraphQL */ `
  mutation DeletePrivateVehicle(
    $input: DeletePrivateVehicleInput!
    $condition: ModelPrivateVehicleConditionInput
  ) {
    deletePrivateVehicle(input: $input, condition: $condition) {
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
export const createCargoVehicle = /* GraphQL */ `
  mutation CreateCargoVehicle(
    $input: CreateCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    createCargoVehicle(input: $input, condition: $condition) {
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
export const updateCargoVehicle = /* GraphQL */ `
  mutation UpdateCargoVehicle(
    $input: UpdateCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    updateCargoVehicle(input: $input, condition: $condition) {
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
export const deleteCargoVehicle = /* GraphQL */ `
  mutation DeleteCargoVehicle(
    $input: DeleteCargoVehicleInput!
    $condition: ModelCargoVehicleConditionInput
  ) {
    deleteCargoVehicle(input: $input, condition: $condition) {
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
export const createEnclosure = /* GraphQL */ `
  mutation CreateEnclosure(
    $input: CreateEnclosureInput!
    $condition: ModelEnclosureConditionInput
  ) {
    createEnclosure(input: $input, condition: $condition) {
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
export const updateEnclosure = /* GraphQL */ `
  mutation UpdateEnclosure(
    $input: UpdateEnclosureInput!
    $condition: ModelEnclosureConditionInput
  ) {
    updateEnclosure(input: $input, condition: $condition) {
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
export const deleteEnclosure = /* GraphQL */ `
  mutation DeleteEnclosure(
    $input: DeleteEnclosureInput!
    $condition: ModelEnclosureConditionInput
  ) {
    deleteEnclosure(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
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
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
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
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
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
