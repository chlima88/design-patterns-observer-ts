import { BrokerMessage } from "BrokerMessage";

export interface ISubscriber {
    update(data: BrokerMessage): void;
}
