import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { FormData } from './Checkout.style'
import { SelectedCoffes } from './components/SelectedCoffes'
import { UserDataForm } from './components/UserDataForm'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CardContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const requiredField = 'Requerido'

const paymentInformationFormDataSchema = zod.object({
  zipCode: zod.string().nonempty(requiredField),
  street: zod.string().nonempty(requiredField),
  number: zod.string().nonempty(requiredField),
  complement: zod.string().optional(),
  neighborhood: zod.string().nonempty(requiredField),
  city: zod.string().nonempty(requiredField),
  uf: zod.string().nonempty(requiredField),
  paymentType: zod.string().nonempty('Informe a forma de pagamento.'),
})

type paymentInformationFormData = zod.infer<
  typeof paymentInformationFormDataSchema
>

export function Checkout() {
  const { paymentData, addPaymentData, totalProductInCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const paymentInformationForm = useForm<paymentInformationFormData>({
    resolver: zodResolver(paymentInformationFormDataSchema),
    mode: 'onSubmit',
    defaultValues: paymentData || {
      paymentType: '',
    },
  })

  function handleSubmitUserPaymentData(data: paymentInformationFormData) {
    console.log('Submit!')
    addPaymentData(data)
    if (!totalProductInCart) {
      toast.warn('Adicione um produto ao carinho para proseguir')
      return
    }
    navigate('/success')
  }

  const { handleSubmit } = paymentInformationForm

  useEffect(() => {
    console.log(paymentData)
  }, [paymentData])

  return (
    <main>
      <FormData onSubmit={handleSubmit(handleSubmitUserPaymentData)}>
        <FormProvider {...paymentInformationForm}>
          <UserDataForm />
        </FormProvider>

        <SelectedCoffes />
      </FormData>
    </main>
  )
}
