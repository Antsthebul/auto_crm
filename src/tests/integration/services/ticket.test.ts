import { describe, it } from "node:test";
import { TicketService } from "../../../services/ticket_service";
import { TicketRepository } from "../../../domain/ticket/ticket_repository";
import { Job, Ticket } from "../../../database/models/ticket";
import { Customer } from "../../../database/models/customer_model";
import assert from "assert";


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


    let repairOrder = Ticket.build({
        customerId:mockCustomer.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        state:"appointment"
    })

    let job = Job.build({
        description:"TestJob1"
    })

    it("An appointment is created and retrieved successfully", async ()=>{
        // ARRANGE
        await mockCustomer.save()

        // ACT - CREATE
        let testTicket = {
            customerId: repairOrder.customerId,
            createdAt: repairOrder.createdAt,
            updatedAt: repairOrder.updatedAt,
            state:"appointment",
            jobs:[job]
        }
        const repairOrderId = await ticketService.createTicket(testTicket)
        // ASSERT - CREATE
        assert(repairOrderId)

        let new_ro = await ticketService.getTicket(repairOrderId)
  
        // ACT - RETRIEVE
        assert.equal(new_ro.jobs.length, 1)
    })

})