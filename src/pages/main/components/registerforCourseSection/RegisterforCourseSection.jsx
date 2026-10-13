import { Link } from "react-router-dom";




export default function RegisterForCourse() {
    return (


        <section className="max-w-300 m-auto rounded-2xl bg-gradient-to-r bg-[#12304A] p-7 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">

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
    )
}