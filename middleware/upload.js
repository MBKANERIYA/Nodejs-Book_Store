const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dz7olcbwt",
  api_key: "149632637689593",
  api_secret: "KGEfYggvkUVcr0P_4WpSVSlgzgI",
});

let uploadImage = (path, originalname) => {
  return cloudinary.uploader.upload(
    path,
    { public_id: `${originalname}` },
    function (error, result) {
      return result;
    }
  );
};

module.exports = uploadImage;