// Инициализация аккордеона. Начало

import {Accordions} from '../utils/accordions';

let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};

// Инициализация аккордеона. Конец
