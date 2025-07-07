const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary');  // <-- destructure here

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'trendiKala/products',
    resource_type: file.mimetype.startsWith('video') ? 'video' : 'image',
    public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
  }),
});

const upload = multer({
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp|mp4|mov|webm/;
    const ext = file.originalname.toLowerCase().split('.').pop();
    if (allowedTypes.test(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'), false);
    }
  }
});

module.exports = upload;
