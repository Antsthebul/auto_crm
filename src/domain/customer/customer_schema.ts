interface BaseCustomer{
    name: string,
    address: string,
    phone:string,
    email?:string,

}
export interface CustomerCreateSchema extends BaseCustomer{}
export interface CustomerSchema extends BaseCustomer{
    id:number,
    createdAt: Date,
    updatedAt: Date,

}