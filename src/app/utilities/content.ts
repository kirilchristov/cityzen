type Video = {
  id: number
  title: string
  embedUrl: string
  description: string
}

type Season = {
  id: number
  title: string
  description: string
  videos: Video[]
}

export const content: Season[] = [
  {
    id: 1,
    title: 'Сезон 1',
    description: 'Въведение в първия сезон и основните идеи зад нашия проект.',
    videos: [
      {
        id: 1,
        title: 'Епизод 1 - Brave Moustache',
        embedUrl: 'https://www.youtube.com/embed/Ljr_j6aocbw',
        description:
          ' В първият епизод ни гостува Дидо Пешев, който стои зад ъндърграунд бранда Brave Moustache. По професия той е ландшафтен архитект, но предпочита да преследва мечтите си и да рисува. Той съчетава рисуването с музиката, тъй като е китарист и в групата Them Frequencies. Как двете вървят ръка за ръка и дали ще успее да реализира мечтата си за студио за сито печат? Във видеото е използвана музика и кадри от Them Frequencies (Scared Of Life) и Mental Architects (When Sound Turns Into A Person He Becomes One Of Us)',
      },
      {
        id: 2,
        title: 'Епизод 2 - Stinky Socks',
        embedUrl: 'https://www.youtube.com/embed/pfW7mrJjhrI',
        description:
          'Ива, Христо и Димо са основната част от Stinky Socks. Те са приятели, които са опитали да направят по един различен начин, един доста познат и разпространен продукт. Става дума за чорапи. Но не обикновени. А такива, които искаш да имаш. Всеки един техен модел има различна концепция, вид и опаковка. Запознайте се със създателите на чорапите, които са по известни по света, от колкото у нас - Stinky Socks. *Във видеото е използвана музика на Milenita, както и кадри предоставени от Stinky Socks.',
      },
      {
        id: 3,
        title: 'Епизод 3 - Take a cake',
        embedUrl: 'https://www.youtube.com/embed/jSw576iF9GM',
        description:
          'Докато се разхождаш по една от двете софийски улици - Тулово или Бенковски, лесно можеш да бъдеш привлечен от неустоимата миризма на прясно изпечени кексчета, която ще те доведе "за носа" в Take a Cake. Това е първата оригинална къпкейк пекарна в София. В трети епизод на CityZen ще те запознаем с човека, който напуска работа като арт директор в различни рекламни агенции, за да и се отдаде. Във видеото е изпозлвана музика на Milenita.',
      },
      {
        id: 4,
        title: 'Епизод 4 - Ради Стамболов',
        embedUrl: 'https://www.youtube.com/embed/X5AhR-0TtKo',
        description:
          'Едва ли някой би си представил, че в България може да започне да се създава продукт, който само за няколко месеца да достигне до 5 континента. Става дума за шоколадовото суши на Ради Стамболов. Самият Ради познавате като собственик на шоколадоваta работилница (известна и като сладкишница) Гаврош и RS Chocolatier. Почти като на шега, той успява да създаде бизнес за милиони, който стартира именно от България. Чуйте от самия него, историята за неговото суши, което скоро ще може да бъде купено от хората по цял свят.',
      },
      {
        id: 5,
        title: 'Епизод 5 - Otto Eco Toys',
        embedUrl: 'https://www.youtube.com/embed/Om-UowPqg1c',
        description:
          'В поредния епизод на CityZen, надникваме в ателието на Иво Стамов. Той се занимава с изработването страхотни дървени играчки - камиончета, виенско колело, куклен театър и дори тудум-туф-туф машина.  Научи коя е неговата рецепта за преследване на мечти и как да си доволен всеки ден от това, което правиш.',
      },
      {
        id: 6,
        title: 'Епизод 6 - Mars Armor',
        embedUrl: 'https://www.youtube.com/embed/7672tpAeCew',
        description:
          'Можеш ли да оцелееш след изстрел с Калашников в бронежилетка? Ще проверим лично в най-неочаквания епизод на CityZen, в който гостуваме на Пламен Ташков. Преди години той губи работата си като военен и след кратък период на чудене как да продължи решава да продължи с това, в което е най-добър. Днес има фабрика за бронежилетки и изнася продукцията си за чужбина, но това не е краят, а само началото.',
      },
    ],
  },
  {
    id: 2,
    title: 'Сезон 2',
    description: 'SEP 2016 - Лятна предприемаческа програма',
    videos: [
      {
        id: 1,
        title: 'Ню Йорк - Част 1/3',
        embedUrl: 'https://www.youtube.com/embed/SS-MIf8ld2U',
        description:
          'Първата част от филма за лятната предприемаческа програма (the Summer Entrepreneurship Program) ни отвежда в Ню Йорк, където млади български лидери ще бъдат обучавани по предприемачество. Следва Бостън и Сан Франциско.',
      },
      {
        id: 2,
        title: 'Бостън - Част 2/3',
        embedUrl: 'https://www.youtube.com/embed/kRoBVZVXhLg',
        description:
          'След модула в Ню Йорк, втората част от филма за лятната предприемаческа програма (the Summer Entrepreneurship Program) ни отвежда в Babson College и Бостън, където млади български лидери ще бъдат обучавани по предприемачество. Следва Сан Франциско.',
      },
      {
        id: 3,
        title: 'Сан Франциско - Част 3/3',
        embedUrl: 'https://www.youtube.com/embed/5m7VDgmZy6E',
        description:
          'След модулите в Ню Йорк и Бостън, в третата част от филма за лятната предприемаческа програма (the Summer Entrepreneurship Program) ще посетим Сан Франциско и Силициевата долина, където млади български лидери ще бъдат обучавани по предприемачество и ще се срещнат с хора от местния бизнес, ще представят идеите си пред местни инвеститори и ще получат обратна връзка. ',
      },
    ],
  },
  {
    id: 3,
    title: 'Сезон 3',
    description: 'Училища на бъдещето',
    videos: [
      {
        id: 1,
        title: 'ОУ “Неофит Рилски” с.Бел Камен - S3E1',
        embedUrl: 'https://www.youtube.com/embed/EAFg91R4EB8',
        description:
          'Първи епизод от поредицата "Училища на бъдещето". В него отиваме на гости на основното училище "Неофит Рилски" в с.Бел Камен, за да видим новата компютърна зала. / S03E01',
      },
      {
        id: 2,
        title: 'МГ “Петър Берон” Варна - S3E2',
        embedUrl: 'https://www.youtube.com/embed/ELsB0dP0zzE',
        description: '',
      },
      {
        id: 3,
        title: 'СОУ "Иван Вазов" Вършец - S3E3',
        embedUrl: 'https://www.youtube.com/embed/L2t5m61wiaE',
        description: '',
      },
      {
        id: 4,
        title: 'ПМГ „Акад. Боян Петканчин“, Хасково - S3E4',
        embedUrl: 'https://www.youtube.com/embed/hs5q_HPk9K0',
        description:
          'В четвъртия епизод на поредицата “Училища на бъдещето” сме на гости на ПМГ „Акад. Боян Петканчин“ в Хасково. Това е училището с най-високи резултати и ученически постижения в Хасковска област.',
      },
      {
        id: 5,
        title: '32 СОУ "Св. Климент Охридски" София - S3E5',
        embedUrl: 'https://www.youtube.com/embed/XQxeD0p7tS0',
        description: '',
      },
      {
        id: 6,
        title: 'ОУ "Димитър Петров", Сливен - S3E6',
        embedUrl: 'https://www.youtube.com/embed/YV5Q6qSl_I8',
        description:
          'Преди няколко години ОУ „Димитър Петров“ едва събира деца за първи клас за една паралелка. От както има нов директор обаче и с много труд на екипа му, за последната учебна година има записани 5 паралелки с деца. Как става това?',
      },
      {
        id: 7,
        title: '1 СОУ „Свети Седмочисленици”, Търговище - S3E7',
        embedUrl: 'https://www.youtube.com/embed/GncaJvCUI5o',
        description:
          'В 1 СОУ в Търговище интересът към новите технологии и свързаната с тяхното използване промяна в начина на преподаване датира от 2010 г. През погледа на учениците видимата промяна е настъпила някъде към 2012 г. „Проектът е скок в личното ми развитие – преди нямах понятие от компютър”, споделя учител.',
      },
      {
        id: 8,
        title: 'СОУ "Неофит Рилски", гр.Харманли - S3E8',
        embedUrl: 'https://www.youtube.com/embed/bpnvigzuj88',
        description:
          'Учителите от СОУ „Неофит Рилски” в град Харманли се гордеят с начина, по който са успели да съберат средства за училището си. Освен помощта на фондация „Америка за България”, те влагат много доброволен труд, собствени средства и вярват в успеха. А с новото оборудване става така, че децата дори не искат да си тръгват след края на учебните часове.',
      },
      {
        id: 9,
        title: '19 СОУ "Елин Пелин" гр. София - S3E9',
        embedUrl: 'https://www.youtube.com/embed/9d_2q3s-Icw',
        description:
          '19-то училище “Елин Пелин” от София е пример за това как нещата могат да се получат, когато има желание. За да създадат кабинет по предприемачество, самите директор, учители, ученици и родители стават предприемачи. Вижте как успяват да съберат 180 000 лева над сумата от 200 000 лв осигурена им от фондация “Америка за България”.',
      },
      {
        id: 10,
        title: '2 СОУ "Проф. Никола Маринов", гр. Търговище - S3E10',
        embedUrl: 'https://www.youtube.com/embed/nNFZEuee4Bw',
        description:
          'В това училище няма класни стаи. Тук са решили да ги наричат зали, а всяка зала носи името на градове от различни държави по света. Защото е много по-интересно да учиш в зала “Рим” от колкото просто в класна стая',
      },
      {
        id: 11,
        title: 'ЕГ "Пейо Яворов", гр. Силистра - S3E11',
        embedUrl: 'https://www.youtube.com/embed/x4tMcPhM3IU',
        description:
          'В четвъртия епизод на поредицата “Училища на бъдещето” сме на гости на ПМГ „Акад. Боян Петканчин“ в Хасково. Това е училището с най-високи резултати и ученически постижения в Хасковска област.',
      },
    ],
  },
]
