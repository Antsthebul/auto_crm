import Router from "koa-router"
import { AppContext } from "../../types"

export const router = new Router<{}, AppContext>()



router.post("/createRepairOrder", async (ctx:AppContext, next)=>{
    const repairOrderService = ctx.repairOrderService 
    const data = ctx.request.body
    const id = await repairOrderService.createRepairOrder(data)
    return {"id":id}
})

router.get("/repairOrder/:id", async (ctx, next)=>{
    const repairOrderService = ctx.repairOrderService
    const { id } = ctx.params
    const ro = await repairOrderService.getRepairOrder(Number(id))
    return ro

})