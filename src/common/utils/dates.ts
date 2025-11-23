import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const getAge = (dateString: string) => {
  const birth = dayjs(dateString, 'DD-MM-YYYY');
  return dayjs().diff(birth, 'year');
};
