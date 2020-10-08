import dictionary from './dictionary';
import { RU, C } from './constants';

export const initialState = () => {
  // eslint-disable-next-line no-undef
  if (localStorage.getItem('weather')) {
    // eslint-disable-next-line no-undef
    const { lang, temp, background } = JSON.parse(localStorage.weather);
    return {
      configuration: {
        lang,
        temp,
        background,
      },
    };
  }
  return {
    configuration: {
      lang: RU,
      temp: C,
    },
  };
};

export const timer = () => new Date().toTimeString().replace(/ .*/, '');

export const createDate = (str) => {
  const date = new Date(str);
  const [day, month, num, year] = date.toDateString().split(' ');
  return {
    day,
    month,
    num,
    year,
  };
};

export const findPhraseInDictionary = (item, word) => {
  const object = item.find((phrase) => phrase.en.match(word));
  return object;
};

export const getDate = (str, lang) => {
  const {
    day,
    month,
    num,
    year,
  } = createDate(str);
  const newDate = findPhraseInDictionary(dictionary.shortDay, day);
  const newMonth = findPhraseInDictionary(dictionary.month, month);
  return `${newDate[lang]} ${num} ${newMonth[lang]} ${year}`;
};

export const getDay = (str, lang) => {
  const { day } = createDate(str);
  const newDate = findPhraseInDictionary(dictionary.shortDay, day);
  return newDate[lang];
};

export const getSummary = (summary, lang) => {
  const translateSummary = findPhraseInDictionary(dictionary.summary, summary);
  return translateSummary[lang];
};

export const translator = (word, lang) => {
  const transWord = dictionary.summary.find((w) => w.ru.toLowerCase() === word.toLowerCase());
  return transWord[lang];
};
