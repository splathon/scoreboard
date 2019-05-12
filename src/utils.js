export const fetchCsv = async ({ id, sid }) => {
  const res = await fetch(`https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${sid}`);
  const csv = await res.text();

  return csv;
};
