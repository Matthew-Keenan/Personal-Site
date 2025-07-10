const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contact
          </h2>
          <p className="text-gray-700 mb-8">
            Interested in working together or have any questions? Feel free to reach out!
          </p>
          <a
            href="mailto:matt@example.com"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact