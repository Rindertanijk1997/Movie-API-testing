import { Router } from "express";
import { actors } from "../config/data.js";

const router = Router();

router.get("/", (req, res) => {
    res.json(actors);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const actor = actors.find(actor => actor.id === id);
    res.json(actor);
});

router.post("/", (req, res) => {
    const {name, age} = req.body;
    actors.push({
        id : actors[actors.length-1].id + 1,
        name : name
    })
    const response = {
        success: true,
        message: "Actor added",
        status : 200,
        newActor: actors[actors.length-1],
        data : actors
    }

    res.json(response);
    });

export default router;