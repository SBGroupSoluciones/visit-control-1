import { createCalendar, updateCalendar } from "src/graphql/mutations";
import { getCalendar } from "src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Auth.configure(awsconfig);

export const calendarCreate = async (params) => {
  const { hostId, date } = params;
  const hours = [
    "09:00:00",
    "09:30:00",
    "10:00:00",
    "10:30:00",
    "11:00:00",
    "11:30:00",
    "12:00:00",
    "12:30:00",
    "13:00:00",
    "13:30:00",
    "14:00:00",
    "14:30:00",
    "15:00:00",
    "15:30:00",
    "16:00:00",
    "16:30:00",
    "17:00:00",
    "17:30:00",
  ];
  const calendarData = { calendarHostId: hostId, date: date, hours: hours };

  try {
    const calendar = await API.graphql({
      query: createCalendar,
      variables: { input: calendarData },
    });
    return calendar.data.createCalendar;
  } catch (e) {
    console.log(e);
  }
};

// export const warehouseList = async () => {
//   try {
//     const warehouse = await API.graphql(graphqlOperation(listWarehouses));
//     return warehouse.data.listWarehouses.items;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const GetCalendar = async (date) => {
  try {
    const calendar = await API.graphql(
      graphqlOperation(getCalendar, { date: date })
    );
    return calendar.data.getCalendar;
  } catch (error) {
    console.log(error);
  }
};

export const calendarUpdate = async (calendarData) => {
  console.log("DATA CALENDAR ES ", calendarData);
  try {
    const calendar = await API.graphql(
      graphqlOperation(updateCalendar, calendarData)
    );
    return calendar;
  } catch (error) {
    console.log("error al actualizar ", error);
  }
};
