import { describe, it } from "node:test";
import { TicketService } from "../../../services/ticket_service";
import { TicketRepository } from "../../../domain/ticket/ticket_repository";
import { Job, Ticket } from "../../../database/models/ticket";
import { Customer } from "../../../database/models/customer_model";
import assert from "assert";
import { TicketState } from "../../../types";


describe("repair order int tests", ()=>{

    let ticketService = new TicketService(
        new TicketRepository()
    )
    let mockCustomer = Customer.build({
                    name: "Customer A",
                    address:"Test Address",
                    createdAt: new Date(),
                    phone:"610-777-7777"
        })


    let ticket = Ticket.build({
        customerId:mockCustomer.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        state:"APPOINTMENT"
    })

    const NOW = new Date()
    let job = Job.build({
        description:"TestJob1",
        updatedAt:NOW, 
        createdAt:NOW,
        ticketId:ticket.id
    })

    it("An appointment is created and retrieved successfully", async ()=>{
        // ARRANGE
        await mockCustomer.save()

        // ACT - CREATE
        let testTicket = {
            customerId: ticket.customerId,
            createdAt: ticket.createdAt,
            updatedAt: ticket.updatedAt,
            state:"APPOINTMENT" as TicketState,
            jobs:[job]
        }
        const [hasErr, _, repairOrderId] = await ticketService.createTicket(testTicket)
        
        // ASSERT - CREATE
        assert(!hasErr)

        const [getTikErr, tickDetails, new_ro]  = await ticketService.getTicket(repairOrderId)
  
        assert(!getTikErr)
  
        // ACT - RETRIEVE
        assert.equal(new_ro.jobs.length, 1)
    })

})