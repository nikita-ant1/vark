import type { Image } from '@/types/shared/image';

export interface DocItem {
  name: string,
  preview: Image,
  url: string,
}

function getDocItem(name: string, baseUrl: string): DocItem {
  return {
    name,
    url: '/product-docs/' + baseUrl + '/doc.pdf',
    preview: {
      width: 524,
      height: 752,
      url: '/product-docs/' + baseUrl + '/preview.jpg',
    },
  };
}

const sharovyie = [
  getDocItem(
    'Заключение (INTI.QS.PS.20-12-2023-493)',
    'krany-sharovyie/0',
  ),
  getDocItem(
    'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В04004)',
    'krany-sharovyie/1',
  ),
  // getDocItem(
  //   'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.АБ53.В.00826_20)',
  //   'krany-sharovyie/2',
  // ),
  getDocItem(
    'Сертификат ТР ТС 012 (ЕАЭС RU C-RU.АЖ58.В.04047_23)',
    'krany-sharovyie/3',
  ),
  // getDocItem(
  //   'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02532_20)',
  //   'krany-sharovyie/4',
  // ),
  // getDocItem(
  //   'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01268_20)',
  //   'krany-sharovyie/5',
  // ),
  getDocItem(
    'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП32.77451)',
    'krany-sharovyie/6',
  ),
  getDocItem(
    'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП32.77456)',
    'krany-sharovyie/7',
  ),
  // getDocItem(
  //   'Сертификат огнестойкость (РОСС RU.04РИД0.ОСП01.К00137)',
  //   'krany-sharovyie/8',
  // ),
  // getDocItem(
  //   'Экспертное заключение (413)',
  //   'krany-sharovyie/9',
  // ),
];

