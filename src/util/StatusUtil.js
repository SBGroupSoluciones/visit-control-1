export const statusColor = (status) => {
  console.log("EL STATUS", status);
  switch (status) {
    case "SCHEDULED":
      return "success";
    case "IN_PROGRESS":
      return "warning";
    case "IN_PROGRESS_ADMIN":
      return "warning";
    case "IN_PROGRESS_OPERATOR":
      return "warning";
    case "FINISHED_OPERATOR":
      return "warning";
    case "FINISHED_ADMIN":
      return "unregistered";
    case "REJECTED_BY_ADMIN":
      return "danger";
    case "REJECTED_BY_OPERATOR":
      return "danger";
    case "CANCELLED":
      return "danger";
    case "CANCELLED_SA":
      return "danger";
    default:
      return "primary";
  }
};
