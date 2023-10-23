/* eslint-disable no-undef */
module.exports = (req, _res, next) => {
  const { path, method } = req;

  const registerPath =
    path === "/users" || path === "/register" || path === "/signup";

  if (method === "POST" && registerPath) {
    req.body.role = "user";
    req.body.profilePhoto = `https://api.dicebear.com/7.x/lorelei/svg?seed=${encodeURI(
      req.body.name,
    )}`;
  }

  next();
};
