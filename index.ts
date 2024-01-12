import express, { Express } from "express"
import { router as appRouter } from "./src/routes/app"
import bodyParser from "body-parser"
import { onDBConnectionRun } from "./connection"


const app: Express = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", appRouter)

onDBConnectionRun(app)