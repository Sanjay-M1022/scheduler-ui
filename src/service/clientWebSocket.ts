type clientEvents = 'trigger_update'
type serverEvents = 'update_jobs_list'

class WebSocketManager {
    clientSocket: WebSocket
    eventsHandlers: { [key: string]: () => void }

    constructor() {
        this.clientSocket  = new WebSocket(`${process.env.REACT_APP_JOBS_API_URL}/ws`)
        this.eventsHandlers = {}
        this.clientSocket.addEventListener("message", event => {
            const eventType = event.data;
            if (eventType in this.eventsHandlers) {
                console.log(`handling ${eventType}`)
                this.eventsHandlers[eventType]()
            }
          });
    }

    addEventHandler(eventType: serverEvents, handler: () => void) {
        this.eventsHandlers[eventType] = handler;
    }

    publishEvent(eventType: clientEvents) {
        console.log(`published ${eventType}`)
        this.clientSocket.send(eventType)
    }
}

export const clientWebSocket = new WebSocketManager()
