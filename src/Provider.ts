import { BrokerMessage } from "./BrokerMessage";
import { ISubscriber } from "./ISubscriber";

type Listener = {
    name: string;
    client: ISubscriber;
};

type Queue = {
    messages: BrokerMessage[];
    listeners: Listener[];
};

type Broker = Map<string, Queue>;

export class Provider {
    private broker: Broker;

    constructor() {
        this.broker = new Map<string, Queue>();
    }

    public subscribe(eventName: string, name: string, client: ISubscriber) {
        if (!this.broker.has(eventName))
            this.broker.set(eventName, { messages: [], listeners: [] });
        this.broker.get(eventName)?.listeners.push({ name, client });
    }

    public unsubscribe(eventName: string, name: string) {
        const index = this.broker
            .get(eventName)
            ?.listeners.findIndex((storedSub) => name == storedSub.name);
        if (index != -1)
            this.broker.get(eventName)?.listeners.splice(index!, 1);
    }

    public notify(eventName: string, data: string) {
        const brokerMsg = new BrokerMessage(eventName, data);
        this.broker.get(eventName)?.listeners.forEach((listener) => {
            listener.client.update(brokerMsg);
            brokerMsg.addRecipients(listener.name);
        });
        this.broker.get(eventName)?.messages.push(brokerMsg);
    }

    public replay(eventName: string) {
        const listeners = this.broker.get(eventName)?.listeners;
        this.broker.get(eventName)?.messages.forEach((brokerMsg) => {
            listeners?.forEach((listener) => {
                if (brokerMsg.getRecipients().includes(listener.name)) {
                    listener.client.update(brokerMsg);
                }
            });
        });
    }
}
