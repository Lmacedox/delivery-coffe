import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { FormData } from './Checkout.style'
import { SelectedCoffes } from './components/SelectedCoffes'
import { UserDataForm } from './components/UserDataForm'
import { useCallback, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CardContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

const requiredField = 'Requerido'

const paymentInformationFormDataSchema = zod.object({
  cep: zod.string().nonempty(requiredField),
  logradouro: zod.string().nonempty(requiredField),
  numero: zod.string().nonempty(requiredField),
  complemento: zod.string().optional(),
  bairro: zod.string().nonempty(requiredField),
  localidade: zod.string().nonempty(requiredField),
  uf: zod.string().nonempty(requiredField),
  paymentType: zod.string().nonempty('Informe a forma de pagamento.'),
})

type paymentInformationFormData = zod.infer<
  typeof paymentInformationFormDataSchema
>

export function Checkout() {
  const { paymentData, addPaymentData, totalProductInCart, handleSearchCEP } =
    useContext(CartContext)

  const navigate = useNavigate()

  const paymentInformationForm = useForm<paymentInformationFormData>({
    resolver: zodResolver(paymentInformationFormDataSchema),
    mode: 'onSubmit',
    defaultValues: paymentData || {
      cep: '',
      bairro: '',
      localidade: '',
      logradouro: '',
      paymentType: '',
    },
  })

  function handleSubmitUserPaymentData(data: paymentInformationFormData) {
    addPaymentData(data)
    if (!totalProductInCart) {
      toast.warn('Adicione um produto ao carinho para proseguir')
      return
    }
    navigate('/success')
  }

  const { handleSubmit, watch, setValue } = paymentInformationForm

  const userCep = watch('cep')

  useEffect(() => {
    if (!!userCep && userCep.length === 8) {
      handleSearchCEP(userCep)

      Object.entries(paymentData!).forEach(([name, value]) =>
        setValue(name as keyof paymentInformationFormData, value as string),
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCep, paymentData])

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
