import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

export default function CourseById() {
    const { id } = useParams();
    const { t } = useTranslation()

    const courses = [
        {
            id: 1,
            title: 'Frontend (HTML && CSS)',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['HTML', 'CSS'],
            description: t("courseById.Получи фундаментальные навыки frontend-разработки от структуры HTML-страниц до адаптивного дизайна с помощью CSS. Создай собственные проекты и подготовься к изучению JavaScript"),
            subTitle: '1',
            information: [
                { id: 1, classIcon: 'fa-solid fa-chart-line', info: t("information.Уровень"), infor: 'Beginer' },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
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
            duration: t("information.4 месяцев"),
            level: 'Junior',
            levelColor: 'text-yellow-400',
            tags: ['JavaScript', 'ES6+', 'DOM'],
            description: t("courseById.Изучи JavaScript с нуля от переменных и циклов до работы с DOM, API и асинхронным кодом. Создавай интерактивные приложения и подготовься к изучению React"),
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
                    info: t("information.Уровень"),
                    infor: 'Junior',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.JavaScript — один из ключевых языков веб-разработки, который позволяет превращать обычные сайты в интерактивные и функциональные приложения"),

            metodichka: [
                t("courseById.Основы JavaScript"),
                t("courseById.Переменные и типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Функции"),
                t("courseById.Массивы и объекты"),
                t("courseById.DOM и события"),
                t("courseById.Асинхронность"),
                t("courseById.Fetch API"),
                t("courseById.ES6+"),
                t("courseById.Модули"),
                t("courseById.Практические проекты"),
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
            duration: t("information.4 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',
            tags: ['JavaScript', 'React', 'Redux', 'Redux/toolkit', 'API'],
            description: t("courseById.Изучи React и научись создавать быстрые, интерактивные и масштабируемые интерфейсы. Работай с компонентами, управляй состоянием приложения и разрабатывай реальные проекты от идеи до готового продукта"),
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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.React — популярная JavaScript-библиотека для создания пользовательских интерфейсов. Она помогает разрабатывать современные веб-приложения, разделять интерфейс на переиспользуемые компоненты и эффективно управлять данными"),

            metodichka: [
                t("courseById.Основы React"),
                t("courseById.JSX"),
                t("courseById.Компоненты"),
                t("courseById.Props и State"),
                t("courseById.useState"),
                t("courseById.useEffect"),
                t("courseById.React Router"),
                t("courseById.Работа с API"),
                t("courseById.Axios"),
                t("courseById.Redux Toolkit"),
                t("courseById.Firebase"),
                t("courseById.Авторизация"),
                t("courseById.Оптимизация приложений"),
                t("courseById.Деплой проекта"),
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
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['Figma', 'UI Design', 'UX', 'Prototyping'],

            description: t("courseById.Изучи основы UX/UI-дизайна, научись проектировать пользовательский опыт и создавать современные интерфейсы сайтов и мобильных приложений. Превращай идеи в стильные и удобные цифровые продукты"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.3 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.UX/UI-дизайн объединяет удобство использования и визуальную привлекательность цифровых продуктов. Он помогает создавать сайты и приложения, которыми людям приятно и легко пользоваться"),

            metodichka: [
                t("courseById.Введение в UI/UX"),
                t("courseById.Основы композиции"),
                t("courseById.Цвет и типографика"),
                t("courseById.UX-исследования"),
                t("courseById.Пользовательские сценарии"),
                t("courseById.Wireframes"),
                t("courseById.Прототипирование"),
                t("courseById.Работа в Figma"),
                t("courseById.Создание дизайн-систем"),
                t("courseById.Мобильный дизайн"),
                t("courseById.Адаптивный дизайн"),
                t("courseById.Подготовка макетов для разработки"),
                t("courseById.Портфолио дизайнера"),
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
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Telegram bot', 'SQLite'],

            description: t("courseById.Python — отличный первый язык программирования, который помогает развить алгоритмическое мышление и подготовиться к дальнейшему изучению Web-разработки, AI и Data Science"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Простой для старта — понятный синтаксис позволяет быстро освоить основы программирования"),

            metodichka: [
                t("courseById.Введение в Python"),
                t("courseById.Переменные и типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Функции"),
                t("courseById.Списки и словари"),
                t("courseById.Работа с файлами"),
                t("courseById.Модули и пакеты"),
                t("courseById.Обработка ошибок"),
                t("courseById.SQLite и базы данных"),
                t("courseById.Создание REST API"),
                t("courseById.Практические проекты"),
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
            duration: t("information.4 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Flutter', 'Dart', 'Firebase'],

            description: t("courseById.Создавай современные мобильные приложения для Android с помощью Kotlin"),

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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Kotlin — современный язык разработки Android-приложений, который позволяет создавать быстрые, удобные и масштабируемые мобильные приложения"),

            metodichka: [
                t("courseById.Введение в Flutter"),
                t("courseById.Основы Dart"),
                t("courseById.Виджеты Flutter"),
                t("courseById.Навигация между экранами"),
                t("courseById.Управление состоянием"),
                t("courseById.Работа с API"),
                t("courseById.Firebase Authentication"),
                t("courseById.Cloud Firestore"),
                t("courseById.Хранение данных"),
                t("courseById.Push-уведомления"),
                t("courseById.Архитектура приложений"),
                t("courseById.Оптимизация производительности"),
                t("courseById.Публикация в Play Market"),
                t("courseById.Публикация в App Store"),
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
            duration: t("information.4 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],

            description: t("courseById.Создавай мощные веб-приложения и серверную часть современных сайтов"),

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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Python + Django — практичный стек для backend-разработки, который позволяет создавать полноценные веб-сервисы, API, CRM и другие современные приложения"),

            metodichka: [
                t("courseById.Основы Python"),
                t("courseById.ООП в Python"),
                t("courseById.Работа с файлами"),
                t("courseById.SQLite и PostgreSQL"),
                t("courseById.Введение в Django"),
                t("courseById.MVT Архитектура"),
                t("courseById.Модели и ORM"),
                t("courseById.Шаблоны Django"),
                t("courseById.Формы и валидация"),
                t("courseById.Аутентификация пользователей"),
                t("courseById.Права доступа"),
                t("courseById.Django REST Framework"),
                t("courseById.Создание REST API"),
                t("courseById.JWT Авторизация"),
                t("courseById.Деплой проекта"),
                t("courseById.Git и GitHub"),
                t("courseById.Финальный проект"),
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
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Minecraft', 'Game Dev'],

            description: t("courseById.Научись программировать через создание игр и проектов в Minecraft"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.3 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Minecraft превращает обучение программированию в игру ученики сразу видят результат своего кода и учатся создавать собственные решения"),

            metodichka: [
                t("courseById.Знакомство с Python"),
                t("courseById.Переменные и типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Функции"),
                t("courseById.Списки и словари"),
                t("courseById.Работа с Minecraft API"),
                t("courseById.Создание игровых объектов"),
                t("courseById.Автоматизация действий"),
                t("courseById.Игровая логика"),
                t("courseById.Создание мини-игр"),
                t("courseById.Проектирование уровней"),
                t("courseById.Финальный проект"),
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
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['SQL', 'PostgreSQL', 'Database'],

            description: t("courseById.Научись хранить, обрабатывать и управлять данными как настоящий разработчик"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.3 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.SQL и базы данных — основа большинства современных веб-приложений, CRM, интернет-магазинов и других цифровых систем"),

            metodichka: [
                t("courseById.Введение в базы данных"),
                t("courseById.Основы SQL"),
                t("courseById.SELECT запросы"),
                t("courseById.WHERE и фильтрация"),
                t("courseById.Сортировка данных"),
                t("courseById.JOIN операции"),
                t("courseById.GROUP BY и агрегатные функции"),
                t("courseById.Подзапросы"),
                t("courseById.Создание таблиц"),
                t("courseById.Связи между таблицами"),
                t("courseById.Нормализация данных"),
                t("courseById.PostgreSQL"),
                t("courseById.Индексы"),
                t("courseById.Оптимизация запросов"),
                t("courseById.Финальный проект"),
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
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Scratch', 'Game Development', 'Logic'],

            description: t("courseById.Создавай игры, анимации и интерактивные проекты, изучая основы программирования"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2,5 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Scratch — простой и увлекательный способ познакомиться с программированием через создание собственных игр и проектов"),

            metodichka: [
                t("courseById.Знакомство со Scratch"),
                t("courseById.Интерфейс программы"),
                t("courseById.Спрайты и сцены"),
                t("courseById.Блоки движения"),
                t("courseById.События"),
                t("courseById.Переменные"),
                t("courseById.Циклы"),
                t("courseById.Условия"),
                t("courseById.Создание анимаций"),
                t("courseById.Создание игр"),
                t("courseById.Звуки и эффекты"),
                t("courseById.Финальный проект"),
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
            duration: t("information.2 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Компьютер', 'Windows', 'Office', 'Internet'],

            description: t("courseById.Освой компьютер с нуля и уверенно работай с современными цифровыми технологиями"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Компьютерная грамотность помогает уверенно пользоваться компьютером, современными программами и интернетом для учёбы, работы и повседневных задач"),

            metodichka: [
                t("courseById.Основы работы с компьютером"),
                t("courseById.Windows и настройка системы"),
                t("courseById.Работа с файлами и папками"),
                t("courseById.Microsoft Word"),
                t("courseById.Microsoft Excel"),
                t("courseById.Microsoft PowerPoint"),
                t("courseById.Работа с интернетом"),
                t("courseById.Электронная почта"),
                t("courseById.Безопасность в интернете"),
                t("courseById.Выпускной проект"),
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
            duration: t("information.3 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['C#', '.NET', 'SQL Server', 'Backend'],

            description: t("courseById.Освой C# и .NET и научись создавать современные серверные приложения, API и полноценные backend-системы"),

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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.3 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.2 раза по 2ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.C# и .NET — мощные технологии для разработки веб-приложений, API, CRM-систем и корпоративных решений"),

            metodichka: [
                t("courseById.Основы C#"),
                t("courseById.Типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Методы и функции"),
                t("courseById.Коллекции"),
                t("courseById.ООП в C#"),
                t("courseById.LINQ"),
                t("courseById.Обработка исключений"),
                t("courseById.Работа с файлами"),
                t("courseById.SQL Server"),
                t("courseById.Entity Framework Core"),
                t("courseById.ASP.NET Core"),
                t("courseById.Создание REST API"),
                t("courseById.JWT Авторизация"),
                t("courseById.Архитектура приложений"),
                t("courseById.Git и GitHub"),
                t("courseById.Docker"),
                t("courseById.Финальный проект"),
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
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            place: "Душанбе",

            tags: ['Scratch', 'Game Development', 'Logic'],
            description: t("courseById.Создавай игры, анимации и интерактивные проекты, изучая основы программирования"),


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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2,5 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Scratch — простой и увлекательный способ познакомиться с программированием через создание собственных игр и проектов"),

            metodichka: [
                t("courseById.Знакомство со Scratch"),
                t("courseById.Интерфейс программы"),
                t("courseById.Спрайты и сцены"),
                t("courseById.Блоки движения"),
                t("courseById.События"),
                t("courseById.Переменные"),
                t("courseById.Циклы"),
                t("courseById.Условия"),
                t("courseById.Создание анимаций"),
                t("courseById.Создание игр"),
                t("courseById.Звуки и эффекты"),
                t("courseById.Финальный проект"),
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
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['App Inventor', 'Mobile Apps', 'Android'],

            description: t("courseById.Создание собственных мобильных приложений и игр для Android"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2,5 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Ребенок увидит, что телефон — это не только инструмент для игр, но и мощная среда для реализации собственных инженерных и творческих идей"),

            metodichka: [
                t("courseById.Знакомство с MIT App Inventor"),
                t("courseById.Интерфейс Дизайнера и Блоков"),
                t("courseById.Компоненты экрана и разметка"),
                t("courseById.Обработка кликов и событий"),
                t("courseById.Работа с текстом и звуком"),
                t("courseById.Переменные и математика"),
                t("courseById.Условия и логические ветвления"),
                t("courseById.Использование холста (Canvas) и анимация"),
                t("courseById.Работа с датчиками смартфона (акселерометр)"),
                t("courseById.Хранение данных (TinyDB)"),
                t("courseById.Тестирование на реальном телефоне"),
                t("courseById.Публикация и финальный проект"),
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
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['HTML', 'CSS'],
            description: t("courseById.Получи фундаментальные навыки frontend-разработки от структуры HTML-страниц до адаптивного дизайна с помощью CSS. Создай собственные проекты и подготовься к изучению JavaScript"),
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
                { id: 1, classIcon: 'fa-solid fa-chart-line', info: t("information.Уровень"), infor: 'Beginer' },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],
            why: t("courseById.Идеальный фундамент для старта в веб-разработке и создания коммерческих проектов"),
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
            id: 104,
            title: 'JavaScript',
            duration: t("information.4 месяцев"),
            level: 'Junior',
            levelColor: 'text-yellow-400',
            tags: ['JavaScript', 'ES6+', 'DOM'],
            description: t("courseById.Изучи JavaScript с нуля от переменных и циклов до работы с DOM, API и асинхронным кодом. Создавай интерактивные приложения и подготовься к изучению React"),
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
                    info: t("information.Уровень"),
                    infor: 'Junior',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.JavaScript — один из ключевых языков веб-разработки, который позволяет превращать обычные сайты в интерактивные и функциональные приложения"),

            metodichka: [
                t("courseById.Основы JavaScript"),
                t("courseById.Переменные и типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Функции"),
                t("courseById.Массивы и объекты"),
                t("courseById.DOM и события"),
                t("courseById.Асинхронность"),
                t("courseById.Fetch API"),
                t("courseById.ES6+"),
                t("courseById.Модули"),
                t("courseById.Практические проекты"),
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
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Python', 'Telegram bot', 'SQLite'],

            description: t("courseById.Python — отличный первый язык программирования, который помогает развить алгоритмическое мышление и подготовиться к дальнейшему изучению Web-разработки, AI и Data Science"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Простой для старта — понятный синтаксис позволяет быстро освоить основы программирования"),

            metodichka: [
                t("courseById.Введение в Python"),
                t("courseById.Переменные и типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Функции"),
                t("courseById.Списки и словари"),
                t("courseById.Работа с файлами"),
                t("courseById.Модули и пакеты"),
                t("courseById.Обработка ошибок"),
                t("courseById.SQLite и базы данных"),
                t("courseById.Создание REST API"),
                t("courseById.Практические проекты"),
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
            duration: t("information.2 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Компьютер', 'Windows', 'Office', 'Internet'],

            description: t("courseById.Освой компьютер с нуля и уверенно работай с современными цифровыми технологиями"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Компьютерная грамотность помогает уверенно пользоваться компьютером, современными программами и интернетом для учёбы, работы и повседневных задач"),

            metodichka: [
                t("courseById.Основы работы с компьютером"),
                t("courseById.Windows и настройка системы"),
                t("courseById.Работа с файлами и папками"),
                t("courseById.Microsoft Word"),
                t("courseById.Microsoft Excel"),
                t("courseById.Microsoft PowerPoint"),
                t("courseById.Работа с интернетом"),
                t("courseById.Электронная почта"),
                t("courseById.Безопасность в интернете"),
                t("courseById.Выпускной проект"),
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
            duration: t("information.2 месяцев"),
            level: 'Intermediate',
            levelColor: 'text-blue-400',

            tags: ['Excel', 'BI'],

            description:
                t("courseById.Превращение сырых цифр в бизнес решения с помощью программирования и математической статистики"),

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
                    info: t("information.Уровень"),
                    infor: 'Intermediate',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Студенты научатся автоматизировать рутинные отчеты, находить скрытые закономерности в терабайтах информации и говорить со сложным бизнесом на понятном языке графиков"),

            metodichka: [
                t("courseById.Введение в Data Analytics"),
                t("courseById.Работа с библиотеками NumPy и Pandas"),
                t("courseById.Очистка данных и обработка пропусков"),
                t("courseById.Основы статистики и проверка гипотез"),
                t("courseById.Визуализация данных (Matplotlib, Seaborn)"),
                t("courseById.Построение дашбордов в BI-системах"),
                t("courseById.Разведочный анализ данных (EDA)"),
                t("courseById.Анализ продуктовых метрик и A/B тесты"),
                t("courseById.Парсинг данных из веб-источников и API"),
                t("courseById.Защита дипломного бизнес-кейса"),
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
            duration: t("information.6 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['C#', '.NET', 'SQL Server', 'Backend'],

            description:t("courseById.Освой C# и .NET и научись создавать современные серверные приложения, API и полноценные backend-системы"),

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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.6 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why:t("courseById.C# и .NET — мощные технологии для разработки веб-приложений, API, CRM-систем и корпоративных решений"),

            metodichka: [
                t("courseById.Основы C#"),
                t("courseById.Типы данных"),
                t("courseById.Условия и циклы"),
                t("courseById.Методы и функции"),
                t("courseById.Коллекции"),
                t("courseById.ООП в C#"),
                t("courseById.LINQ"),
                t("courseById.Обработка исключений"),
                t("courseById.Работа с файлами"),
                t("courseById.SQL Server"),
                t("courseById.Entity Framework Core"),
                t("courseById.ASP.NET Core"),
                t("courseById.Создание REST API"),
                t("courseById.JWT Авторизация"),
                t("courseById.Архитектура приложений"),
                t("courseById.Git и GitHub"),
                t("courseById.Docker"),
                t("courseById.Финальный проект"),
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
                    info: t("information.Уровень"),
                    infor: 'Advanced',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: '6 месяцев',
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
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
            duration: t("information.2 месяцев"),
            level: 'Intermediate',
            levelColor: 'text-emerald-400',

            tags: ['Excel', 'Data Analysis', 'Formulas', 'VBA'],

            description:
                t("courseById.Укрощение больших объемов данных, построение сложных графиков и превращение рутинной работы в один клик"),

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
                    info: t("information.Уровень"),
                    infor: 'Intermediate',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.2 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Excel помогает быстро обрабатывать данные, автоматизировать расчёты, создавать отчёты и представлять информацию в удобном виде"),

            metodichka: [
                t("courseById.Знакомство с интерфейсом Excel, горячие клавиши и типы данных"),
                t("courseById.Базовые формулы, абсолютные и относительные ссылки"),
                t("courseById.Логические функции и ветвление (ЕСЛИ, И, ИЛИ)"),
                t("courseById.Функции поиска и связывания данных (ВПР, ГПР, ИНДЕКС, ПОИСКПОЗ)"),
                t("courseById.Текстовые и математические функции для чистки данных"),
                t("courseById.Умные таблицы, сортировка и продвинутая фильтрация"),
                t("courseById.Условноеt форматрование для визуального выделения трендов"),
                t("courseById.Сводные таблицы (Pivot Tables): группировка данных и срезы"),
                t("courseById.Инструменты анализа «Что-Если», подбор параметра и поиск решения"),
                t("courseById.Построение профессиональных дашбордов и продвинутых диаграмм"),
                t("courseById.Введение в Power Query для импорта и трансформации данных"),
                t("courseById.Основы автоматизации: запись макросов и знакомство с VBA"),
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
            duration: t("information.4 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',
            tags: ['JavaScript', 'React', 'Redux', 'Redux/toolkit', 'API'],
            description: t("courseById.Изучи React и научись создавать быстрые, интерактивные и масштабируемые интерфейсы. Работай с компонентами, управляй состоянием приложения и разрабатывай реальные проекты от идеи до готового продукта"),
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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.React — популярная JavaScript-библиотека для создания пользовательских интерфейсов. Она помогает разрабатывать современные веб-приложения, разделять интерфейс на переиспользуемые компоненты и эффективно управлять данными"),

            metodichka: [
                t("courseById.Основы React"),
                t("courseById.JSX"),
                t("courseById.Компоненты"),
                t("courseById.Props и State"),
                t("courseById.useState"),
                t("courseById.useEffect"),
                t("courseById.React Router"),
                t("courseById.Работа с API"),
                t("courseById.Axios"),
                t("courseById.Redux Toolkit"),
                t("courseById.Firebase"),
                t("courseById.Авторизация"),
                t("courseById.Оптимизация приложений"),
                t("courseById.Деплой проекта"),
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
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',

            tags: ['Design', 'Photoshop', 'Illustrator', 'Figma'],

            description:
            t("courseById.Визуализация идей, создание стильной графики и разработка коммерческих дизайн-проектов с нуля"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why:t("courseById.Графический дизайн помогает развить креативность, визуальное мышление и научиться превращать идеи в качественные и привлекательные дизайны"),

            metodichka: [
                t("courseById.Введение в графический дизайн основы композиции и визуальной иерархии"),
                t("courseById.Теория цвета (колористика) и работа с цветовыми палитрами"),
                t("courseById.Типографика анатомия шрифтов, подбор и сочетание шрифтовых пар"),
                t("courseById.Знакомство с Adobe Photoshop интерфейс, слои, базовые инструменты"),
                t("courseById.Растровая графика ретушь фотографий, цветокоррекция и коллажирование"),
                t("courseById.Знакомство с Adobe Illustrator работа с векторными контурами и шейпами"),
                t("courseById.Векторная графика создание иллюстраций, иконок и персонажей"),
                t("courseById.Разработка логотипов и основы фирменного стиля (айдентика)"),
                t("courseById.Работа в Figma создание макетов для соцсетей, баннеров и полиграфии"),
                t("courseById.Подготовка макетов к печати (допечатная подготовка / Prepress)"),
                t("courseById.Психология восприятия в дизайне и бриф от реального заказчика"),
                t("courseById.Оформление портфолио на Behance и презентация финального проекта"),
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
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            levelColor: 'text-emerald-400',
            tags: ['Figma', 'UI Design', 'UX', 'Prototyping'],

            description: t("courseById.Изучи основы UX/UI-дизайна, научись проектировать пользовательский опыт и создавать современные интерфейсы сайтов и мобильных приложений. Превращай идеи в стильные и удобные цифровые продукты"),

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
                    info: t("information.Уровень"),
                    infor: 'Beginner',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.3 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
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
            duration: t("information.4 месяцев"),
            level: 'Middle',
            levelColor: 'text-amber-400',

            tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],

            description: t("courseById.Перейди на продвинутыйt Python и научись создавать сложные, структурированные и эффективные программы"),

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
                    info: t("information.Уровень"),
                    infor: 'Middle',
                },
                {
                    id: 2,
                    classIcon: 'fa-solid fa-stopwatch',
                    info: t("information.Длительность"),
                    infor: t("information.4 месяцев"),
                },
                {
                    id: 3,
                    classIcon: 'fa-solid fa-calendar-check',
                    info: t("information.Занятность"),
                    infor: t("information.3 раза по 1,5ч/нед"),
                },
                {
                    id: 4,
                    classIcon: 'fa-solid fa-laptop',
                    info: t("information.Формат"),
                    infor: 'Офлайн',
                },
            ],

            why: t("courseById.Продвинутый Python помогает глубже понять программирование, писать качественный код и работать над более сложными реальными проектами"),

            metodichka: [
                t("courseById.Основы Python"),
                t("courseById.ООП в Python"),
                t("courseById.Работа с файлами"),
                t("courseById.SQLite и PostgreSQL"),
                t("courseById.Введение в Django"),
                t("courseById.MVT Архитектура"),
                t("courseById.Модели и ORM"),
                t("courseById.Шаблоны Django"),
                t("courseById.Формы и валидация"),
                t("courseById.Аутентификация пользователей"),
                t("courseById.Права доступа"),
                t("courseById.Django REST Framework"),
                t("courseById.Создание REST API"),
                t("courseById.JWT Авторизация"),
                t("courseById.Работа с Docker"),
                t("courseById.Деплой проекта"),
                t("courseById.Git и GitHub"),
                t("courseById.Финальный проект"),
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

            <div className="max-w-300 mx-auto px-4 pt-6">
                <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#12304A] transition-colors group"
                >
                    <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                    {t("information.К списку курсов")}
                </Link>
            </div>

            <main className="max-w-300 mx-auto px-4 mt-8 space-y-5">

                <section className="relative overflow-hidden rounded-3xl bg-[#12304A] text-white p-6 md:p-10">

                    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#ff9735]/10"></div>
                    <div className="absolute -right-10 bottom-[-100px] w-64 h-64 rounded-full bg-white/5"></div>

                    <div className="relative z-10 grid lg:grid-cols-[1fr_320px] gap-10 items-center">

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

                        <div className="hidden lg:flex justify-center">

                            <div className="w-full max-w-70 aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center">

                                <div className="w-24 h-24 rounded-2xl bg-[#ff9735]/15 flex items-center justify-center mb-5">
                                    <i className="fa-solid fa-code text-5xl text-[#ff9735]"></i>
                                </div>

                                <div className="text-center">
                                    <div className="text-sm text-white/50 mb-1">
                                        {t("information.Длительность")}
                                    </div>

                                    <div className="text-xl font-bold">
                                        {course.duration}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


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


                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="flex items-start gap-4">

                        <div className="shrink-0 w-11 h-11 rounded-xl bg-[#ff9735]/10 flex items-center justify-center">
                            <i className="fa-solid fa-circle-question text-[#ff9735]"></i>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {t("information.Почему этот курс")}
                            </h3>

                            <p className="text-sm text-slate-500 leading-7 max-w-4xl">
                                {course.why}
                            </p>
                        </div>

                    </div>

                </section>


                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="flex items-center justify-between mb-6">

                        <div>
                            <h3 className="text-lg font-bold text-slate-900">
                                {t("information.Стек технологий")}
                            </h3>

                            <p className="text-sm text-slate-400 mt-1">
                                {t("information.Технологии, которые вы изучите")}
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


                <section className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8">

                    <div className="mb-6">

                        <div className="flex items-center gap-3 mb-1">

                            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 flex items-center justify-center">
                                <i className="fa-solid fa-list-check text-[#12304A]"></i>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900">
                                {t("information.Программа обучения")}
                            </h3>

                        </div>

                        <p className="text-sm text-slate-400 ml-13">
                            {t("information.Основные темы курса")}
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


                <section className="rounded-2xl bg-gradient-to-r from-[#12304A] to-[#17496d] p-7 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">

                    <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            {t("information.Готовы начать обучение")}
                        </h3>

                        <p className="text-sm text-white/60">
                            {t("information.Оставьте заявку и мы свяжемся с вами")}
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold bg-[#ff9735] text-white hover:bg-[#ff8410]"
                    >
                        {t("navbar.Оставить заявку")}
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                    </Link>

                </section>

            </main>

        </div>
    );
}