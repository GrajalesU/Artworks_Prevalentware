import { AuthenticatedNextApiHandler } from "../../../api/middleware/auth/types";
import authMiddleware from "../../../api/middleware/auth";

const user: AuthenticatedNextApiHandler = async (request, response) => {
  if (!request.user) {
    response.status(401).end();
    return;
  }

  switch (request.method) {
    case "GET":
      response.status(200).json(request.user);
      break;
    default:
      response.status(405).end();
      break;
  }
};

export default authMiddleware(user);
