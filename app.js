import express from "express";
import postsRouters from "./routers/posts.js"
import pageNotFound from "./middlewares/pageNotFound.js";

const app = express();
const port = 3020;


app.use(express.static("public"));

app.use(express.json());


app.get("/", (req, res) => {
    res.type("html").send("<h1>Ciao sono api delle ricette</h1>");
});


app.use("/posts", postsRouters)

app.use(pageNotFound);

app.listen(port, () => {
    console.log(`il sever è in ascolto sulla porta ${port}`);

});

