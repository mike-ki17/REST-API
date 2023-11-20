import { Router } from "express";
import { getEmployess, createEmployess, uptadeEmployess, deleteEmployess, getEmployee} from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployess)
router.get('/employees/:id', getEmployee)


router.post('/employees',createEmployess )

router.patch('/employees/:id',uptadeEmployess )

router.delete('/employees/:id', deleteEmployess)


export default router