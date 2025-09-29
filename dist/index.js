"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const path = require("path");
const app = express();
const mongoURI = 'mongodb+srv://tanakorn_kanoup:Copy_2548@cluster0.fhntsui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log('MongoDB connected');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.use(express.json());
app.use((0, cors_1.default)());
app.use(express.static(path.join(__dirname, "src", 'public')));
app.use('/api', UserRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
