import React from 'react'
import Card from '@/components/ui/Card'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'A Printbag transformou a experiência de embalagem da nossa marca. As sacolas personalizadas são lindas e nossos clientes sempre elogiam.',
      author: 'Maria Silva',
      role: 'Diretora de Marketing',
      company: 'EcoMarket',
      initials: 'MS',
    },
    {
      quote: 'Trabalhamos com o modelo Programado há 2 anos e a qualidade é sempre excepcional. O atendimento é impecável e os prazos sempre cumpridos.',
      author: 'João Santos',
      role: 'Gerente de Operações',
      company: 'Varejo Plus',
      initials: 'JS',
    },
    {
      quote: 'Para nosso evento de lançamento, precisávamos de embalagens em poucos dias. O modelo Just in Time da Printbag salvou! Profissionalismo total.',
      author: 'Ana Costa',
      role: 'Coordenadora de Eventos',
      company: 'StyleBrand',
      initials: 'AC',
    },
  ]

  return (
    <section id="clientes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de empresas que confiam na Printbag
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


