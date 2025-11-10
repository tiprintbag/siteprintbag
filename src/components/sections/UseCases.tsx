import React from 'react'
import Card from '@/components/ui/Card'

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Varejo',
      description: 'Ideal para lojas físicas e e-commerce que precisam de embalagens práticas e atraentes.',
      features: [
        'Sacolas personalizadas com logo',
        'Caixas para produtos diversos',
        'Embalagens para delivery',
        'Soluções para pequenos e grandes volumes',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Just in Time',
      description: 'Para empresas que precisam de entregas rápidas e flexíveis, sem compromisso de volume mínimo.',
      features: [
        'Produção sob demanda',
        'Prazos reduzidos',
        'Flexibilidade de quantidades',
        'Ideal para eventos e lançamentos',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Programado',
      description: 'Solução para empresas com demanda recorrente, garantindo previsibilidade e economia.',
      features: [
        'Produção mensal programada',
        'Melhores condições comerciais',
        'Planejamento estratégico',
        'Suporte dedicado',
      ],
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <section id="modelos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Modelos de Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o modelo que melhor se adapta às necessidades do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} hover className="relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color}`}></div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases


