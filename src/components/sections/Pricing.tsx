'use client'

import React from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const Pricing: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const plans = [
    {
      name: 'Varejo',
      description: 'Ideal para pequenos volumes e testes',
      price: 'Sob consulta',
      features: [
        'Quantidades flexíveis',
        'Personalização completa',
        'Entrega em 7-15 dias',
        'Suporte por email',
      ],
      popular: false,
    },
    {
      name: 'Just in Time',
      description: 'Para empresas com demanda variável',
      price: 'Sob consulta',
      features: [
        'Produção sob demanda',
        'Prazos reduzidos',
        'Sem volume mínimo',
        'Suporte prioritário',
        'Melhor custo-benefício',
      ],
      popular: true,
    },
    {
      name: 'Programado',
      description: 'Solução para grandes volumes recorrentes',
      price: 'Sob consulta',
      features: [
        'Produção mensal programada',
        'Melhores condições',
        'Suporte dedicado',
        'Planejamento estratégico',
        'Descontos progressivos',
      ],
      popular: false,
    },
  ]

  return (
    <section id="produtos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planos para cada necessidade
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o modelo que melhor se adapta ao seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? 'border-2 border-primary-500 shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default">Mais Popular</Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="md"
                className="w-full"
                onClick={() => scrollToSection('contato')}
              >
                Solicitar Orçamento
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing


