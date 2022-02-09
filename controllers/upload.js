// const Profile = require("../model/Profile");
// const fs = require("fs"); /*pr i,crémenter un fichier*/

// const { promisify } = require("util");
// // const res = require("express/lib/response");
// const pipeline = promisify(require("stream").pipeline);

// exports.uploadProfil = async (req, res) => {
//   try {
//     // console.log(req.file.mimetype);
//     console.log(req.file);
//     if (
//       req.file.mimetype !== "image/png"
//       // &&
//       // req.file.mimetype !== "image/png" &&
//       // req.file.mimetype !== "image/jpeg"
//     ) {
//       res.status(400).send("invalid file !!");
//     }

//     if (req.file.size > 500000) {
//       res.status(400).send("max sizee !!");
//       // throw Error("max size");
//     }

//     const fileName = req.body.name + ".png";

//     const result = await pipeline(
//       req.file.stream,
//       fs.createWriteStream(
//         `${__dirname}/../client/public/uploads/profil/${fileName}`
//       )
//     ); // !problème proxy dans vscode
//     console.log(result);
//   } catch (err) {
//     res.status(400).send({ errors: [{ msg: "upload failed!!!" }] });
//   }
// };

// //   try {
// //     await User.findByIdAndUpdate(
// //       req.body.userId,
// //       { $set: { picture: "./uploads/profil/" + fileName } },
// //       { new: true, upsert: true, setDefaultsOnInsert: true }
// //     )
// //       .then((data) => res.send(data))
// //       .catch((err) => res.status(500).send({ message: err }));
// //   } catch (err) {
// //     return res.status(500).send({ message: err });
// //   }
// // };
// // !test ça marche mais l'image ne charge pas
// // exports.uploadProfil = (req, res) => {
// //   console.dir(req.body);
// //   console.log(req.file);
// //   res.json({ message: "Successfully uploaded files" });
// // };

// // exports.uploadImg = async (req, res) => {
// //   try {
// //     const fileName = req.body.name + ".jpg";
// //     )
// //     throw Error("invalid File");
// //     if (req.file.size > 500000) throw Error("Max size");

// //     await pipeline(
// //       req.file.stream,
// //       console.log(req.file),
// //       fs.createWriteStream(
// //         `${__dirname}/../client/public/uploads/profil/${fileName}`
// //       )
// //     );
// //   } catch (error) {
// //     res.status(400).send({ errors: [{ msg: "upload failed!!!" }] });
// //   }
// // };
// // //   const newPic = req.console.log(newPic);
// // //   try {
// // //     const result = await Profile.findOneAndupload(
// // //       newPic.userId,
// // //       { $set: { picture: "../client/public/uploads/profil" + fileName } },
// // //       { new: true, upsert: true, setDefaultOnInsert: true }
// // //     );
// // //     res.status(200).send(result);
// // //   } catch (error) {
// // //     res.status(400).send({ errors: [{ msg: "upload failed!!!" }] });
// // //   }
// // // };

// // /const User = require("../model/User");
// // const fs = require("fs");
// // const { promisify } = require("util");
// // const pipeline = promisify(require("stream").pipeline);
// // const { uploadErrors } = require("../utils/errors.utils");
