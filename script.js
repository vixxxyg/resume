document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

//https://vixxxyg.github.io/resume/

/* Asunto: Candidatura para el puesto de Asistente de Gestión Digital

Estimados representantes de Sunrise Homes & Holidays,

Me dirijo a ustedes para postularme al puesto de Asistente de Gestión Digital en su empresa. Cuento con una sólida experiencia como copywriter, habiendo trabajado en la creación de contenido para sitios web y redes sociales, con un enfoque especial en la optimización SEO y el aumento del engagement de los usuarios. Además, mi formación en desarrollo web (HTML, CSS, JS, React) y mi capacidad para aprender de manera rápida me permiten combinar habilidades técnicas y creativas para contribuir al éxito de su equipo.

Aunque no tengo experiencia directa en la gestión de propiedades en plataformas de alquiler turístico, estoy entusiasmada por la oportunidad de demostrar mis habilidades y mi capacidad de aprendizaje durante el periodo de prueba. También estoy dispuesta a realizar una prueba de evaluación si así lo requieren.

Agradezco la oportunidad de ser considerada para esta vacante y quedo a su disposición para ampliar cualquier información que necesiten.

Atentamente,
Viktoriia Hilenko */