"use cient";

import { generatePortalLink } from "../actions/generatePortalLink";

const ManageAccountButton = () => {
  return (
    // Implement Server Action
    //FIXME : This is error
    <form action={generatePortalLink}>
      <button type="submit">Manage Billing</button>
    </form>
  );
};

export default ManageAccountButton;
