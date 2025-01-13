import { BaseRespository } from "../../database/base_repository";
import { Customer, CustomerVehicle } from "./customer_model";

export class CustomerRespository extends BaseRespository{
    
    getCustomerById(id:number): Promise<Customer|null>{
        return Customer.findByPk(id, {nest:true})
    }

    getCustomerVehicle(customerId:number, vehicleId:number): Promise<CustomerVehicle|null>{
        return CustomerVehicle.findOne({where:{id:vehicleId, customerId}})
    }

    createCustomer(data:Customer):Promise<Customer>{
        return Customer.create({createdAt: new Date(), name:data.name, address:data.address})
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

    // deleteCustomerVehicle(customerId: number, vehicleId:number): Promise<void>
}