require("dotenv").config()
let express = require("express")
let http = require("http")
let bodyParser = require("body-parser")
const { dbConnect } = require("./DB/dbConnect")
const routes = require("./routes")
let cors = require("cors")


let app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cors())
dbConnect()

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index")
});
app.use("/v1", routes)
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON ${process.env.PORT}`);
})