"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
// Conexión a base de datos
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://localhost:27017';
async function startConnection() {
    await mongoose_1.default.connect(uri);
    console.log('Database is connected');
}
exports.startConnection = startConnection;
