const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(Object.fromEntries(formData));
    };
  
    return (
      <section className="flex flex-col items-center bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-blue-600">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-80 space-y-4">
          <input name="name" type="text" placeholder="Nome" required className="p-2 border border-gray-400 rounded-md" />
          <input name="email" type="email" placeholder="Email" required className="p-2 border border-gray-400 rounded-md" />
          <textarea name="message" placeholder="Mensagem" required className="p-2 border border-gray-400 rounded-md" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">
            Enviar
          </button>
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  