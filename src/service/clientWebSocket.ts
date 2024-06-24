import { config } from "../config"

type clientEvents = 'trigger_update'
type serverEvents = 'update_jobs_list'

class WebSocketManager {
    clientSocket: WebSocket
    eventsHandlers: { [key: string]: (() => void) | null }

    constructor() {
        this.clientSocket  = new WebSocket(`${config.liveUpdateUrl}/ws`)
        this.eventsHandlers = {}
        this.clientSocket.addEventListener("message", event => {
            const eventType = event.data;
            if (eventType in this.eventsHandlers) {
                const eventHandler = this.eventsHandlers[eventType];
                if (eventHandler !== null) {
                    eventHandler()
                }
                
            }
          });
    }

    addEventHandler(eventType: serverEvents, handler: (() => void) | null) {
        this.eventsHandlers[eventType] = handler;
    }

    publishEvent(eventType: clientEvents) {
        console.log(`published ${eventType}`)
        this.clientSocket.send(eventType)
    }
}

export const clientWebSocket = new WebSocketManager()
