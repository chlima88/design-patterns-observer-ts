import { Subscriber } from "Subscriber";
import { Provider } from "Provider";

const eventManager = new Provider();
const paymantService = new Subscriber("PaymentService");
const orderService = new Subscriber("OrderService");
const shceduleService = new Subscriber("ScheduleService");

eventManager.subscribe("order-created", "payment-service", paymantService);
eventManager.subscribe("order-created", "order-service", orderService);
eventManager.subscribe("payment-authorized", "payment-service", paymantService);
eventManager.subscribe(
    "customer-scheduled",
    "schedule-service",
    shceduleService
);

setTimeout(() => {
    eventManager.notify("order-created", "Compra finalizada");
}, 1000 / 2);

setTimeout(() => {
    eventManager.unsubscribe("order-created", "payment-service");
    eventManager.notify("order-created", "Compra finalizada 2");
}, 2000 / 2);

setTimeout(() => {
    eventManager.unsubscribe("payment-authorized", "payment-service");
}, 2500 / 2);

setTimeout(() => {
    eventManager.notify("payment-authorized", "Pagamento efetuado");
}, 3000 / 2);

setTimeout(() => {
    eventManager.notify("customer-scheduled", "Cliente agendado");
}, 4000 / 2);

setTimeout(() => {
    console.log("----- REPLAYING ----");
    eventManager.subscribe("order-created", "payment-service", paymantService);
    eventManager.replay("order-created");
    console.log("----- DONE ----");
}, 5000 / 2);
