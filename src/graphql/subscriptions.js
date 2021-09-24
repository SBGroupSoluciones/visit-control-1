/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit {
    onCreateVisit {
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
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit {
    onUpdateVisit {
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
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit {
    onDeleteVisit {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
export const onCreatePrivateVehicle = /* GraphQL */ `
  subscription OnCreatePrivateVehicle {
    onCreatePrivateVehicle {
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
export const onUpdatePrivateVehicle = /* GraphQL */ `
  subscription OnUpdatePrivateVehicle {
    onUpdatePrivateVehicle {
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
export const onDeletePrivateVehicle = /* GraphQL */ `
  subscription OnDeletePrivateVehicle {
    onDeletePrivateVehicle {
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
export const onCreateCargoVehicle = /* GraphQL */ `
  subscription OnCreateCargoVehicle {
    onCreateCargoVehicle {
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
export const onUpdateCargoVehicle = /* GraphQL */ `
  subscription OnUpdateCargoVehicle {
    onUpdateCargoVehicle {
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
export const onDeleteCargoVehicle = /* GraphQL */ `
  subscription OnDeleteCargoVehicle {
    onDeleteCargoVehicle {
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
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse {
    onCreateWarehouse {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse {
    onUpdateWarehouse {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse {
    onDeleteWarehouse {
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
export const onCreateHost = /* GraphQL */ `
  subscription OnCreateHost {
    onCreateHost {
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
export const onUpdateHost = /* GraphQL */ `
  subscription OnUpdateHost {
    onUpdateHost {
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
export const onDeleteHost = /* GraphQL */ `
  subscription OnDeleteHost {
    onDeleteHost {
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
