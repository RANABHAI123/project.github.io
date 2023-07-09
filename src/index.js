const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")


const tempelatePath = path.join(__dirname, '../tempelates')




app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({ extended: false }))



app.get("/signup", (req, res) => {
    res.render("signup")
})

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/", (req, res) => {
    res.render("home");
  });



app.post("/login", async (req, res) => {

    try {

        const check = await collection.findOne({ name: req.body.name })
        if (check.password === req.body.password) {

            res.render("home")

        }
        else {
           res.send("wrong password")
          
        }

    }
    catch {
        res.send("wrong details")
    }

})

app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render("home")

})
app.get("/nextPage", (req, res) => {
    res.render("nextPage");
  });
  app.get("/nextPage1", (req, res) => {
    res.render("nextPage1");
  });
  app.get("/nextPage2", (req, res) => {
    res.render("nextPage2");
  });
  app.get("/nextPage3", (req, res) => {
    res.render("nextPage3");
  });
  app.get("/nextPage4", (req, res) => {
    res.render("nextPage4");
  });
  


app.listen(3000, () => {
    console.log("port connected");
})
