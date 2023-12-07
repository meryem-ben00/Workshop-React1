export const _PATIENT_DATA = [...Array(4)].map((_, index) => ({
  id: index,
  image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  fullName: "Saber Abdellah",
  dateIn: "06/18/2023",
  diagnostic: "ADHD",
  status:
    (index % 2 && "incoming") || (index % 3 && "cancelled") || "confirmed",
}));
