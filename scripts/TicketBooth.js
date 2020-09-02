const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", e => {
    if (e.target.id === "rideTicket") {
        const selectedValue = e.target.selectedValue
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: { 
                ticket: selectedValue
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

