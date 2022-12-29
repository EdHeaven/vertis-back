const router = require("express-promise-router")();

const { ad } = require("../controllers");

router.route("/:id").get(ad.get);
router.route("/").post(ad.create);
router.route("/").get(ad.getAll);
router.route("/:id").put(ad.update);
router.route("/:id").delete(ad.delete);

module.exports = router;