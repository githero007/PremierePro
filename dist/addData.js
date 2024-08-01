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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, index_1.getClient)();
        const createQuery = `CREATE TABLE users(
     id  SERIAL PRIMARY KEY,
     name TEXT,
     email TEXT,
     password TEXT
    )`;
        const result = yield client.query(createQuery);
        console.log(result);
    });
}
createTable();
