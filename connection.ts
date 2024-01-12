import { Express } from "express"
const { Sequelize } = require("sequelize")

export const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


export const onDBConnectionRun = (app: Express) => {
    db.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
            db.sync()
                .then((result: unknown) => {
                    app.listen(app.get('port'), () => {
                        console.log("Server is running at http://localhost:" + app.get('port'))
                    })                
                })
                .catch((err: unknown) => { console.log(err) })
        })
        .catch((error: any) => {
            console.error('Unable to connect to the database:')
            console.error(error)
        })
}