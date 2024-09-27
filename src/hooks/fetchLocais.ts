import { Local } from '../@types/Local';

export async function fetchLocais() {
  try {
    const response = await fetch('https://cep-facil.vercel.app/locais');
    console.log(response);
    const data = (await response.json()) as Local[] | { error: string };

    if (isErrorResponse(data)) throw new Error(data.error);

    return data;
  } catch (err) {
    if (err.message) throw new Error(err.message);

    throw new Error('Locais salvos indisponível, tente novamente mais tarde');
  }
}

function isErrorResponse(
  data: Local[] | { error: string },
): data is { error: string } {
  return (
    (data as { error: string }).error !== undefined ||
    (data as unknown as { erro: string }).erro !== undefined
  );
}
