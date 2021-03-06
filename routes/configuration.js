const router = require("express").Router();
const { requireAuth, hasRole } = require("../middlewares/auth");
const controller = require("../controllers/configuration");

router.use(controller.ensureConfigurationExists);
router.get("/", controller.getConfiguration);
router.put(
  "/",
  requireAuth,
  hasRole("SUPER_ADMIN"),
  controller.updateConfiguration
);

module.exports = router;
