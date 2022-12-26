export const todayDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const mon = String(now.getMonth()).padStart(2, '0');
  const year = now.getFullYear();
  const genDate = `${day}${mon}${year}`;
  return genDate;
};
