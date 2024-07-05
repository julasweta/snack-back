"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const Score_1 = __importDefault(require("./models/Score"));
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
app.post("/api/scores", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, score } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    try {
        const newScore = yield Score_1.default.create({ name, score });
        res.status(201).json(newScore);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
}));
app.get("/api/scores", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scores = yield Score_1.default.findAll({
            order: [["score", "DESC"]],
            limit: 10,
        });
        res.status(200).json(scores);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
}));
config_1.default.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
});
