import { verifySignUp } from "../middleware/verifySignUp.js";
import { signup, signin } from '../controller/auth.controller.js';

export default app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"  
    );
    next();
  });

  app.post(
    "/api/auth/signup", (req, res, next) => {
      verifySignUp.checkDuplicateUsernameOrEmail(req,res,next),
      verifySignUp.checkRolesExisted(req,res,next)
  },
    signup
  );

  app.post("/api/auth/signin", signin);
};