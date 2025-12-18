import postsArray from "../data/data.js"


function index(req, res) {
    const risposta = {
        count: postsArray.length,
        results: postsArray
    }
    res.json(risposta)
};

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = postsArray.find(post => post.id === id);

    if (post === undefined) {
        res.status(404);
        return res.json({
            message: "post non disponibile",
        })
    }
    res.json(post)

}

function store(req, res) {
    res.send("creo nuovo post")
}

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna post n." + id)
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send("aggiorna parzialemte post n." + id)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const postIndex = postsArray.findIndex((post) => post.id === id)

    if (postIndex === -1) {
        res.status(404)
        return res.json({
            message: "post non disponibile"
        })
    }
    postsArray.splice(postIndex, 1)
    res.sendStatus(204)

}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,

}

export default controller