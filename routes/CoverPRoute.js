import express from "express";
import {
    getCoverPs,
    getCoverPById,
    createCoverP,
    updateCoverP,
    deleteCoverP
} from "../controllers/CoverPController.js";

const router = express.Router();

router.get('/coverp', getCoverPs);
router.get('/coverp/:id', getCoverPById);
router.post('/coverp', createCoverP);
router.patch('/coverp/:id', updateCoverP);
router.delete('/coverp/:id', deleteCoverP);
  
export default router;