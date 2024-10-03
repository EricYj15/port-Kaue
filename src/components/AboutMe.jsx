const AboutMe = () => (
    <section className="flex flex-col items-center justify-center h-screen bg-green-100 p-6">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <img src="https://via.placeholder.com/150" alt="Foto de Kauê Pires" className="rounded-full mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-700 text-center">Kauê Pires</h1>
            <p className="mt-4 text-base text-gray-700 text-center">
                Desenvolvedor focado em inovação e melhoria contínua. Aqui compartilho meus projetos e habilidades, buscando sempre evoluir na área de tecnologia.
            </p>
        </div>
    </section>
);

export default AboutMe;
