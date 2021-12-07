export const addContact = (contact) => {
  return { type: "ADD", payload: contact };
};

export const deleteContact = (id) => {
  return { type: "DELETE", payload: id };
};
