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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateVisit = /* GraphQL */ `
  subscription OnCreateVisit {
    onCreateVisit {
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
export const onUpdateVisit = /* GraphQL */ `
  subscription OnUpdateVisit {
    onUpdateVisit {
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
export const onDeleteVisit = /* GraphQL */ `
  subscription OnDeleteVisit {
    onDeleteVisit {
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
export const onCreatePrivateVehicle = /* GraphQL */ `
  subscription OnCreatePrivateVehicle {
    onCreatePrivateVehicle {
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
export const onUpdatePrivateVehicle = /* GraphQL */ `
  subscription OnUpdatePrivateVehicle {
    onUpdatePrivateVehicle {
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
export const onDeletePrivateVehicle = /* GraphQL */ `
  subscription OnDeletePrivateVehicle {
    onDeletePrivateVehicle {
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
export const onCreateCargoVehicle = /* GraphQL */ `
  subscription OnCreateCargoVehicle {
    onCreateCargoVehicle {
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
export const onUpdateCargoVehicle = /* GraphQL */ `
  subscription OnUpdateCargoVehicle {
    onUpdateCargoVehicle {
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
export const onDeleteCargoVehicle = /* GraphQL */ `
  subscription OnDeleteCargoVehicle {
    onDeleteCargoVehicle {
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
export const onCreateEnclosure = /* GraphQL */ `
  subscription OnCreateEnclosure {
    onCreateEnclosure {
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
export const onUpdateEnclosure = /* GraphQL */ `
  subscription OnUpdateEnclosure {
    onUpdateEnclosure {
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
export const onDeleteEnclosure = /* GraphQL */ `
  subscription OnDeleteEnclosure {
    onDeleteEnclosure {
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
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
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
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
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
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
