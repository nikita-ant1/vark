import type { DocItem } from '@/stores/products/docs';

function getDocItem(name: string, baseUrl: string): DocItem {
  return {
    name,
    url: '/common-docs/' + baseUrl + '/doc.pdf',
    preview: {
      width: 524,
      height: 752,
      url: '/common-docs/' + baseUrl + '/preview.jpg',
    },
  };
}

export default function() {
  const tabs = [
    'Разрешительная документация',
    'Интегрированная система менеджмента качества',
    'Лаборатория',
    'Патенты',
    'Охрана труда',
  ];

  const tab = ref(0);

  const commonDocs: Record<string, DocItem[]> = {
    1: [
      getDocItem(
        'Сертификат Р ИСО 9001-2015 и ГОСТ Р ИСО 14001-2016',
        'managment/1',
      ),
      getDocItem(
        'Сертификат ГОСТ ИСО 13849-1-2014 и ГОСТ Р МЭК 61508-1-2012 (РОСС RU.З3026.04ЦЭТ0ОС002.С02830)',
        'managment/2',
      ),
      // getDocItem(
      //   'Сертификат ГОСТ Р ИСО 9001-2015 (ISO 9001 2015) и СТО Газпром 9001-2018 (СМК.ИЭ.RU.01221.24)',
      //   'managment/6',
      // ),
      getDocItem(
        'Сертификат СТО Газпром 9001-2018 (ОГН1.RU.1432.K00020)',
        'managment/9',
      ),
      getDocItem(
        'Сертификат ГОСТ Р ИСО 9001-2015 (005.25 ТПДУ)',
        'managment/7',
      ),
      getDocItem(
        'Сертификат ГОСТ Р ИСО 45001-2020 (ST.RU.0001.P44159)',
        'managment/8',
      ),
      getDocItem(
        'Сертификат СТО Газпром 9001 2018 ОГН1 RU 1419 K0009',
        'managment/3',
      ),
      getDocItem(
        'Заключение (INTI.QS.S.QS.1-07-2024-57)',
        'managment/4',
      ),
      getDocItem(
        'Сертификат ОДР Газпром (ОГН1.RU.1419.00008)',
        'managment/5',
      ),
    ],
    2: [
      getDocItem(
        'Свидетельство об аккредитации № ИЛ ЛРИ-02055',
        'lab/0',
      ),
      getDocItem(
        'Свидетельство об аттестации ЛВиНМК',
        'lab/1',
      ),
    ],
    3: [
      getDocItem(
        'Патент № 203284',
        'pattent/0',
      ),
      getDocItem(
        'Патент № 208865',
        'pattent/1',
      ),
    ],
    4: [

      getDocItem(
        'СОУТ 08.06.2021',
        'security/0',
      ),
      getDocItem(
        'СОУТ 18.02.2025',
        'security/1',
      ),
      getDocItem(
        'СОУТ 18.09.2025',
        'security/2',
      ),
      getDocItem(
        'СОУТ 26.05.2026',
        'security/3',
      ),
    ],
  };

  return {
    tabs,
    tab,
    commonDocs,
  }
}
