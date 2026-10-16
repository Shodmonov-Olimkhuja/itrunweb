import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function CoursesListLight() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [selectedCity, setSelectedCity] = useState('Все');

    const { t } = useTranslation()

    const categories = [
        'Все',
        'Спортивное программирование',
        'Разработка',
        'Дизайн',
        'Мобильная разработка',
        'Десткие курсы',
        'Data'
    ];

    const coursesData = [
        {
            id: 1,
            title: 'Frontend (HTML && CSS)',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            description: t("course.Стань разработчиком современных веб-приложений"),
            category: t("course.Разработка"),
            cities: ['Худжанд'],
            tags: ['HTML', 'CSS', 'Верстка'],
        },
        {
            id: 2,
            title: 'JavaScript',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Освой серверную разработку и базы данных"),
            category: t("course.Разработка"),
            cities: ['Худжанд'],
            tags: ['JavaScript', 'ES6+', 'DOM'],
        },
        {
            id: 3,
            title: 'React Developer',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Стань универсальным разработчиком"),
            category: t("course.Разработка"),
            cities: ['Худжанд'],
            tags: ['React', 'Redux', 'API'],
        },
        {
            id: 4,
            title: 'UI/UX Designer',
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            description: t("course.Научись создавать удобные и красивые интерфейсы"),
            category: t("course.Дизайн"),
            cities: ['Худжанд'],
            tags: ['Figma', 'UX', 'UI'],
        },
        {
            id: 5,
            title: 'Python Developer',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            description: t("course.Программирование на Python от основ до проектов"),
            category: 'Data',
            cities: ['Худжанд'],
            tags: ['Python', 'OOP', 'Scripts'],
        },
        {
            id: 6,
            title: 'Mobile Developer',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Разработка мобильных приложений для Android и iOS"),
            category: t("course.Мобильная разработка"),
            cities: ['Худжанд'],
            tags: ['Mobile', 'Flutter', 'iOS/Android'],
        },
        {
            id: 7,
            title: 'Python Django Developer',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Создание мощных веб-приложений, серверной логики и проектирование баз данных"),
            category: 'Data',
            cities: ['Худжанд'],
            tags: ['Python', 'Django', 'Backend'],
        },
        {
            id: 8,
            title: 'Python Minecraft',
            duration: t("information.3 месяцев"),
            level: 'Middle',
            description: t("course.Изучение основ программирования и создание автоматических построек внутри игрового мира"),
            category: t("course.Десткие курсы"),
            cities: ['Худжанд'],
            tags: ['Python', 'Minecraft', 'GameDev'],
        },
        {
            id: 9,
            title: 'SQL & Базы данных',
            duration: t("information.3 месяцев"),
            level: 'Middle',
            description: t("course.Проектирование баз данных, написание сложных запросов и управление большими объемами данных"),
            category: 'Data',
            cities: ['Худжанд'],
            tags: ['SQL', 'Databases', 'PostgreSQL'],
        },
        {
            id: 10,
            title: 'Scratch',
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            description: t("course.Создание первых игр и интерактивных анимаций с помощью красочных блоков кода"),
            category: t("course.Десткие курсы"),
            cities: ['Худжанд'],
            tags: ['Scratch', 'Kids', 'Animation'],
        },
        {
            id: 11,
            title: 'Компьютерная грамотность',
            duration: t("information.2 месяцев"),
            level: 'Beginner',
            description: t("course.Освоение компьютера с нуля от безопасного интернета и быстрой печати до создания первых проектов"),
            category: t("course.Десткие курсы"),
            cities: ['Худжанд'],
            tags: ['PC Basics', 'Windows', 'Office'],
        },
        {
            id: 12,
            title: 'Разработка на C# & .NET',
            duration: t("information.3 месяцев"),
            level: 'Junior+',
            description: t("course.Разработка корпоративного софта, высоконагруженных серверных систем и десктопных приложений"),
            category: 'Data',
            cities: ['Худжанд'],
            tags: ['C#', '.NET', 'Backend'],
        },
        {
            id: 101,
            title: 'Scratch',
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            description: t("course.Создание игр и анимаций для детей"),
            category: t("course.Десткие курсы"),
            cities: ['Душанбе'],
            tags: ['Scratch', 'Games', 'Kids'],
        },
        {
            id: 102,
            title: 'App Inventor',
            duration: t("information.2,5 месяцев"),
            level: 'Beginner',
            description: t("course.Создание мобильных приложений без кода"),
            category: t("course.Десткие курсы"),
            cities: ['Душанбе'],
            tags: ['App Inventor', 'No-Code', 'Mobile'],
        },
        {
            id: 103,
            title: 'Front-End разработка',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            description: t("course.Разработка интерфейсов сайтов"),
            category: t("course.Разработка"),
            cities: ['Душанбе'],
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 104,
            title: 'JavaScript',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Изучи язык веб-разработки №1"),
            category: t("course.Разработка"),
            cities: ['Душанбе'],
            tags: ['JavaScript', 'ES6+', 'DOM'],
        },
        {
            id: 105,
            title: 'Python',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            description: t("course.Программирование на Python с нуля"),
            category: 'Data',
            cities: ['Душанбе'],
            tags: ['Python', 'Basics', 'OOP'],
        },
        {
            id: 106,
            title: 'Компьютерная грамотность',
            duration: t("information.2 месяцев"),
            level: 'Beginner',
            description: t("course.Основы работы с компьютером"),
            category: t("course.Десткие курсы"),
            cities: ['Душанбе'],
            tags: ['PC Basics', 'Windows', 'Office'],
        },
        {
            id: 107,
            title: 'Дата-аналитика (Excel → Power BI → Статистика)',
            duration: t("information.2 месяцев"),
            level: 'Middle',
            description: t("course.Анализ данных и визуализация"),
            category: 'Data',
            cities: ['Душанбе'],
            tags: ['Excel', 'Power BI', 'Analytics'],
        },
        {
            id: 108,
            title: 'C# — разработка от нуля',
            duration: t("information.6 месяцев"),
            level: 'Middle',
            description: t("course.Разработка корпоративного софта, высоконагруженных серверных систем и десктопных приложений"),
            category: 'Data',
            cities: ['Душанбе'],
            tags: ['C#', '.NET', 'OOP'],
        },
        {
            id: 109,
            title: 'C++ Developer',
            duration: t("information.6 месяцев"),
            level: 'Beginner',
            description: t("course.Спартивное программирование на C++"),
            category: t("course.Спортивное программирование"),
            cities: ['Худжанд'],
            tags: ['C++', 'Algorithms', 'Logics'],
        },
        {
            id: 110,
            title: 'Excel (от основ до продвинутого уровня)',
            duration: t("information.2 месяцев"),
            level: 'Beginner',
            description: t("course.Работа с таблицами и анализ данных"),
            category: 'Data',
            cities: ['Душанбе'],
            tags: ['Excel', 'Tables', 'Analytics'],
        },
        {
            id: 111,
            title: 'React Developer',
            duration: t("information.4 месяцев"),
            level: 'Middle',
            description: t("course.Разработка SPA приложений"),
            category: t("course.Разработка"),
            cities: ['Душанбе'],
            tags: ['React', 'Redux', 'SPA'],
        },
        {
            id: 112,
            title: 'Графический дизайн',
            duration: t("information.4 месяцев"),
            level: 'Beginner',
            description: t("course.Создание визуального контента"),
            category: t("course.Дизайн"),
            cities: ['Душанбе'],
            tags: ['Photoshop', 'Illustrator', 'Design'],
        },
        {
            id: 113,
            title: 'UX/UI Designer',
            duration: t("information.3 месяцев"),
            level: 'Beginner',
            description: t("course.Дизайн интерфейсов и UX"),
            category: t("course.Дизайн"),
            cities: ['Душанбе'],
            tags: ['Figma', 'UI/UX', 'Prototyping'],
        },
        {
            id: 114,
            title: 'Python 2.0 (Advanced уровень)',
            duration: t("information.4 месяцев"),
            level: 'Advanced',
            description: t("course.Продвинутый Python и архитектура"),
            category: 'Data',
            cities: ['Душанбе'],
            tags: ['Python', 'Advanced', 'Architecture'],
        }

    ]

    const filteredCourses = coursesData.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
        const matchesCity = selectedCity === 'Все' || course.cities.some(city => city.toLowerCase() === selectedCity.toLowerCase())

        return matchesSearch && matchesCategory && matchesCity;
    });

    return (
        <div className=" text-gray-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">

                <div className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        {t("courses.mainPage.Наши курсы программирования и IT")}
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                        {t("courses.mainPage.Выберите направление и филиал, чтобы начать обучение с практикой и поддержкой")}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">

                    <div className="relative w-full sm:w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            type="text"
                            placeholder={t("courses.mainPage.Поиск по курсу или тегу")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#12304A] transition-colors"
                        />
                    </div>

                    <div className="w-full sm:w-auto">
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#12304A] transition-colors cursor-pointer"
                        >
                            <option value="Все">{t("courses.mainPage.Все филиалы")}</option>
                            <option value="Худжанд">{t("courses.mainPage.Худжанд")}</option>
                            <option value="Душанбе">{t("courses.mainPage.Душанбе")}</option>
                        </select>
                    </div>

                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${selectedCategory === category
                                    ? 'bg-[#12304A] text-white shadow-md shadow-[#12304A]/20'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/course/${course.id}`} // Переход на /courses/107
                            >
                                <div
                                    key={course.id}
                                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between  hover:shadow-lg transition-all duration-300 group shadow-sm"
                                >
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-[#12304A] text-[white] text-xs font-semibold rounded-full border border-blue-200">
                                                {course.category}
                                            </span>

                                            <div className="flex flex-wrap gap-1">
                                                {course.cities.map((city, idx) => (
                                                    <span key={idx} className="px-2.5 py-0.5 bg-purple-50 text-[#12304A] text-xs font-semibold rounded-full border border-purple-200 flex items-center gap-1">
                                                        <i className="fa-solid fa-location-dot"></i> {city}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#12304A] transition-colors">
                                            {course.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {t(course.description)}
                                        </p>

                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium pt-1">
                                            <span className="flex items-center gap-1">
                                                <i className="fa-solid fa-stopwatch text-[#ff9735]"></i> {course.duration}
                                            </span>
                                            <span>•</span>
                                            <span>{t("information.Уровень")}: {course.level}</span>
                                        </div>

                                        {/* Теги */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {course.tags.map((tag, idx) => (
                                                <span key={idx} className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto flex items-center justify-end">
                                        <Link
                                            to={`/course/${course.id}`}
                                            className="w-full text-center py-2.5 bg-[#ff9735] text-white hover:bg-[#ff8410] hover:text-white text-xs font-semibold rounded-xl  transition-all flex items-center justify-center gap-2"
                                        >
                                            {t("information.Подробнее о курсе")} <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 space-y-3 shadow-sm">
                        <div className="text-4xl text-gray-300">
                            <i className="fa-solid fa-folder-open"></i>
                        </div>
                        <p className="text-gray-700 font-medium text-lg">{t("information.По вашему запросу ничего не найдено")}</p>
                        <p className="text-gray-400 text-sm">{t("information.Попробуйте изменить параметры поиска, категорию или филиал")}</p>
                    </div>
                )}

            </div>
        </div>
    );
}