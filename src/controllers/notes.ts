import { Request, Response } from "express"
import NotesService from "../services/notes"


export default class NotesController {
    static async getNotes(req: Request, res: Response) {        
        res.json({ notes: await NotesService.getAll() })
    }

    static async getNote(req: Request, res: Response) {
        let id = Number(req.params.id)
        res.json({ note: await NotesService.getByID(id) })
    }

    static postNote(req: Request, res: Response) {
        let title = req.body.title || ""
        let content = req.body.content || ""
    
        if (NotesService.check(title, content)) {
            res.json({ note: NotesService.create(title, content) })
        }
        else {
            res.json({ message: "Error on create." })
        }
    }
}