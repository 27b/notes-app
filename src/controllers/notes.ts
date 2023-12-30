import { Request, Response } from "express"
import NotesService from "../services/notes"

export default class NotesController {
    static getNotes(req: Request, res: Response) {
        let notes: object[] = []

        NotesService.getAll().forEach(note => {
            notes.push({ ...note })
        })
        
        res.json({ notes })
    }

    static postNote(req: Request, res: Response) {
        let result = { message: "Error" }

        let title = req.body.title || ""
        let content = req.body.content || ""
    
        if (NotesService.check(title, content)) {
            NotesService.create(title, content)
            result.message = "Success"
        }
        
        res.json(result)
    }
}