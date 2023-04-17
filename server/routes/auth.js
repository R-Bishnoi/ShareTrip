const {
  login,
 register,
 rideOffer,
 showRide,
 getAllUsers,
 setAvatar,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register",register);
router.post("/rideOffer",rideOffer);
router.get("/showRide",showRide);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
