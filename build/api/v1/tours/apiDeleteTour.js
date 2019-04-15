"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
const sql_1 = require("../../../db/queries/sql");
exports.apiDeleteTour = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.none(sql_1.tours.delete, { id: tourID }).then(() => {
        res.json(messages_1.PublicInfo.infoDeleted());
    });
};
