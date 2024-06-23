import express from "express";
import { upload } from "../config/upload.js";

const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({
      message: "File uploaded successfully",
      file: file.filename,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
