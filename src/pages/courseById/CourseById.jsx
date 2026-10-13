import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import sql from "../../assets/sql.png"

export default function CourseById() {
    const { id } = useParams();
    const { t } = useTranslation()


    // const course = {
    //     id: 107,
    //     title: 'Frontend (HTML & CSS)',
    //     duration: '4 месяца',
    //     level: 'Beginner',
    //     levelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    //     tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive'],
    //     description: 'Стань разработчиком современных веб-приложений с нуля',
    //     subTitle: 'Освойте архитектуру интерфейсов и адаптивную верстку',
    //     information: [
    //         { id: 1, label: 'Уровень', value: 'Beginner', icon: 'fa-solid fa-chart-line' },
    //         { id: 2, label: 'Длительность', value: '4 месяца', icon: 'fa-solid fa-stopwatch' },
    //         { id: 3, label: 'Занятность', value: '2 раза по 2ч / нед', icon: 'fa-solid fa-calendar-check' },
    //         { id: 4, label: 'Формат', value: 'Худжанд (Офлайн)', icon: 'fa-solid fa-laptop' },
    //     ],
    //     why: 'Идеальный фундамент для старта в веб-разработке и создания коммерческих проектов.',
    //     metodichka: [
    //         'Основы HTML и семантическая разметка',
    //         'Современный CSS и стилевое оформление',
    //         'Блочная модель и позиционирование',
    //         'Flexbox и CSS Grid (Продвинутая верстка)',
    //         'Адаптивный дизайн для мобильных устройств',
    //         'CSS-анимации, переходы и трансформации',
    //         'Работа с формами и валидация',
    //         'Инструменты разработчика (DevTools)',
    //         'Контроль версий: Git и GitHub',
    //         'Итоговый проект и публикация в сети',
    //     ],
    //     technologies: [
    //         { id: 1, title: 'HTML5', icon: 'fa-brands fa-html5 text-orange-500' },
    //         { id: 2, title: 'CSS3', icon: 'fa-brands fa-css3-alt text-blue-500' },
    //         { id: 3, title: 'Flexbox & Grid', icon: 'fa-solid fa-table-cells text-[#12304A]' },
    //         { id: 4, title: 'Git & GitHub', icon: 'fa-brands fa-git-alt text-red-500' },
    //         { id: 5, title: 'VS Code', icon: 'fa-brands fa-microsoft text-sky-400' },
    //     ],
    // };

    const courses = [
        {
            id: 1,
            title: 'Frontend (HTML && CSS)',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['HTML', 'CSS'],
            description: t("courseById.Получи фундаментальные навыки frontend-разработки: от структуры HTML-страниц до адаптивного дизайна с помощью CSS. Создай собственные проекты и подготовься к изучению JavaScript"),
            subTitle: '1',
            information: [
                { id: 1, classIcon: 'fa-solid fa-chart-line', info: 'Уровень', infor: 'Beginer' },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],
            why: t("courseById.Идеальный фундамент для старта в веб-разработке и создания коммерческих проектов") ,
            metodichka: [
                t("courseById.Основы HTML"),
                t("courseById.Основы CSS"),
                t("courseById.Макеты и позиционирование"),
                t("courseById.Адаптивный дизайн"),
                t("courseById.Flexbox"),
                t("courseById.Переходы и анимация"),
            ],
            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-html5',
                    title: 'HTML5',
                    color: 'text-red-500',
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-css3-alt',
                    title: 'CSS3',
                    color: 'text-blue-500',
                },
                {
                    id: 3,
                    icon: 'fa-brands fa-git-alt',
                    title: 'git && github',
                    color: 'text-orange-500',
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-microsoft',
                    title: 'VS Code',
                    color: 'text-blue-600',
                },
            ],
        },

        {
            cert: '/certificate/jsbg.png',
            id: 2,
            title: 'JavaScript',
            duration: '4 месяцев',
            level: 'Junior',
            levelColor: 'text-yellow-400',
            tags: ['JavaScript', 'ES6+', 'DOM'],
            description: 'Изучи JavaScript с нуля: от переменных и циклов до работы с DOM, API и асинхронным кодом. Создавай интерактивные приложения и подготовься к изучению React.',
            subTitle: '3',
            icon: 'fa-brands fa-js',
            iconBg: 'bg-yellow-500/20',
            iconColor: 'text-yellow-400',
            accentDark: 'from-yellow-500/20 to-transparent',
            category: 'Разработка',
            border: 'hover:border-yellow-500/40',
            glow: 'hover:shadow-yellow-500/10',
            image: '/jsImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Junior',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'JavaScript — один из ключевых языков веб-разработки, который позволяет превращать обычные сайты в интерактивные и функциональные приложения.',

            metodichka: [
                'Основы JavaScript',
                'Переменные и типы данных',
                'Условия и циклы',
                'Функции',
                'Массивы и объекты',
                'DOM и события',
                'Асинхронность',
                'Fetch API',
                'ES6+',
                'Модули',
                'Практические проекты',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-js',
                    title: 'JavaScript',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-html5',
                    title: 'HTML5',
                    color: 'text-red-500',
                },
                {
                    id: 3,
                    icon: 'fa-brands fa-css3-alt',
                    title: 'CSS3',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-orange-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-code',
                    title: 'ES6+',
                    color: 'text-purple-500',
                },
            ],
        },

        {
            id: 3,
            title: 'React Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',
            tags: ['JavaScript', 'React', 'Redux', 'Redux/toolkit', 'API'],
            description: 'Изучи React и научись создавать быстрые, интерактивные и масштабируемые интерфейсы. Работай с компонентами, управляй состоянием приложения и разрабатывай реальные проекты от идеи до готового продукта.',
            subTitle: '5',

            icon: 'fa-brands fa-react',
            iconBg: 'bg-violet-500/20',
            iconColor: 'text-violet-400',
            accentDark: 'from-violet-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-violet-500/40',
            glow: 'hover:shadow-violet-500/10',

            image: '/reactImage.png',
            cert: '/certificate/jsbg.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'React — популярная JavaScript-библиотека для создания пользовательских интерфейсов. Она помогает разрабатывать современные веб-приложения, разделять интерфейс на переиспользуемые компоненты и эффективно управлять данными.',

            metodichka: [
                'Основы React',
                'JSX',
                'Компоненты',
                'Props и State',
                'useState',
                'useEffect',
                'React Router',
                'Работа с API',
                'Axios',
                'Redux Toolkit',
                'Firebase',
                'Авторизация',
                'Оптимизация приложений',
                'Деплой проекта',
            ],

            technologies: [
                {
                    id: 2,
                    icon: 'fa-brands fa-js',
                    title: 'JavaScript',
                    color: 'text-yellow-400',
                },
                {
                    id: 1,
                    icon: 'fa-brands fa-react',
                    title: 'React',
                    color: 'text-cyan-400',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-bolt',
                    title: 'Redux Toolkit',
                    color: 'text-violet-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-route',
                    title: 'React Router',
                    color: 'text-red-500',
                },
                {
                    id: 7,
                    icon: 'fa-solid fa-server',
                    title: 'REST API',
                    color: 'text-emerald-500',
                },
                {
                    id: 8,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-orange-500',
                },
            ],
        },

        {
            cert: '/certificate/html&cssbg.png',
            id: 4,
            title: 'UI/UX Designer',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['Figma', 'UI Design', 'UX', 'Prototyping'],

            description: 'Изучи основы UX/UI-дизайна, научись проектировать пользовательский опыт и создавать современные интерфейсы сайтов и мобильных приложений. Превращай идеи в стильные и удобные цифровые продукты.',

            subTitle: '7',

            icon: 'fa-solid fa-paintbrush',
            iconBg: 'bg-rose-500/20',
            iconColor: 'text-rose-400',
            accentDark: 'from-rose-500/20 to-transparent',

            category: 'Дизайн',
            border: 'hover:border-rose-500/40',
            glow: 'hover:shadow-rose-500/10',

            image: '/desigImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'UX/UI-дизайн объединяет удобство использования и визуальную привлекательность цифровых продуктов. Он помогает создавать сайты и приложения, которыми людям приятно и легко пользоваться.',

            metodichka: [
                'Введение в UI/UX',
                'Основы композиции',
                'Цвет и типографика',
                'UX-исследования',
                'Пользовательские сценарии',
                'Wireframes',
                'Прототипирование',
                'Работа в Figma',
                'Создание дизайн-систем',
                'Мобильный дизайн',
                'Адаптивный дизайн',
                'Подготовка макетов для разработки',
                'Портфолио дизайнера',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-figma',
                    title: 'Figma',
                    color: 'text-purple-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-palette',
                    title: 'UI Design',
                    color: 'text-pink-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-user-check',
                    title: 'UX Research',
                    color: 'text-cyan-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-diagram-project',
                    title: 'Wireframing',
                    color: 'text-amber-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-mobile-screen',
                    title: 'Responsive Design',
                    color: 'text-emerald-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-bezier-curve',
                    title: 'Prototyping',
                    color: 'text-rose-500',
                },
            ],
        },

        {
            cert: '/certificate/pythonbg.png',
            id: 5,
            title: 'Python Developer',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Telegram bot', 'SQLite'],

            description: 'Python — отличный первый язык программирования, который помогает развить алгоритмическое мышление и подготовиться к дальнейшему изучению Web-разработки, AI и Data Science.',

            subTitle: '9',

            icon: 'fa-brands fa-python',
            iconBg: 'bg-blue-500/20',
            iconColor: 'text-blue-400',
            accentDark: 'from-blue-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-blue-500/40',
            glow: 'hover:shadow-blue-500/10',

            image: '/pythonImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Простой для старта — понятный синтаксис позволяет быстро освоить основы программирования.',

            metodichka: [
                'Введение в Python',
                'Переменные и типы данных',
                'Условия и циклы',
                'Функции',
                'Списки и словари',
                'Работа с файлами',
                'Модули и пакеты',
                'Обработка ошибок',
                'SQLite и базы данных',
                'Создание REST API',
                'Практические проекты',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-python',
                    title: 'Python',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-database',
                    title: 'SQL',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-bolt',
                    title: 'Flask',
                    color: 'text-slate-400',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-code',
                    title: 'REST API',
                    color: 'text-cyan-500',
                },
                {
                    id: 7,
                    icon: 'fa-solid fa-server',
                    title: 'Backend',
                    color: 'text-violet-500',
                },
            ],
        },

        {
            cert: '/cert2-no-bg-preview (carve.photos).png',
            id: 6,
            title: 'Mobile Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Flutter', 'Dart', 'Firebase'],

            description: 'Создавай современные мобильные приложения для Android с помощью Kotlin.',

            subTitle: '12',

            icon: 'fa-solid fa-mobile-screen-button',
            iconBg: 'bg-teal-500/20',
            iconColor: 'text-teal-400',
            accentDark: 'from-teal-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-teal-500/40',
            glow: 'hover:shadow-teal-500/10',

            image: '/mobileImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Kotlin — современный язык разработки Android-приложений, который позволяет создавать быстрые, удобные и масштабируемые мобильные приложения.',

            metodichka: [
                'Введение в Flutter',
                'Основы Dart',
                'Виджеты Flutter',
                'Навигация между экранами',
                'Управление состоянием',
                'Работа с API',
                'Firebase Authentication',
                'Cloud Firestore',
                'Хранение данных',
                'Push-уведомления',
                'Архитектура приложений',
                'Оптимизация производительности',
                'Публикация в Play Market',
                'Публикация в App Store',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-mobile-screen',
                    title: 'Flutter',
                    color: 'text-cyan-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-code',
                    title: 'Dart',
                    color: 'text-blue-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-fire',
                    title: 'Firebase',
                    color: 'text-orange-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-cloud',
                    title: 'REST API',
                    color: 'text-emerald-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-database',
                    title: 'Firestore',
                    color: 'text-yellow-500',
                },
                {
                    id: 6,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-red-500',
                },
                {
                    id: 7,
                    icon: 'fa-brands fa-android',
                    title: 'Android',
                    color: 'text-green-500',
                },
                {
                    id: 8,
                    icon: 'fa-brands fa-apple',
                    title: 'iOS',
                    color: 'text-slate-300',
                },
            ],
        },

        {
            cert: '/certificate/djangobg.png',
            id: 7,
            title: 'Python Django Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],

            description: 'Создавай мощные веб-приложения и серверную часть современных сайтов.',

            subTitle: '14',

            icon: 'fa-brands fa-python',
            iconBg: 'bg-green-500/20',
            iconColor: 'text-green-400',
            accentDark: 'from-green-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-green-500/40',
            glow: 'hover:shadow-green-500/10',

            image: '/djangoImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Python + Django — практичный стек для backend-разработки, который позволяет создавать полноценные веб-сервисы, API, CRM и другие современные приложения.',

            metodichka: [
                'Основы Python',
                'ООП в Python',
                'Работа с файлами',
                'SQLite и PostgreSQL',
                'Введение в Django',
                'MVT Архитектура',
                'Модели и ORM',
                'Шаблоны Django',
                'Формы и валидация',
                'Аутентификация пользователей',
                'Права доступа',
                'Django REST Framework',
                'Создание REST API',
                'JWT Авторизация',
                'Деплой проекта',
                'Git и GitHub',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-python',
                    title: 'Python',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-globe',
                    title: 'Django',
                    color: 'text-emerald-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-database',
                    title: 'PostgreSQL',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-code',
                    title: 'REST API',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-key',
                    title: 'JWT Auth',
                    color: 'text-orange-500',
                },
                {
                    id: 7,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-red-500',
                },
                {
                    id: 8,
                    icon: 'fa-solid fa-server',
                    title: 'Backend',
                    color: 'text-violet-500',
                },
            ],
        },

        {
            cert: '/certificate/mincraftbg.png',
            id: 8,
            title: 'Python Minecraft',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Minecraft', 'Game Dev'],

            description: 'Научись программировать через создание игр и проектов в Minecraft',

            subTitle: '16',

            icon: 'fa-solid fa-cube',
            iconBg: 'bg-lime-500/20',
            iconColor: 'text-lime-400',
            accentDark: 'from-lime-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-lime-500/40',
            glow: 'hover:shadow-lime-500/10',

            image: '/maincraftImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Minecraft превращает обучение программированию в игру: ученики сразу видят результат своего кода и учатся создавать собственные решения.',

            metodichka: [
                'Знакомство с Python',
                'Переменные и типы данных',
                'Условия и циклы',
                'Функции',
                'Списки и словари',
                'Работа с Minecraft API',
                'Создание игровых объектов',
                'Автоматизация действий',
                'Игровая логика',
                'Создание мини-игр',
                'Проектирование уровней',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-python',
                    title: 'Python',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-cube',
                    title: 'Minecraft API',
                    color: 'text-lime-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-gamepad',
                    title: 'Game Logic',
                    color: 'text-purple-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-code',
                    title: 'Algorithms',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-gears',
                    title: 'Automation',
                    color: 'text-orange-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-puzzle-piece',
                    title: 'Problem Solving',
                    color: 'text-pink-500',
                },
            ],
        },

        {
            cert: '/certificate/sqlbg.png',
            id: 9,
            title: 'SQL Developer',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['SQL', 'PostgreSQL', 'Database'],

            description: 'Научись хранить, обрабатывать и управлять данными как настоящий разработчик.',

            subTitle: '18',

            icon: 'fa-solid fa-database',
            iconBg: 'bg-indigo-500/20',
            iconColor: 'text-indigo-400',
            accentDark: 'from-indigo-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-indigo-500/40',
            glow: 'hover:shadow-indigo-500/10',

            image: '/sqlImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'SQL и базы данных — основа большинства современных веб-приложений, CRM, интернет-магазинов и других цифровых систем.',

            metodichka: [
                'Введение в базы данных',
                'Основы SQL',
                'SELECT запросы',
                'WHERE и фильтрация',
                'Сортировка данных',
                'JOIN операции',
                'GROUP BY и агрегатные функции',
                'Подзапросы',
                'Создание таблиц',
                'Связи между таблицами',
                'Нормализация данных',
                'PostgreSQL',
                'Индексы',
                'Оптимизация запросов',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-database',
                    title: 'SQL',
                    color: 'text-blue-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-server',
                    title: 'PostgreSQL',
                    color: 'text-indigo-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-table',
                    title: 'Database Design',
                    color: 'text-emerald-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-link',
                    title: 'Relations',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-filter',
                    title: 'Query Optimization',
                    color: 'text-orange-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-chart-column',
                    title: 'Data Analytics',
                    color: 'text-violet-500',
                },
            ],
        },

        {
            cert: '/certificate/scrachbg.png',
            id: 10,
            title: 'Scratch',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Scratch', 'Game Development', 'Logic'],

            description: 'Создавай игры, анимации и интерактивные проекты, изучая основы программирования.',

            subTitle: '20',

            icon: 'fa-solid fa-puzzle-piece',
            iconBg: 'bg-orange-500/20',
            iconColor: 'text-orange-400',
            accentDark: 'from-orange-500/20 to-transparent',

            category: 'Программирование для детей',
            border: 'hover:border-orange-500/40',
            glow: 'hover:shadow-orange-500/10',

            image: '/scrachImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Scratch — простой и увлекательный способ познакомиться с программированием через создание собственных игр и проектов.',

            metodichka: [
                'Знакомство со Scratch',
                'Интерфейс программы',
                'Спрайты и сцены',
                'Блоки движения',
                'События',
                'Переменные',
                'Циклы',
                'Условия',
                'Создание анимаций',
                'Создание игр',
                'Звуки и эффекты',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-puzzle-piece',
                    title: 'Scratch',
                    color: 'text-orange-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-gamepad',
                    title: 'Game Development',
                    color: 'text-violet-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-lightbulb',
                    title: 'Logic',
                    color: 'text-yellow-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-repeat',
                    title: 'Algorithms',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-film',
                    title: 'Animation',
                    color: 'text-pink-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-rocket',
                    title: 'Creative Projects',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/kidsbg.png',
            id: 11,
            title: 'Компьютерная грамотность',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Компьютер', 'Windows', 'Office', 'Internet'],

            description: 'Освой компьютер с нуля и уверенно работай с современными цифровыми технологиями.',

            subTitle: '22',

            icon: 'fa-solid fa-computer',
            iconBg: 'bg-sky-500/20',
            iconColor: 'text-sky-400',
            accentDark: 'from-sky-500/20 to-transparent',

            category: 'Компьютерная грамотность',
            border: 'hover:border-sky-500/40',
            glow: 'hover:shadow-sky-500/10',

            image: '/kidsImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Компьютерная грамотность помогает уверенно пользоваться компьютером, современными программами и интернетом для учёбы, работы и повседневных задач.',

            metodichka: [
                'Основы работы с компьютером',
                'Windows и настройка системы',
                'Работа с файлами и папками',
                'Microsoft Word',
                'Microsoft Excel',
                'Microsoft PowerPoint',
                'Работа с интернетом',
                'Электронная почта',
                'Безопасность в интернете',
                'Выпускной проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-windows',
                    title: 'Windows',
                    color: 'text-blue-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-file-word',
                    title: 'Word',
                    color: 'text-blue-600',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-file-excel',
                    title: 'Excel',
                    color: 'text-green-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-file-powerpoint',
                    title: 'PowerPoint',
                    color: 'text-orange-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-globe',
                    title: 'Internet',
                    color: 'text-cyan-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-shield-halved',
                    title: 'Cyber Security',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/csharpbg.png',
            id: 12,
            title: 'C# Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['C#', '.NET', 'SQL Server', 'Backend'],

            description: 'Освой C# и .NET и научись создавать современные серверные приложения, API и полноценные backend-системы.',

            subTitle: '24',

            icon: 'fa-solid fa-code',
            iconBg: 'bg-purple-500/20',
            iconColor: 'text-purple-400',
            accentDark: 'from-purple-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-purple-500/40',
            glow: 'hover:shadow-purple-500/10',

            image: '/csharpImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'C# и .NET — мощные технологии для разработки веб-приложений, API, CRM-систем и корпоративных решений.',

            metodichka: [
                'Основы C#',
                'Типы данных',
                'Условия и циклы',
                'Методы и функции',
                'Коллекции',
                'ООП в C#',
                'LINQ',
                'Обработка исключений',
                'Работа с файлами',
                'SQL Server',
                'Entity Framework Core',
                'ASP.NET Core',
                'Создание REST API',
                'JWT Авторизация',
                'Архитектура приложений',
                'Git и GitHub',
                'Docker',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-hashtag',
                    title: 'C#',
                    color: 'text-purple-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-layer-group',
                    title: '.NET',
                    color: 'text-violet-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-globe',
                    title: 'ASP.NET Core',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-database',
                    title: 'SQL Server',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-table',
                    title: 'Entity Framework',
                    color: 'text-emerald-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-code-branch',
                    title: 'LINQ',
                    color: 'text-orange-500',
                },
                {
                    id: 7,
                    icon: 'fa-brands fa-docker',
                    title: 'Docker',
                    color: 'text-sky-500',
                },
                {
                    id: 8,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-red-500',
                },
            ],
        },


        // Курсы Душанбе
        {
            cert: '/certificate/scrachbg.png',
            id: 101,
            title: 'Scratch',
            duration: '2,5 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            place: "Душанбе",

            tags: ['Scratch', 'Game Development', 'Logic'],
            description: 'Создавай игры, анимации и интерактивные проекты, изучая основы программирования.',


            subTitle: '20',

            icon: 'fa-solid fa-puzzle-piece',
            iconBg: 'bg-orange-500/20',
            iconColor: 'text-orange-400',
            accentDark: 'from-orange-500/20 to-transparent',

            category: 'Программирование для детей',
            border: 'hover:border-orange-500/40',
            glow: 'hover:shadow-orange-500/10',

            image: '/scrachImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '2,5 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Scratch — простой и увлекательный способ познакомиться с программированием через создание собственных игр и проектов.',

            metodichka: [
                'Знакомство со Scratch',
                'Интерфейс программы',
                'Спрайты и сцены',
                'Блоки движения',
                'События',
                'Переменные',
                'Циклы',
                'Условия',
                'Создание анимаций',
                'Создание игр',
                'Звуки и эффекты',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-puzzle-piece',
                    title: 'Scratch',
                    color: 'text-orange-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-gamepad',
                    title: 'Game Development',
                    color: 'text-violet-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-lightbulb',
                    title: 'Logic',
                    color: 'text-yellow-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-repeat',
                    title: 'Algorithms',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-film',
                    title: 'Animation',
                    color: 'text-pink-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-rocket',
                    title: 'Creative Projects',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/cert2-no-bg-preview (carve.photos).png',
            id: 102,
            title: 'App Inventor',
            duration: '2,5 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['App Inventor', 'Mobile Apps', 'Android'],

            description: 'Создание собственных мобильных приложений и игр для Android',

            subTitle:
                'Переход от блочных игр к созданию реальных полезных приложений для смартфонов',

            icon: 'fa-solid fa-mobile-screen-button',
            iconBg: 'bg-violet-500/20',
            iconColor: 'text-violet-400',
            accentDark: 'from-violet-500/20 to-transparent',

            category: 'Программирование для детей',
            border: 'hover:border-violet-500/40',
            glow: 'hover:shadow-violet-500/10',

            image: '/appinventorImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '2,5 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Ребенок увидит, что телефон — это не только инструмент для игр, но и мощная среда для реализации собственных инженерных и творческих идей',

            metodichka: [
                'Знакомство с MIT App Inventor',
                'Интерфейс Дизайнера и Блоков',
                'Компоненты экрана и разметка',
                'Обработка кликов и событий',
                'Работа с текстом и звуком',
                'Переменные и математика',
                'Условия и логические ветвления',
                'Использование холста (Canvas) и анимация',
                'Работа с датчиками смартфона (акселерометр)',
                'Хранение данных (TinyDB)',
                'Тестирование на реальном телефоне',
                'Публикация и финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-mobile-screen-button',
                    title: 'Mobile Apps',
                    color: 'text-violet-500',
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-android',
                    title: 'Android',
                    color: 'text-lime-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-puzzle-piece',
                    title: 'Block Programming',
                    color: 'text-orange-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-gears',
                    title: 'Logic & UI',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-database',
                    title: 'TinyDB',
                    color: 'text-yellow-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-rocket',
                    title: 'App Deployment',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/html&cssbg.png',
            id: 103,
            title: 'Frontend (HTML && CSS)',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['HTML', 'CSS'],
            description: 'Получи фундаментальные навыки frontend-разработки: от структуры HTML-страниц до адаптивного дизайна с помощью CSS. Создай собственные проекты и подготовься к изучению JavaScript.',
            subTitle: '1',
            icon: 'fa-solid fa-code',
            iconBg: 'bg-cyan-500/20',
            iconColor: 'text-cyan-400',
            accentDark: 'from-cyan-500/20 to-transparent',
            category: 'Разработка',
            border: 'hover:border-cyan-500/40',
            glow: 'hover:shadow-cyan-500/10',
            image: '/html&cssImage.png',
            information: [
                { id: 1, classIcon: 'fa-solid fa-chart-line', info: 'Уровень', infor: 'Beginer' },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],
            why: 'Идеальный фундамент для старта в веб-разработке и создания коммерческих проектов.',
            metodichka: [
                'Основы HTML',
                'Основы CSS',
                'Макеты и позиционирование',
                'Адаптивный дизайн',
                'Flexbox',
                'Переходы и анимация',
            ],
            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-html5',
                    title: 'HTML5',
                    color: 'text-red-500',
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-css3-alt',
                    title: 'CSS3',
                    color: 'text-blue-500',
                },
                {
                    id: 3,
                    icon: 'fa-brands fa-git-alt',
                    title: 'git && github',
                    color: 'text-orange-500',
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-microsoft',
                    title: 'VS Code',
                    color: 'text-blue-600',
                },
            ],
        },

        {
            cert: '/certificate/jsbg.png',
            id: 104,
            title: 'JavaScript',
            duration: '3 месяцев',
            level: 'Junior',
            levelColor: 'text-yellow-400',
            tags: ['JavaScript', 'ES6+', 'DOM'],
            description: 'Изучи JavaScript с нуля: от переменных и циклов до работы с DOM, API и асинхронным кодом. Создавай интерактивные приложения и подготовься к изучению React.',
            subTitle: '3',
            icon: 'fa-brands fa-js',
            iconBg: 'bg-yellow-500/20',
            iconColor: 'text-yellow-400',
            accentDark: 'from-yellow-500/20 to-transparent',
            category: 'Разработка',
            border: 'hover:border-yellow-500/40',
            glow: 'hover:shadow-yellow-500/10',
            image: '/jsImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Junior',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '3 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'JavaScript — один из ключевых языков веб-разработки, который позволяет превращать обычные сайты в интерактивные и функциональные приложения.',

            metodichka: [
                'Основы JavaScript',
                'Переменные и типы данных',
                'Условия и циклы',
                'Функции',
                'Массивы и объекты',
                'DOM и события',
                'Асинхронность',
                'Fetch API',
                'ES6+',
                'Модули',
                'Практические проекты',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-js',
                    title: 'JavaScript',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-brands fa-html5',
                    title: 'HTML5',
                    color: 'text-red-500',
                },
                {
                    id: 3,
                    icon: 'fa-brands fa-css3-alt',
                    title: 'CSS3',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-orange-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-code',
                    title: 'ES6+',
                    color: 'text-purple-500',
                },
            ],
        },

        {
            cert: '/certificate/pythonbg.png',
            id: 105,
            title: 'Python Developer',
            duration: '3 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Telegram bot', 'SQLite'],

            description: 'Python — отличный первый язык программирования, который помогает развить алгоритмическое мышление и подготовиться к дальнейшему изучению Web-разработки, AI и Data Science.',

            subTitle: '9',

            icon: 'fa-brands fa-python',
            iconBg: 'bg-blue-500/20',
            iconColor: 'text-blue-400',
            accentDark: 'from-blue-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-blue-500/40',
            glow: 'hover:shadow-blue-500/10',

            image: '/pythonImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '3 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Простой для старта — понятный синтаксис позволяет быстро освоить основы программирования.',

            metodichka: [
                'Введение в Python',
                'Переменные и типы данных',
                'Условия и циклы',
                'Функции',
                'Списки и словари',
                'Работа с файлами',
                'Модули и пакеты',
                'Обработка ошибок',
                'SQLite и базы данных',
                'Создание REST API',
                'Практические проекты',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-python',
                    title: 'Python',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-database',
                    title: 'SQL',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-bolt',
                    title: 'Flask',
                    color: 'text-slate-400',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-code',
                    title: 'REST API',
                    color: 'text-cyan-500',
                },
                {
                    id: 7,
                    icon: 'fa-solid fa-server',
                    title: 'Backend',
                    color: 'text-violet-500',
                },
            ],
        },

        {
            cert: '/certificate/kidsbg.png',
            id: 106,
            title: 'Компьютерная грамотность',
            duration: '2 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Компьютер', 'Windows', 'Office', 'Internet'],

            description: 'Освой компьютер с нуля и уверенно работай с современными цифровыми технологиями.',

            subTitle: '22',

            icon: 'fa-solid fa-computer',
            iconBg: 'bg-sky-500/20',
            iconColor: 'text-sky-400',
            accentDark: 'from-sky-500/20 to-transparent',

            category: 'Компьютерная грамотность',
            border: 'hover:border-sky-500/40',
            glow: 'hover:shadow-sky-500/10',

            image: '/kidsImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '3 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Компьютерная грамотность помогает уверенно пользоваться компьютером, современными программами и интернетом для учёбы, работы и повседневных задач.',

            metodichka: [
                'Основы работы с компьютером',
                'Windows и настройка системы',
                'Работа с файлами и папками',
                'Microsoft Word',
                'Microsoft Excel',
                'Microsoft PowerPoint',
                'Работа с интернетом',
                'Электронная почта',
                'Безопасность в интернете',
                'Выпускной проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-windows',
                    title: 'Windows',
                    color: 'text-blue-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-file-word',
                    title: 'Word',
                    color: 'text-blue-600',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-file-excel',
                    title: 'Excel',
                    color: 'text-green-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-file-powerpoint',
                    title: 'PowerPoint',
                    color: 'text-orange-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-globe',
                    title: 'Internet',
                    color: 'text-cyan-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-shield-halved',
                    title: 'Cyber Security',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/sqlbg.png',
            id: 107,
            title: 'Data Analytics',
            duration: '2 месяцев',
            level: 'Intermediate',
            levelColor: 'text-blue-400',

            tags: ['Excel', 'BI'],

            subTitle:
                'Превращение сырых цифр в бизнес-решения с помощью программирования и математической статистики',

            icon: 'fa-solid fa-chart-pie',
            iconBg: 'bg-blue-500/20',
            iconColor: 'text-blue-400',
            accentDark: 'from-blue-500/20 to-transparent',

            category: 'Анализ данных и AI',
            border: 'hover:border-blue-500/40',
            glow: 'hover:shadow-blue-500/10',

            image: '/dataanalyticsImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Intermediate',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '2 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Студенты научатся автоматизировать рутинные отчеты, находить скрытые закономерности в терабайтах информации и говорить со сложным бизнесом на понятном языке графиков',

            metodichka: [
                'Введение в Data Analytics',
                'Работа с библиотеками NumPy и Pandas',
                'Очистка данных и обработка пропусков',
                'Основы статистики и проверка гипотез',
                'Визуализация данных (Matplotlib, Seaborn)',
                'Построение дашбордов в BI-системах',
                'Разведочный анализ данных (EDA)',
                'Анализ продуктовых метрик и A/B тесты',
                'Парсинг данных из веб-источников и API',
                'Защита дипломного бизнес-кейса',
            ],

            technologies: [
                {
                    id: 3,
                    icon: 'fa-solid fa-table',
                    title: 'Pandas & NumPy',
                    color: 'text-indigo-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-chart-column',
                    title: 'PowerBI / Tableau',
                    color: 'text-yellow-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-calculator',
                    title: 'Statistics',
                    color: 'text-pink-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-square-poll-vertical',
                    title: 'Data Visualization',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/csharpbg.png',
            id: 108,
            title: 'C# Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['C#', '.NET', 'SQL Server', 'Backend'],

            description: 'Освой C# и .NET и научись создавать современные серверные приложения, API и полноценные backend-системы.',

            subTitle: '24',

            icon: 'fa-solid fa-code',
            iconBg: 'bg-purple-500/20',
            iconColor: 'text-purple-400',
            accentDark: 'from-purple-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-purple-500/40',
            glow: 'hover:shadow-purple-500/10',

            image: '/csharpImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '2 раза по 2ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'C# и .NET — мощные технологии для разработки веб-приложений, API, CRM-систем и корпоративных решений.',

            metodichka: [
                'Основы C#',
                'Типы данных',
                'Условия и циклы',
                'Методы и функции',
                'Коллекции',
                'ООП в C#',
                'LINQ',
                'Обработка исключений',
                'Работа с файлами',
                'SQL Server',
                'Entity Framework Core',
                'ASP.NET Core',
                'Создание REST API',
                'JWT Авторизация',
                'Архитектура приложений',
                'Git и GitHub',
                'Docker',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-hashtag',
                    title: 'C#',
                    color: 'text-purple-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-layer-group',
                    title: '.NET',
                    color: 'text-violet-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-globe',
                    title: 'ASP.NET Core',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-database',
                    title: 'SQL Server',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-table',
                    title: 'Entity Framework',
                    color: 'text-emerald-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-code-branch',
                    title: 'LINQ',
                    color: 'text-orange-500',
                },
                {
                    id: 7,
                    icon: 'fa-brands fa-docker',
                    title: 'Docker',
                    color: 'text-sky-500',
                },
                {
                    id: 8,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-red-500',
                },
            ],
        },

        {
            cert: '/certificate/csharpbg.png',
            id: 109,
            title: 'Спортивное программирование',
            duration: '6 месяцев',
            level: 'Advanced',
            levelColor: 'text-indigo-400',

            tags: ['C++', 'Algorithms', 'Logic', 'Competitive Programming'],

            description:
                'Развивай алгоритмическое мышление и учись быстро находить эффективные решения сложных задач.',

            icon: 'fa-solid fa-trophy',
            iconBg: 'bg-indigo-500/20',
            iconColor: 'text-indigo-400',
            accentDark: 'from-indigo-500/20 to-transparent',

            category: 'Профессиональное программирование',
            border: 'hover:border-indigo-500/40',
            glow: 'hover:shadow-indigo-500/10',

            image: '/cppImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Advanced',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '6 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Развивай логику, скорость мышления и навыки решения алгоритмических задач, необходимые для участия в олимпиадах и соревнованиях по программированию.',

            metodichka: [
                'Основы C++ для спортивного программирования',
                'Сложность алгоритмов и оценка времени выполнения',
                'Условные операторы и циклы',
                'Массивы, строки и двумерные массивы',
                'Функции и рекурсия',
                'Сортировка и эффективный поиск',
                'Два указателя и скользящее окно',
                'Префиксные суммы и разностные массивы',
                'Структуры данных: Stack, Queue, Set, Map',
                'Жадные алгоритмы',
                'Графы и алгоритмы на графах',
                'Динамическое программирование',
                'Математические и числовые алгоритмы',
                'Решение олимпиадных задач и подготовка к соревнованиям',
                'Финальный турнир по спортивному программированию',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-code',
                    title: 'C++',
                    color: 'text-indigo-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-brain',
                    title: 'Algorithms',
                    color: 'text-cyan-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-database',
                    title: 'Data Structures',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-magnifying-glass',
                    title: 'Problem Solving',
                    color: 'text-amber-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-chart-line',
                    title: 'Dynamic Programming',
                    color: 'text-pink-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-trophy',
                    title: 'Competitive Programming',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/mincraftbg.png',
            id: 110,
            title: 'Microsoft Excel',
            duration: '2 месяцев',
            level: 'Intermediate',
            levelColor: 'text-emerald-400',

            tags: ['Excel', 'Data Analysis', 'Formulas', 'VBA'],

            description:
                'Укрощение больших объемов данных, построение сложных графиков и превращение рутинной работы в один клик',

            icon: 'fa-solid fa-table',
            iconBg: 'bg-emerald-500/20',
            iconColor: 'text-emerald-400',
            accentDark: 'from-emerald-500/20 to-transparent',

            category: 'Офисные технологии и аналитика',
            border: 'hover:border-emerald-500/40',
            glow: 'hover:shadow-emerald-500/10',

            image: '/excelImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Intermediate',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '2 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Excel помогает быстро обрабатывать данные, автоматизировать расчёты, создавать отчёты и представлять информацию в удобном виде.',

            metodichka: [
                'Знакомство с интерфейсом Excel, горячие клавиши и типы данных',
                'Базовые формулы, абсолютные и относительные ссылки',
                'Логические функции и ветвление (ЕСЛИ, И, ИЛИ)',
                'Функции поиска и связывания данных (ВПР, ГПР, ИНДЕКС, ПОИСКПОЗ)',
                'Текстовые и математические функции для чистки данных',
                'Умные таблицы, сортировка и продвинутая фильтрация',
                'Условное форматирование для визуального выделения трендов',
                'Сводные таблицы (Pivot Tables): группировка данных и срезы',
                'Инструменты анализа «Что-Если», подбор параметра и поиск решения',
                'Построение профессиональных дашбордов и продвинутых диаграмм',
                'Введение в Power Query для импорта и трансформации данных',
                'Основы автоматизации: запись макросов и знакомство с VBA',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-table',
                    title: 'Excel Core',
                    color: 'text-emerald-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-calculator',
                    title: 'Advanced Formulas',
                    color: 'text-green-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-chart-pie',
                    title: 'Pivot Tables',
                    color: 'text-cyan-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-chart-line',
                    title: 'Dashboards',
                    color: 'text-blue-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-filter',
                    title: 'Power Query',
                    color: 'text-yellow-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-bolt',
                    title: 'Macros & VBA',
                    color: 'text-amber-500',
                },
            ],
        },

        {
            id: 111,
            title: 'React Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',
            tags: ['JavaScript', 'React', 'Redux', 'Redux/toolkit', 'API'],
            description: 'Изучи React и научись создавать быстрые, интерактивные и масштабируемые интерфейсы. Работай с компонентами, управляй состоянием приложения и разрабатывай реальные проекты от идеи до готового продукта.',
            subTitle: '5',

            icon: 'fa-brands fa-react',
            iconBg: 'bg-violet-500/20',
            iconColor: 'text-violet-400',
            accentDark: 'from-violet-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-violet-500/40',
            glow: 'hover:shadow-violet-500/10',

            image: '/reactImage.png',
            cert: '/certificate/jsbg.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1.5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'React — популярная JavaScript-библиотека для создания пользовательских интерфейсов. Она помогает разрабатывать современные веб-приложения, разделять интерфейс на переиспользуемые компоненты и эффективно управлять данными.',

            metodichka: [
                'Основы React',
                'JSX',
                'Компоненты',
                'Props и State',
                'useState',
                'useEffect',
                'React Router',
                'Работа с API',
                'Axios',
                'Redux Toolkit',
                'Firebase',
                'Авторизация',
                'Оптимизация приложений',
                'Деплой проекта',
            ],

            technologies: [
                {
                    id: 2,
                    icon: 'fa-brands fa-js',
                    title: 'JavaScript',
                    color: 'text-yellow-400',
                },
                {
                    id: 1,
                    icon: 'fa-brands fa-react',
                    title: 'React',
                    color: 'text-cyan-400',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-bolt',
                    title: 'Redux Toolkit',
                    color: 'text-violet-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-route',
                    title: 'React Router',
                    color: 'text-red-500',
                },
                {
                    id: 7,
                    icon: 'fa-solid fa-server',
                    title: 'REST API',
                    color: 'text-emerald-500',
                },
                {
                    id: 8,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-orange-500',
                },
            ],
        },

        {
            cert: '/certificate/kidsbg.png',
            id: 112,
            title: 'Graphic Design',
            duration: '4 месяца',
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Design', 'Photoshop', 'Illustrator', 'Figma'],

            description:
                'Визуализация идей, создание стильной графики и разработка коммерческих дизайн-проектов с нуля',

            icon: 'fa-solid fa-palette',
            iconBg: 'bg-pink-500/20',
            iconColor: 'text-pink-400',
            accentDark: 'from-pink-500/20 to-transparent',

            category: 'Дизайн и креатив',
            border: 'hover:border-pink-500/40',
            glow: 'hover:shadow-pink-500/10',

            image: '/graphicdesignImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '2 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Графический дизайн помогает развить креативность, визуальное мышление и научиться превращать идеи в качественные и привлекательные дизайны.',

            metodichka: [
                'Введение в графический дизайн: основы композиции и визуальной иерархии',
                'Теория цвета (колористика) и работа с цветовыми палитрами',
                'Типографика: анатомия шрифтов, подбор и сочетание шрифтовых пар',
                'Знакомство с Adobe Photoshop: интерфейс, слои, базовые инструменты',
                'Растровая графика: ретушь фотографий, цветокоррекция и коллажирование',
                'Знакомство с Adobe Illustrator: работа с векторными контурами и шейпами',
                'Векторная графика: создание иллюстраций, иконок и персонажей',
                'Разработка логотипов и основы фирменного стиля (айдентика)',
                'Работа в Figma: создание макетов для соцсетей, баннеров и полиграфии',
                'Подготовка макетов к печати (допечатная подготовка / Prepress)',
                'Психология восприятия в дизайне и бриф от реального заказчика',
                'Оформление портфолио на Behance и презентация финального проекта',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-solid fa-palette',
                    title: 'Design Theory',
                    color: 'text-pink-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-bezier-curve',
                    title: 'Adobe Illustrator',
                    color: 'text-orange-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-wand-magic-sparkles',
                    title: 'Adobe Photoshop',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-brands fa-figma',
                    title: 'Figma',
                    color: 'text-violet-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-font',
                    title: 'Typography',
                    color: 'text-yellow-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-briefcase',
                    title: 'Branding & Identity',
                    color: 'text-emerald-500',
                },
            ],
        },

        {
            cert: '/certificate/html&cssbg.png',
            id: 113,
            title: 'UI/UX Designer',
            duration: '4 месяцев',
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['Figma', 'UI Design', 'UX', 'Prototyping'],

            description: 'Освой UX/UI-дизайн и научись создавать удобные, современные и привлекательные интерфейсы для сайтов и мобильных приложений.',

            subTitle: '7',

            icon: 'fa-solid fa-paintbrush',
            iconBg: 'bg-rose-500/20',
            iconColor: 'text-rose-400',
            accentDark: 'from-rose-500/20 to-transparent',

            category: 'Дизайн',
            border: 'hover:border-rose-500/40',
            glow: 'hover:shadow-rose-500/10',

            image: '/desigImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'UX/UI помогает создавать интерфейсы, которые не только красиво выглядят, но и удобны для пользователей',

            metodichka: [
                'Введение в UI/UX',
                'Основы композиции',
                'Цвет и типографика',
                'UX-исследования',
                'Пользовательские сценарии',
                'Wireframes',
                'Прототипирование',
                'Работа в Figma',
                'Создание дизайн-систем',
                'Мобильный дизайн',
                'Адаптивный дизайн',
                'Подготовка макетов для разработки',
                'Портфолио дизайнера',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-figma',
                    title: 'Figma',
                    color: 'text-purple-500',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-palette',
                    title: 'UI Design',
                    color: 'text-pink-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-user-check',
                    title: 'UX Research',
                    color: 'text-cyan-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-diagram-project',
                    title: 'Wireframing',
                    color: 'text-amber-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-mobile-screen',
                    title: 'Responsive Design',
                    color: 'text-emerald-500',
                },
                {
                    id: 6,
                    icon: 'fa-solid fa-bezier-curve',
                    title: 'Prototyping',
                    color: 'text-rose-500',
                },
            ],
        },

        {
            cert: '/certificate/djangobg.png',
            id: 114,
            title: 'Python Django Developer',
            duration: '4 месяцев',
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],

            description: 'Перейди на продвинутый уровень Python и научись создавать сложные, структурированные и эффективные программы.',

            subTitle: '14',

            icon: 'fa-brands fa-python',
            iconBg: 'bg-green-500/20',
            iconColor: 'text-green-400',
            accentDark: 'from-green-500/20 to-transparent',

            category: 'Разработка',
            border: 'hover:border-green-500/40',
            glow: 'hover:shadow-green-500/10',

            image: '/djangoImage.png',

            information: [
                {
                    id: 1,
                    classIcon: 'fa-solid fa-chart-line',
                    info: 'Уровень',
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: 'Длительность',
                    infor: '4 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: 'Занятность',
                    infor: '3 раза по 1,5ч/нед',
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: 'Формат',
                    infor: 'Офлайн',
                },
            ],

            why: 'Продвинутый Python помогает глубже понять программирование, писать качественный код и работать над более сложными реальными проектами.',

            metodichka: [
                'Основы Python',
                'ООП в Python',
                'Работа с файлами',
                'SQLite и PostgreSQL',
                'Введение в Django',
                'MVT Архитектура',
                'Модели и ORM',
                'Шаблоны Django',
                'Формы и валидация',
                'Аутентификация пользователей',
                'Права доступа',
                'Django REST Framework',
                'Создание REST API',
                'JWT Авторизация',
                'Работа с Docker',
                'Деплой проекта',
                'Git и GitHub',
                'Финальный проект',
            ],

            technologies: [
                {
                    id: 1,
                    icon: 'fa-brands fa-python',
                    title: 'Python',
                    color: 'text-yellow-400',
                },
                {
                    id: 2,
                    icon: 'fa-solid fa-globe',
                    title: 'Django',
                    color: 'text-emerald-500',
                },
                {
                    id: 3,
                    icon: 'fa-solid fa-database',
                    title: 'PostgreSQL',
                    color: 'text-blue-500',
                },
                {
                    id: 4,
                    icon: 'fa-solid fa-code',
                    title: 'REST API',
                    color: 'text-cyan-500',
                },
                {
                    id: 5,
                    icon: 'fa-solid fa-key',
                    title: 'JWT Auth',
                    color: 'text-orange-500',
                },
                {
                    id: 6,
                    icon: 'fa-brands fa-docker',
                    title: 'Docker',
                    color: 'text-sky-500',
                },
                {
                    id: 7,
                    icon: 'fa-brands fa-git-alt',
                    title: 'Git & GitHub',
                    color: 'text-red-500',
                },
                {
                    id: 8,
                    icon: 'fa-solid fa-server',
                    title: 'Backend',
                    color: 'text-violet-500',
                },
            ],
        },
    ];

    const course = courses.find(e => e.id == id)
    console.log(course.information);


    return (
        <div className="min-h-screen  font-sans pb-20">

            {/* Navigation */}
            <div className="max-w-300 mx-auto px-4 pt-6">
                <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#12304A] transition-colors group"
                >
                    <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                    К списку курсов
                </Link>
            </div>

            <main className="max-w-300 mx-auto px-4 mt-8 space-y-5">

                {/* HERO */}
                <section className="relative overflow-hidden rounded-3xl bg-[#12304A] text-white p-6 md:p-10">

                    {/* Decorative circles */}
                    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#ff9735]/10"></div>
                    <div className="absolute -right-10 bottom-[-100px] w-64 h-64 rounded-full bg-white/5"></div>

                    <div className="relative z-10 grid lg:grid-cols-[1fr_320px] gap-10 items-center">

                        {/* Left */}
                        <div>

                            <div className="flex flex-wrap items-center gap-3 mb-5">

                                <span className="px-3 py-1.5 rounded-full bg-[#ff9735] text-white text-xs font-semibold">
                                    {course.level}
                                </span>

                                <span className="text-xs text-white/50">
                                    ID: {course.id}
                                </span>

                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
                                {course.title}
                            </h1>

                            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-7">
                                {course.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {course.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs text-white/80"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all bg-[#ff9735] text-white hover:bg-[#ff8410]  hover:shadow-orange-500/20"
                            >
                                {t("navbar.Оставить заявку")}


                            </Link>

                        </div>

                        {/* Right Course Preview */}
                        <div className="hidden lg:flex justify-center">

                            <div className="w-full max-w-70 aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">

                                <div className="w-24 h-24 rounded-2xl bg-[#ff9735]/15 flex items-center justify-center mb-5">
                                    <i className="fa-solid fa-code text-5xl text-[#ff9735]"></i>
                                </div>

                                <div className="text-center">
                                    <div className="text-sm text-white/50 mb-1">
                                        Длительность
                                    </div>

                                    <div className="text-xl font-bold">
                                        {course.duration}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* INFORMATION */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                    {course.information?.map((item) => (

                        <div
                            key={item.id}
                            className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-[#ff9735]/40 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-200"
                        >

                            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 flex items-center justify-center mb-4">
                                <i className={`${item.classIcon} text-[#12304A]`}></i>
                            </div>

                            <div className="text-xs text-slate-400 mb-1">
                                {item.info}
                            </div>

                            <div className="text-sm font-bold text-slate-800">
                                {item.infor}
                            </div>

                        </div>

                    ))}

                </section>


                {/* WHY COURSE */}
                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="flex items-start gap-4">

                        <div className="shrink-0 w-11 h-11 rounded-xl bg-[#ff9735]/10 flex items-center justify-center">
                            <i className="fa-solid fa-circle-question text-[#ff9735]"></i>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Почему этот курс?
                            </h3>

                            <p className="text-sm text-slate-500 leading-7 max-w-4xl">
                                {course.why}
                            </p>
                        </div>

                    </div>

                </section>


                {/* TECHNOLOGIES */}
                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="flex items-center justify-between mb-6">

                        <div>
                            <h3 className="text-lg font-bold text-slate-900">
                                Стек технологий
                            </h3>

                            <p className="text-sm text-slate-400 mt-1">
                                Технологии, которые вы изучите
                            </p>
                        </div>

                        <i className="fa-solid fa-layer-group text-xl text-[#12304A]"></i>

                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

                        {course.technologies?.map((tech) => (

                            <div
                                key={tech.id}
                                className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#ff9735]/40 hover:shadow-md transition-all"
                            >

                                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                                    <i className={`${tech.icon} text-xl ${tech.color}`}></i>
                                </div>

                                <span className="text-sm font-semibold text-slate-700">
                                    {tech.title}
                                </span>

                            </div>

                        ))}

                    </div>

                </section>


                {/* PROGRAM */}
                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="mb-6">

                        <div className="flex items-center gap-3 mb-1">

                            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 flex items-center justify-center">
                                <i className="fa-solid fa-list-check text-[#12304A]"></i>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900">
                                Программа обучения
                            </h3>

                        </div>

                        <p className="text-sm text-slate-400 ml-13">
                            Основные темы курса
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        {course.metodichka?.map((theme, idx) => (

                            <div
                                key={idx}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#ff9735]/40 hover:bg-white transition-all"
                            >

                                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#12304A] text-white flex items-center justify-center text-xs font-bold">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>

                                <span className="text-sm font-medium text-slate-700">
                                    {theme}
                                </span>

                                <i className="fa-solid fa-chevron-right ml-auto text-xs text-slate-300 group-hover:text-[#ff9735] transition-colors"></i>

                            </div>

                        ))}

                    </div>

                </section>


                {/* BOTTOM CTA */}
                <section className="rounded-2xl bg-gradient-to-r from-[#12304A] to-[#17496d] p-7 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">

                    <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            Готовы начать обучение?
                        </h3>

                        <p className="text-sm text-white/60">
                            Оставьте заявку и мы свяжемся с вами.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold bg-[#ff9735] text-white hover:bg-[#ff8410]"
                    >
                        Оставить заявку
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                    </Link>

                </section>

            </main>

        </div>
    );
}