export function formatCep(value: string | undefined) {
  const clearValue = value.replace(/[^0-9]/g, '');
  let cepSave = clearValue;

  if (clearValue.length === 5) cepSave = `${clearValue.slice(0, 5)}`;

  if (clearValue.length > 5) {
    cepSave = `${clearValue.slice(0, 5)}-${clearValue.slice(5, 8)}`;
  }

  return cepSave;
}
