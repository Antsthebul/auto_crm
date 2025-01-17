"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRespository = void 0;
const base_repository_1 = require("../../database/base_repository");
const customer_model_1 = require("./customer_model");
class CustomerRespository extends base_repository_1.BaseRepository {
    getCustomerById(id) {
        return customer_model_1.Customer.findByPk(id, { nest: true });
    }
    getCustomerVehicle(customerId, vehicleId) {
        return customer_model_1.CustomerVehicle.findOne({ where: { id: vehicleId, customerId } });
    }
    async createCustomer(data) {
        try {
            return await customer_model_1.Customer.create({ createdAt: new Date(), name: data.name, address: data.address });
        }
        catch (err) {
            throw new Error(`failed at life err: ${err}`);
        }
    }
    createCustomerVehicle(id, data) {
        return customer_model_1.CustomerVehicle.create({
            id: data.id,
            year: data.year,
            make: data.make,
            model: data.model,
            trim: data.trim,
            plate: data.plate,
            customerId: data.customerId,
        });
    }
    deleteCustomerVehicle(customerId, vehicleId) {
        customer_model_1.CustomerVehicle.destroy({ where: { customerId, id: vehicleId } });
    }
}
exports.CustomerRespository = CustomerRespository;
//# sourceMappingURL=customer_repository.js.map