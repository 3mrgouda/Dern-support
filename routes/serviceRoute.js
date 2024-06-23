import express from "express";
import {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.route("/").get(getAllServices).post(createService);

router
  .route("/:id")
  .get(getServiceById)
  .put(updateService)
  .delete(deleteService);

export default router;
