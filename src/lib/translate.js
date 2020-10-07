const languages = {
  shortWeekDay: [
    { en: 'Sun', ru: 'Вс ' },
    { en: 'Mon', ru: 'Пн ' },
    { en: 'Tue', ru: 'Вт ' },
    { en: 'Wed', ru: 'Ср ' },
    { en: 'Thu', ru: 'Чт ' },
    { en: 'Fri', ru: 'Пт ' },
    { en: 'Sat', ru: 'Сб ' },
  ],
  weekDay: [
    { en: 'Sunday', ru: 'Воскресенье' },
    { en: 'Monday', ru: 'Понедельник' },
    { en: 'Tuesday', ru: 'Вторник' },
    { en: 'Wednesday', ru: 'Среда' },
    { en: 'Thursday', ru: 'Четверг' },
    { en: 'Friday', ru: 'Пятница' },
    { en: 'Saturday', ru: 'Суббота' },
  ],
  month: [
    { en: 'January', ru: 'Январь' },
    { en: 'February', ru: 'Февраль' },
    { en: 'March', ru: 'Март' },
    { en: 'April', ru: 'Апрель' },
    { en: 'May', ru: 'Май' },
    { en: 'June', ru: 'Июнь' },
    { en: 'July', ru: 'Июль' },
    { en: 'August', ru: 'Август' },
    { en: 'September', ru: 'Сентябрь' },
    { en: 'October', ru: 'Октябрь' },
    { en: 'November', ru: 'Ноябрь' },
    { en: 'December', ru: 'Декабрь' },
  ],
  dictinary: [
    { en: 'Moderate or heavy snow with thunder', ru: 'Умеренный или сильный снег с грозой' },
    { en: 'Sunny', ru: 'Солнечно' },
    { en: 'Clear', ru: 'Ясно' },
    { en: 'Partly cloudy', ru: 'Небольшая облачность' },
    { en: 'Cloudy', ru: 'Облачно' },
    { en: 'Overcast', ru: 'Пасмурно' },
    { en: 'Mist', ru: 'Туман' },
    { en: 'Patchy rain possible', ru: 'Возможен кратковременный дождь' },
    { en: 'Patchy snow possible', ru: 'Возможен пятнистый снег' },
    { en: 'Patchy sleet possible', ru: 'Возможен дождь с мокрым снегом' },
    { en: 'Patchy freezing drizzle possible', ru: 'Возможна местами замерзающая морось' },
    { en: 'Thundery outbreaks possible', ru: 'Возможны грозовые вспышки' },
    { en: 'Blowing snow', ru: 'Метель' },
    { en: 'Blizzard', ru: 'Снежная буря' },
    { en: 'Fog', ru: 'Туман' },
    { en: 'Freezing fog', ru: 'Ледяной туман' },
    { en: 'Patchy light drizzle', ru: 'Местами изморось' },
    { en: 'Light drizzle', ru: 'Моросящий дождь' },
    { en: 'Heavy freezing drizzle', ru: 'Сильная замораживающая морось' },
    { en: 'Light rain', ru: 'Легкий дождь' },
    { en: 'Moderate rain at times', ru: 'Временами умеренный дождь' },
    { en: 'Moderate rain', ru: 'Умеренный дождь' },
    { en: 'Heavy rain', ru: 'Сильный дождь' },
    { en: 'Light freezing rain', ru: 'Легкий ледяной дождь' },
    { en: 'Search city', ru: 'Поиск города' },
    { en: 'Search', ru: 'Поиск' },
    { en: 'Feels like', ru: 'Ощущается как' },
    { en: 'Wind', ru: 'Ветер' },
    { en: 'Humidity', ru: 'Влажность' },
    { en: 'kph', ru: 'км/ч' },
    { en: 'Change image', ru: 'Смена фона' },
  ],
};

export const getDate = (str, lang) => {
  const date = new Date(str);
  const [day, month, num, year] = date.toDateString().split(' ');
  const newDate = languages.shortWeekDay.find((d) => d.en === day);
  const newMonth = languages.month.find((m) => m.en.match(month));
  return `${newDate[lang]} ${num} ${newMonth[lang]} ${year}`;
};
export const getDay = (str, lang) => {
  const date = new Date(str);
  const [day] = date.toDateString().split(' ');
  const newDate = languages.shortWeekDay.find((d) => d.en === day);
  return `${newDate[lang]}`;
};
export const getSummary = (str, lang) => {
  const newDate = languages.dictinary.find((w) => w.en === str);
  return newDate[lang];
};
export const t = (word, lang) => {
  const transWord = languages.dictinary.find((w) => w.ru.toLowerCase() === word.toLowerCase());
  return transWord[lang];
};
