import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'M0807$'
export const BD_DATABASE = process.env.BD_DATABASE || 'companybd'
export const DB_PORT = process.env.DB_PORT || 3306