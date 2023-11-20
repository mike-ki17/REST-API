
import { pool } from '../db.js';

export const ping = async (req, res) => {
    res.json({
        "message": "nicee"
    })
}