import { authJwt } from "../middleware/authJWT.js";
import { allAccess, userBoard, moderatorBoard, adminBoard } from "../controller/user.controller.js";

export default app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    adminBoard
  );
};