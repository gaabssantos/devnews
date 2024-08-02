const DateFormatted = () => {
  const date = new Date();
  date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  const day = date.getDate();
  const numberMonth = date.getMonth() + 1;
  const year = date.getFullYear();

  const allMonths = [
    {
      monthNumber: 1,
      monthName: 'Janeiro',
    },
    {
      monthNumber: 2,
      monthName: 'Fevereiro',
    },
    {
      monthNumber: 3,
      monthName: 'Março',
    },
    {
      monthNumber: 4,
      monthName: 'Abril',
    },
    {
      monthNumber: 5,
      monthName: 'Maio',
    },
    {
      monthNumber: 6,
      monthName: 'Junho',
    },
    {
      monthNumber: 7,
      monthName: 'Julho',
    },
    {
      monthNumber: 8,
      monthName: 'Agosto',
    },
    {
      monthNumber: 9,
      monthName: 'Setembro',
    },
    {
      monthNumber: 10,
      monthName: 'Outubro',
    },
    {
      monthNumber: 11,
      monthName: 'Novembro',
    },
    {
      monthNumber: 12,
      monthName: 'Dezembro',
    },
  ];

  let monthComplete = '';

  allMonths.map((month) => {
    if (numberMonth === month.monthNumber) {
      monthComplete = month.monthName;
    }
  });

  return `${day} de ${monthComplete} de ${year}`;
};

export default DateFormatted;
