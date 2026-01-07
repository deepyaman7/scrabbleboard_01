import express from "express"
import { getAllNotes, creatNotes, upddateNotes, deleteNotes, getAllNotesById} from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getAllNotesById);
router.post("/", creatNotes);

router.put("/:id", upddateNotes);

router.delete("/:id", deleteNotes);

export default router;





