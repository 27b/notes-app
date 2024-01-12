import { Note } from "../models/note"

export default class NotesService {
    static check(title: string, content: string): boolean {
        if (title.length > 3 && content.length > 1)
            return true
        return false
    }
    
    static async create(title: string, content: string): Promise<object> {
        return await Note.build({ title, content }).save()
    }

    static async getByTitle(title: string): Promise<object> {
        return await Note.findOne({ where: { title }})
    }

    static async getByID(id: number): Promise<object> {
        return await Note.findOne({ where: { id }})
    }

    static async getAll(): Promise<Array<object>> {
        return await Note.findAll()
    }
}