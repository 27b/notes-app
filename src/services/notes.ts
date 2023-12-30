class Note {
    title: string = ""
    content: string = ""
    constructor(title: string, content: string) {
        this.title = title
        this.content = content
    }
}

const notes: Note[] = []

export default class NotesService {
    static check(title: string, content: string): boolean {
        if (title.length > 3 && content.length > 1) {
            return true
        }
        return false
    }
    
    static create(title: string, content: string): Note {
        let note = new Note(title, content)
        notes.push(note)
        return note
    }

    static get(title: string): Note[] {
        return notes.filter(note => note.title === title)
    }

    static getAll(): Note[] {
        return notes
    }
}