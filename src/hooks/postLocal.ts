import { Local } from '../@types/Local';

export async function postLocal(local: Omit<Local, 'id'>) {
  try {
    console.log(JSON.stringify(local));
    const response = await fetch('https://cep-facil.vercel.app/locais', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(local),
    });
    const data = (await response.json()) as Local | { error: string };

    if (isErrorResponse(data)) throw new Error(data.error);

    return data;
  } catch (err) {
    console.log(err);
    if (err.message) throw new Error(err.message);

    throw new Error(
      'Não foi possível salvar o local, tente novamente mais tarde',
    );
  }
}

function isErrorResponse(
  data: Local | { error: string },
): data is { error: string } {
  return (
    (data as { error: string }).error !== undefined ||
    (data as unknown as { erro: string }).erro !== undefined
  );
}
