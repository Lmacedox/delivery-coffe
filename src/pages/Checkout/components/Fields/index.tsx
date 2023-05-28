import { useFormContext } from 'react-hook-form'
import { defaultTheme } from '../../../../styles/themes/default'
import { InputStyled } from './style'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export function FeildsForm({ id, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <InputStyled
        {...props}
        className={defaultTheme.classes['text-regular-S']}
        type="text"
        placeholder={props.placeholder}
        {...register(id)}
        error={!errors?.[id]}
      />
      {errors?.[id] && (
        <span className={defaultTheme.classes['text-required']}>
          * {errors?.[id]?.message?.toString()}
        </span>
      )}
    </>
  )
}
