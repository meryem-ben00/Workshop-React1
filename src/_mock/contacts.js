export const _CONTACT_DATA = [...Array(5)].map((_, index) => ({
  id: index,
  image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  fullName: "Saber Abdellah",
  status: (index % 2 && "active") || (index % 3 && "offline") || "active",

  message: (index % 2 && "seen") || (index % 3 && "recieved") || "seen",
}));
