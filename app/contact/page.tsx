import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta con ${personalInfo.name}, ${personalInfo.title}`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-8">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Email
            </h2>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">
              GitHub
            </h2>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {personalInfo.github}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">
              LinkedIn
            </h2>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {personalInfo.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
