import { Note } from "../models/note"

export default class NotesService {
    static check(title: string, content: string): boolean {
        if (title.length > 3 && content.length > 1) {
            return true
        }
        return false
    }
    
    static create(title: string, content: string): unknown {
        let note = Note.build({ title, content })
        note.save()
        console.log(typeof note)
        return note
    }

    static getByTitle(title: string): unknown {
        return Note.findOne({ where: { title }})
    }

    static getByID(id: string): unknown {
        return Note.findOne({ where: { id }})
    }

    static getAll(): unknown {
        return Note.findAll()
    }
}