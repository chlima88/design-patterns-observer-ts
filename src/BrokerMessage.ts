import { randomUUID as uuidV4 } from "crypto";

export class BrokerMessage {
    protected timestamp: string;
    protected eventName: string;
    protected data: string;
    protected id: string;
    recipients: string[];

    constructor(eventName: string, data: string) {
        this.timestamp = new Date().toISOString();
        this.eventName = eventName;
        this.data = data;
        this.id = uuidV4();
        this.recipients = [];
    }

    public addRecipients(recipients: string): void {
        this.recipients.push(recipients);
    }

    public getRecipients(): string[] {
        return this.recipients;
    }
}