export const useProductsDocsStore = defineStore('productsDocsStore', () => {
  const productDocuments: Record<string, DocItem[]> = {
    'zadvizhki-klinovyie-stalnyie': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-klinovyie-stalnyie/0',
      ),
      getDocItem(
        'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В03418)',
        'zadvizhki-klinovyie-stalnyie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.83763_25)',
        'zadvizhki-klinovyie-stalnyie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ЕАЭС RU С-RU.АЖ58.В.04046_23)',
        'zadvizhki-klinovyie-stalnyie/3',
      ),
      getDocItem(
        'Сертификат на тип ЗКС (ЕАЭС RU СТ-RU.НВ94.01974)',
        'zadvizhki-klinovyie-stalnyie/4',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.83829_25)',
        'zadvizhki-klinovyie-stalnyie/5',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08851)',
        'zadvizhki-klinovyie-stalnyie/7',
      ),
      getDocItem(
        'Сертификат ТР ТС 043 (ЕАЭС RU С-RU.АБ03.В.00277_23)',
        'zadvizhki-klinovyie-stalnyie/6',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП32.77449)',
        'zadvizhki-klinovyie-stalnyie/8',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП32.77455)',
        'zadvizhki-klinovyie-stalnyie/9',
      ),
      getDocItem(
        'Сертификат огнестойкость (НСОПБ.RU.ЭО.ПР.111.Н.00327)',
        'zadvizhki-klinovyie-stalnyie/11',
      ),
      // getDocItem(
      //   'Экспертное заключение (414)',
      //   'zadvizhki-klinovyie-stalnyie/10',
      // ),
    ],
    'klapany-zapornyie': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-491)',
        'klapany-zapornyie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.87365_25)',
        'klapany-zapornyie/1',
      ),
      getDocItem(
        'Сертификат на тип КЗ (ЕАЭС RU СТ-RU.НВ94.01984)',
        'klapany-zapornyie/6',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.87445_25)',
        'klapany-zapornyie/2',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08855)',
        'klapany-zapornyie/3',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП29.22567)',
        'klapany-zapornyie/4',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП29.22568)',
        'klapany-zapornyie/5',
      ),
    ],
    'zatvory-obratnyie': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-490)',
        'zatvory-obratnyie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА05.В.18021_25)',
        'zatvory-obratnyie/1',
      ),
      // getDocItem(
      //   'Сертификат ТР ТС 012 (ТС RU C-RU.АД07.В.03348_21)',
      //   'zatvory-obratnyie/3',
      // ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА05.В.16326_22)',
        'zatvory-obratnyie/10',
      ),
      getDocItem(
        'Сертификат на тип КО (ЕАЭС RU СТ-RU.НВ94.01979)',
        'zatvory-obratnyie/2',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.86742_25)',
        'zatvory-obratnyie/4',
      ),
      getDocItem(
        'Сертификат ТР ТС 032  (ЕАЭС KG 417_043.RU.02.08859)',
        'zatvory-obratnyie/5',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП32.77450)',
        'zatvory-obratnyie/6',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП32.77457)',
        'zatvory-obratnyie/7',
      ),
      getDocItem(
        'Сертификат огнестойкость (НСОПБ.RU.ЭО.ПР.111.Н.00328)',
        'zatvory-obratnyie/7',
      ),
      // getDocItem(
      //   'Экспертное заключение (449)',
      //   'zatvory-obratnyie/9',
      // ),
    ],
    'zatvory-diskovyie-povorotnyie-zaslonki': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-489)',
        'zatvory-diskovyie-povorotnyie-zaslonki/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.87692_25)',
        'zatvory-diskovyie-povorotnyie-zaslonki/1',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ЕАЭС RU C-RU.НВ82.В.00613_26)',
        'zatvory-diskovyie-povorotnyie-zaslonki/2',
      ),
      getDocItem(
        'Сертификат на тип ЗД (ЕАЭС RU СТ-RU.НВ94.01986)',
        'zatvory-diskovyie-povorotnyie-zaslonki/10',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.87737_25)',
        'zatvory-diskovyie-povorotnyie-zaslonki/3',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08886)',
        'zatvory-diskovyie-povorotnyie-zaslonki/4',
      ),
      getDocItem(
        'Сертификат ТР ТС 043 (ЕАЭС RU С-RU.АБ03.В.00276_23)',
        'zatvory-diskovyie-povorotnyie-zaslonki/5',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП28.70841)',
        'zatvory-diskovyie-povorotnyie-zaslonki/6',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП28.70842)',
        'zatvory-diskovyie-povorotnyie-zaslonki/7',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.З2820.04ПТК0ОС008.К00030)',
        'zatvory-diskovyie-povorotnyie-zaslonki/8',
      ),
      getDocItem(
        'Экспертное заключение (001515)',
        'zatvory-diskovyie-povorotnyie-zaslonki/9',
      ),
    ],
    'krany-sharovyie-razbornyie-iz-dvukh-chastiei':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei':
      sharovyie,
    'krany-sharovyie-razbornyie-iz-triekh-chastiei':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei':
      sharovyie,
    'krany-sharovyie-razbornyie-s-vierkhniei-kryshkoi':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-triekh-chastiei-podziemnyie':
      sharovyie,
    'krany-sharovyie-tsielnosvarnyie-iz-dvukh-chastiei-podziemnyie':
      sharovyie,
    'krany-sharovyie-vysokotsiklichnyie':
      sharovyie,
    'krany-sharovyie-spietsialnyie':
      sharovyie,
    'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-492)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/0',
      ),
      getDocItem(
        'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.B03716)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/1',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.87049_25)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/2',
      ),
      getDocItem(
        'Сертификат на тип ПК (ЕАЭС RU СТ-RU.НВ94.01981)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/3',
      ),
      getDocItem(
        'Сертификат ТР ТС 012 (ЕАЭС RU C-RU.НВ82.В.00438_25)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/4',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.87120_25)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/5',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08849)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/6',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП28.70705)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/7',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП28.70706)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/8',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.33026.04ЦЭТ0ОС003.К00026)',
        'klapany-stalnyie-pruzhinnyie-priedokhranitielnyie/9',
      ),
    ],
    'zadvizhki-shibiernyie-zms': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-shibiernyie-zms/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА08.В.56650_25)',
        'zadvizhki-shibiernyie-zms/1',
      ),
      // getDocItem(
      //   'Сертификат на тип ЗМС (ЕАЭС RU СТ-RU.КА01.00267)',
      //   'zadvizhki-shibiernyie-zms/4',
      // ),
      // getDocItem(
      //   'Сертификат на тип ЗД (ЕАЭС RU СТ-RU.КА01.00268)',
      //   'zadvizhki-shibiernyie-zms/5',
      // ),
      // getDocItem(
      //   'Сертификат на тип ЗДШ (ЕАЭС RU СТ-RU.КА01.00269)',
      //   'zadvizhki-shibiernyie-zms/6',
      // ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА08.В.56729_25)',
        'zadvizhki-shibiernyie-zms/2',
      ),
      // getDocItem(
      //   'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АБ53.В.00864_21)',
      //   'zadvizhki-shibiernyie-zms/3',
      // ),
      getDocItem(
        'Сертификат на тип ЗМС (ЕАЭС RU СТ-RU.НК04.00210)',
        'zadvizhki-shibiernyie-zms/7',
      ),
    ],
    'zadvizhki-shibiernyie-zsh': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-488)',
        'zadvizhki-shibiernyie-zsh/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА05.В.18075_25)',
        'zadvizhki-shibiernyie-zsh/1',
      ),
      // getDocItem(
      //   'Сертификат на тип ЗШ (ЕАЭС RU СТ-RU.НВ94.01985)',
      //   'zadvizhki-shibiernyie-zsh/2',
      // ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.91053_25)',
        'zadvizhki-shibiernyie-zsh/3',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08845)',
        'zadvizhki-shibiernyie-zsh/4',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП28.72840)',
        'zadvizhki-shibiernyie-zsh/5',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП28.72841)',
        'zadvizhki-shibiernyie-zsh/6',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.33026.04ЦЭТ0ОС003.К00053)',
        'zadvizhki-shibiernyie-zsh/7',
      ),
    ],
    'ustroistva-pieriekliuchaiushchiie': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-494)',
        'ustroistva-pieriekliuchaiushchiie/0',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.87831_25)',
        'ustroistva-pieriekliuchaiushchiie/1',
      ),
      getDocItem(
        'Сертификат на тип ПУ (ЕАЭС RU СТ-RU.НВ94.01987)',
        'ustroistva-pieriekliuchaiushchiie/7',
      ),
      getDocItem(
        'Сертификат на тип ПУ (ЕАЭС RU СТ-RU.НВ94.01987)',
        'ustroistva-pieriekliuchaiushchiie/8',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08875)',
        'ustroistva-pieriekliuchaiushchiie/9',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.87889_25)',
        'ustroistva-pieriekliuchaiushchiie/10',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП28.70704)',
        'ustroistva-pieriekliuchaiushchiie/11',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП28.70707)',
        'ustroistva-pieriekliuchaiushchiie/12',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.33026.04ЦЭТ0ОС003.К00027)',
        'ustroistva-pieriekliuchaiushchiie/13',
      ),
      // getDocItem(
      //   'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.АД07.В.02535_20)',
      //   'ustroistva-pieriekliuchaiushchiie/2',
      // ),
      // getDocItem(
      //   'Сертификат ТР ТС 032 (ЕАЭС RU C-RU.АД07.В.01267_20)',
      //   'ustroistva-pieriekliuchaiushchiie/3',
      // ),
      // getDocItem(
      //   'Сертификат климатика (Серия 001 № 715)',
      //   'ustroistva-pieriekliuchaiushchiie/4',
      // ),
      // getDocItem(
      //   'Сертификат сейсмостойкость (Серия 001 № 698)',
      //   'ustroistva-pieriekliuchaiushchiie/5',
      // ),
      // getDocItem(
      //   'Сертификат пожарной безопасность (04ИДЮ0.117.RU.Н.00020)',
      //   'ustroistva-pieriekliuchaiushchiie/6',
      // ),
    ],
    'bloki-priedokhranitielnykh-klapanov': [
      getDocItem(
        'Заключение (INTI.QS.PS.20-12-2023-492)',
        'bloki-priedokhranitielnykh-klapanov/0',
      ),
      getDocItem(
        'Сертификат ИНТЕРГАЗСЕРТ (ОГН4.RU.1102.В03708)',
        'bloki-priedokhranitielnykh-klapanov/1',
      ),
      getDocItem(
        'Декларация ТР ТС 010 (ЕАЭС N RU Д-RU.РА02.В.86887_25)',
        'bloki-priedokhranitielnykh-klapanov/2',
      ),
      // getDocItem(
      //   'Сертификат на тип БПК (ЕАЭС RU СТ-RU.НВ94.01980)',
      //   'bloki-priedokhranitielnykh-klapanov/3',
      // ),
      getDocItem(
        'Сертификат ТР ТС 012 (ЕАЭС RU C-RU.HB82.B.00429_25)',
        'bloki-priedokhranitielnykh-klapanov/4',
      ),
      getDocItem(
        'Декларация ТР ТС 032 (ЕАЭС N RU Д-RU.РА02.В.86953_25)',
        'bloki-priedokhranitielnykh-klapanov/5',
      ),
      getDocItem(
        'Сертификат ТР ТС 032 (ЕАЭС KG 417_043.RU.02.08853)',
        'bloki-priedokhranitielnykh-klapanov/6',
      ),
      getDocItem(
        'Сертификат климатика (РОСС RU.32001.04ИБФ1.ОСП28.70427)',
        'bloki-priedokhranitielnykh-klapanov/7',
      ),
      getDocItem(
        'Сертификат сейсмостойкость (РОСС RU.32001.04ИБФ1.ОСП28.70428)',
        'bloki-priedokhranitielnykh-klapanov/8',
      ),
      getDocItem(
        'Сертификат огнестойкость (РОСС RU.33026.04ЦЭТ0ОС003.К00016)',
        'bloki-priedokhranitielnykh-klapanov/9',
      ),
    ],
  };

  return {
    productDocuments,
  }
});
