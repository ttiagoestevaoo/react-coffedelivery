import * as yup from 'yup';

export const CartFormSchema = yup
  .object()
  .shape({
    address: yup
      .object()
      .shape({
        street: yup.string().required(),
        number: yup.string().required(),
        complement: yup.string().required(),
        city: yup.string().required(),
        uf: yup.string().required(),
        zipCode: yup.string().required(),
        neighborhood: yup.string().required(),
      }),
    paymentMethod: yup.string().required("Selecione um método de pagamento"),
  })
  .required();
  
export type CartFormData = yup.InferType<typeof CartFormSchema>
  