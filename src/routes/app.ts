import express, { Router, Request, Response } from "express"
import NotesController from "../controllers/notes"

export const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.json({
        version: "1.0.0",
        message: "Online"
    })
})

router.get('/notes', (req: Request, res: Response) => NotesController.getNotes(req, res))

router.post('/notes', (req: Request, res: Response) => NotesController.postNote(req, res))