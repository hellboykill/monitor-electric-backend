"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorHistoryModel = void 0;
const mongoose = require("mongoose");
let sensorHistorySchema = new mongoose.Schema({
    sensorId: String,
    log: Object,
    timeStamp: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'SensorHistory' });
sensorHistorySchema.index({ sensorId: 1 }, { sparse: true, background: true });
sensorHistorySchema.index({ timeStamp: -1 }, { sparse: true, background: true });
exports.SensorHistoryModel = mongoose.model('SensorHistory', sensorHistorySchema);
//# sourceMappingURL=sensorhistory.js.map