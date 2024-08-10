import { getValue } from 'src/@utils'
import { z } from 'zod'

export const CreateCustomerBodyDtoSchema = z.object({
  name : z.string(),
  phone : z.string(),
  email : z.string().email(),
  address : z.string().min(3),
  status : z.boolean().default(true)
})

export const CreateCustomerDefaultValue = getValue(CreateCustomerBodyDtoSchema)
export type ICreateCustomer = z.infer<typeof CreateCustomerBodyDtoSchema>