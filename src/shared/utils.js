const fetchCsv = async ({ id, gid }) => {
  const res = await fetch(
    `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}`
  );
  const csv = await res.text();

  return csv.split(/\r\n/).map(line => line.split(','));
};

export const fetchAllCsv = async appData => {
  const data = {};
  for (const [key, val] of Object.entries(appData)) {
    const res = await fetchCsv(val);
    data[key] = res;
  }

  return data;
};
