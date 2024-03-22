import { BrokerMessage } from "BrokerMessage";
import { ISubscriber } from "ISubscriber";

export class Subscriber implements ISubscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update({ recipients, ...remnant }: BrokerMessage): void {
        console.log(remnant);
    }
}
