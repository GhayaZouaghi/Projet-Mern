// const multer = require("multer");
// const upload = multer({ dest: "upload/" });
// const upload = multer();
const isAuth = require("../middleware/isAuth");
// require express
const express = require("express");
// const { uploadProfil } = require("../controllers/upload");

// require Router
const router = express.Router();

// test
router.get("/test", (req, res) => {
  res.send("hiiii test");
});

// ?route uplooad
// router.post("/upload", isAuth, upload.single("file"), uploadProfil);
/*get curent profile route
 * @desc: get current profile
 * @method:get
 * @path:/current
 * @data: null
 */

// router.get("/me", isAuth, currentProfile);

/*create or update profile route
 * @desc: create or update profile
 * @method:post
 * @path: '/http://localhost:8200/api/profile/'
 * @data: req.body
 */

// router.post('/', isAuth,createUp)

/*Route: DELETE api/profile
 * @desc: Delete profile
 * @method: delete
 * @path: '/http://localhost:8200/api/profile/:_id'
 * @data: req.params
 * @Access: Private (admin)
 */
// router.delete("/:id", deletePro);

// router export
module.exports = router;
