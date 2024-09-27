import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';

import { formatCep } from '../../../utils/formatCep';
import { CepInput } from './styles';

const InputCepRef: ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = (props, ref) => {
  const [cep, setCep] = useState('');

  return (
    <CepInput
      placeholder="Ex: 08474012"
      maxLength={9}
      className="CEP success"
      onChange={(e) => setCep(formatCep(e.target.value))}
      value={cep}
      ref={ref}
    />
  );
};

export const InputCep = forwardRef(InputCepRef);
