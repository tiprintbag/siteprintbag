import React from 'react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Solicite seu orçamento',
      description: 'Entre em contato conosco e descreva suas necessidades. Nossa equipe analisará seu projeto e apresentará a melhor solução.',
    },
    {
      number: '02',
      title: 'Desenvolvimento do design',
      description: 'Criamos o design personalizado da sua embalagem, alinhado à identidade visual da sua marca e às suas especificações.',
    },
    {
      number: '03',
      title: 'Produção e entrega',
      description: 'Após aprovação, iniciamos a produção com materiais certificados FSC e entregamos no prazo combinado.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e transparente do início ao fim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-blue-300 transform translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white text-3xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


