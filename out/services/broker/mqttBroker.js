"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttControler = void 0;
const mqtt_1 = __importDefault(require("mqtt"));
class MqttControler {
    constructor() {
        this.intiConection();
    }
    intiConection() {
        console.log('mqtt connect');
        this.client = mqtt_1.default.connect({
            host: '127.0.0.1',
            port: 1883,
            protocol: 'mqtt',
        });
    }
    subscrible(topic) {
        this.client.subscribe(topic);
    }
    publish(topic, data) {
        this.client.publish(topic, data);
    }
    unsubscrible(topic) {
        this.client.unsubscribe(topic);
    }
}
exports.MqttControler = MqttControler;
//# sourceMappingURL=mqttBroker.js.map