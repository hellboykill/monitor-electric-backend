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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitConfig = exports.listGatewayCfg = void 0;
const gatewayCfgResults_1 = require("../../helpers/gatewayCfgResults");
const gatewayconfig_1 = require("../../models/gatewayconfig");
class InitConfig {
    GetGateConfig() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield gatewayconfig_1.GatewayConfigModel.find({}).exec();
                let results = [];
                if (response) {
                    try {
                        for (var response_1 = __asyncValues(response), response_1_1; response_1_1 = yield response_1.next(), !response_1_1.done;) {
                            const index = response_1_1.value;
                            let rs = new gatewayCfgResults_1.GateWayConfigResult();
                            rs.host = index.mqttHost;
                            rs.port = index.mqttPort;
                            rs.tls = index.mqttTls;
                            rs.gatewayTopic = index.gatewayTopic;
                            rs.gatewayMsg = index.gatewayMsg;
                            rs.sensorTopic = index.sensorTopic;
                            rs.sensorMsg = index.sensorMsg;
                            results.push(rs);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (response_1_1 && !response_1_1.done && (_a = response_1.return)) yield _a.call(response_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                exports.listGatewayCfg = results;
                return Promise.resolve(results);
            }
            catch (error) {
                console.log(error);
                return Promise.resolve([]);
            }
        });
    }
}
exports.InitConfig = InitConfig;
//# sourceMappingURL=initConfig.js.map