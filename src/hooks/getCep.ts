import { ResponseData } from '@/@types/ResponseData';

export async function getCep(cep: string) {
  if (!cep) return { error: 'CEP Inválido!' };

  const url = `https://cep-facil.vercel.app/cep/${cep.replace(/\D/g, '')}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as ResponseData | { error: string };

    if (isErrorResponse(data)) throw new Error(data.error);

    return data;
  } catch (err) {
    if (err.message) throw new Error(err.message);

    throw new Error(
      'CEP Inválido ou não disponível, tente novamente com outro',
    );
  }
}

function isErrorResponse(
  data: ResponseData | { error: string },
): data is { error: string } {
  return (
    (data as { error: string }).error !== undefined ||
    (data as unknown as { erro: string }).erro !== undefined
  );
}
