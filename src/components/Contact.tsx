const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Contact
          </h2>
          <p className="text-gray-700 mb-8">
            Feel free to reach out with any questions or opportunities!
          </p>
          <a
            href="mailto:matthewk1313@gmail.com"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact