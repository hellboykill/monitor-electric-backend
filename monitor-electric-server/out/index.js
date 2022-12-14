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
require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const mongodb_1 = require("./services/database/mongodb");
const cmsRouters_1 = __importDefault(require("./routes/cmsRouters"));
const initConfig_1 = require("./services/database/initConfig");
const event_1 = require("./services/event/event");
let httpServer = new http.Server(app);
let io = socketIO(httpServer, {
    transports: ['websocket'],
});
const database = new mongodb_1.Database();
const socketPort = process.env.SocketPort;
const httpPort = process.env.HttpPort;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb',
}));
app.use('/cms', cmsRouters_1.default);
database.connectMongoDb(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Mongo Connected!');
    (0, initConfig_1.initSubTopic)();
}));
/**
 * Listener warning for notify web
 */
event_1.eventService.onWarning(io);
app.listen(httpPort, () => {
    console.log('Http listening on port', httpPort);
});
httpServer.listen(socketPort, function () {
    console.log('Socket listening on port', socketPort);
});
io.sockets.on('connection', (socket) => {
    console.log('Client connected id ' + socket.id);
    socket.on('disconnect', () => {
        console.log(socket.id, ' disconnected');
        socket.disconnect();
    });
});
//# sourceMappingURL=index.js.map