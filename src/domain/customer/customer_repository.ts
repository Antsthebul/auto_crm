import { BaseRepository } from "../../database/base_repository";
import { Customer, CustomerVehicle } from "../../database/models/customer_model";

export class CustomerRespository extends BaseRepository{
    
    getCustomerById(id:number): Promise<Customer|null>{
        return Customer.findByPk(id, {nest:true})
    }

    getCustomerVehicle(customerId:number, vehicleId:number): Promise<CustomerVehicle|null>{
        return CustomerVehicle.findOne({where:{id:vehicleId, customerId}})
    }

    async createCustomer(data:Customer):Promise<Customer>{
        try{

            return await Customer.create({createdAt: new Date(), name:data.name, address:data.address})
        }catch(err){
            throw new Error(`failed at life err: ${err}`)
        }
    }
    createCustomerVehicle(id:number, data:CustomerVehicle): Promise<CustomerVehicle>{
        return CustomerVehicle.create({
            id: data.id,
            year: data.year,
            make: data.make,
            model: data.model,
            trim: data.trim,
            plate: data.plate,
            customerId: data.customerId,
        })
    }

    deleteCustomerVehicle(customerId: number, vehicleId:number): void{
        CustomerVehicle.destroy({where: {customerId, id:vehicleId}})
    }
}