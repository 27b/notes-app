import express, { Express } from "express"
import { router as appRouter } from "./src/routes/app"
import bodyParser from "body-parser"


const app: Express = express()
const port: Number = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", appRouter)

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port)
})