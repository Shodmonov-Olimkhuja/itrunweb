import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../../../../data/data';
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

                {/* Заголовок секции */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        {t("courses.mainPage.Наши курсы программирования и IT")}
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                        {t("courses.mainPage.Выберите направление и филиал, чтобы начать обучение с практикой и поддержкой")}
                    </p>
                </div>

                {/* Блок поиска и селекта городов */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">

                    {/* Инпут поиска */}
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

                    {/* Селект выбора филиала (города) */}
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

                {/* Кнопки категорий (прокручиваемые на мобильных для удобства) */}
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

                {/* Сетка карточек курсов */}
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
                                    {/* Верхняя часть карточки */}
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-[#12304A] text-[white] text-xs font-semibold rounded-full border border-blue-200">
                                                {course.category}
                                            </span>

                                            {/* Отображение списка городов через маппинг */}
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
                                            <span>Уровень: {course.level}</span>
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

                                    {/* Нижняя часть карточки с кнопкой перехода */}
                                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto flex items-center justify-end">
                                        <Link
                                            to={`/courses/${course.id}`}
                                            className="w-full text-center py-2.5 bg-[#ff9735] text-white hover:bg-[#ff8410] hover:text-white text-xs font-semibold rounded-xl  transition-all flex items-center justify-center gap-2"
                                        >
                                            Подробнее о курсе <i className="fa-solid fa-arrow-right"></i>
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
                        <p className="text-gray-700 font-medium text-lg">По вашему запросу ничего не найдено</p>
                        <p className="text-gray-400 text-sm">Попробуйте изменить параметры поиска, категорию или филиал.</p>
                    </div>
                )}

            </div>
        </div>
    );
}