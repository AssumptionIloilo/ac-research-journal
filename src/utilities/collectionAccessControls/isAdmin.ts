import { FieldAccess } from 'payload/types';

const isAdmin: FieldAccess = ({ req: { user } }) => {
  // Scenario #1 - Check if user has the 'admin' role
  if (user && user.role === 'admin') {
    return true;
  }

  // Scenario #2 - Disallow all others
  return false;
};

export default isAdmin;
