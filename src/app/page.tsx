import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Hoopa</h1>
            <p className="text-xl mb-8"> 
              We are dedicated to providing innovative solutions and exceptional services
              to help businesses thrive in today's dynamic market.
            </p> 
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <ul className="space-y-2">
                <li>SEO Optimization</li>
                <li>Social Media Management</li>
                <li>Content Marketing</li>
                <li>Paid Advertising (PPC)</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li>Custom Website Development</li>
                <li>E-commerce Solutions</li>
                <li>UI/UX Design</li>
              </ul>
            </div>

            {/* Business Consulting */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Business Consulting</h3>
              <ul className="space-y-2">
                <li>Strategic Planning</li> 
                <li>Market Research & Analysis</li>
                <li>Operational Efficiency</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
              <ul className="space-y-2">
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get Started with Hoopa</h2>
          <p className="text-xl mb-8">
            Ready to transform your business? Contact us today to discuss your specific needs.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:info@hoopa.com" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Email Us
            </a>
            <a href="tel:+1-XXX-XXX-XXXX" className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 
