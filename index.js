"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScrapController_1 = require("./dist/controllers/ScrapController");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const scrapController = new ScrapController_1.ScrapController();
class Server {
    constructor(srapController) {
        this.srapController = srapController;
        this.port = 3333;
        this.baseUrl = '/api/v1';
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        this.app.set('port', this.port);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.routes();
    }
    routes() {
        this.app.use(this.baseUrl, this.srapController.router);
        this.app.get('/', (req, res) => {
            res.json({ message: 'Scrap api :D' });
        });
    }
    start() {
        this.app.listen(this.app.get('port') || 3333, () => {
            console.log(`Server running ir port ${this.app.get('port')}`);
        });
    }
}
const server = new Server(scrapController);
server.start();
