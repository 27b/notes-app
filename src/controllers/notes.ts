import { Request, Response } from "express"
import NotesService from "../services/notes"


export default class NotesController {
    static getNotes(req: Request, res: Response) {        
        res.json({ notes: NotesService.getAll() })
    }

    static getNote(req: Request, res: Response) {
        let id = req.params.id
        res.json({ note: NotesService.getByID(id) })
    }

    static postNote(req: Request, res: Response) {
        let title = req.body.title || ""
        let content = req.body.content || ""
    
        if (NotesService.check(title, content)) {
            res.json({ note: NotesService.create(title, content) })
        }
        
        res.json({ message: "Error on create" })
    }
}