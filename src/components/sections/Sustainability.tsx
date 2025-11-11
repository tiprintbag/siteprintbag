import React from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const Sustainability: React.FC = () => {
  return (
    <section id="sustentabilidade" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            Certificação FSC
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Compromisso com a sustentabilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa responsabilidade ambiental está no centro de tudo que fazemos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              O que é a certificação FSC?
            </h3>
            <p className="text-gray-600 mb-4">
              O Forest Stewardship Council (FSC) é uma organização internacional que promove o manejo responsável de florestas. A certificação FSC garante que os produtos de papel e madeira vêm de fontes responsáveis, verificadas e certificadas.
            </p>
            <p className="text-gray-600 mb-6">
              Ao escolher embalagens com certificação FSC, você está contribuindo para a preservação das florestas, proteção da biodiversidade e apoio às comunidades que dependem das florestas.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Nossos compromissos:</h4>
                  <ul className="space-y-2 text-green-800">
                    <li>• Uso exclusivo de matérias-primas certificadas FSC</li>
                    <li>• Processos de produção ecoeficientes</li>
                    <li>• Redução de desperdícios e otimização de recursos</li>
                    <li>• Compromisso com a economia circular</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 mb-6">
                <svg className="w-20 h-20 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificação FSC</h3>
              <p className="text-gray-600">
                Garantia de origem responsável e sustentável de todas as nossas matérias-primas
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <div className="text-green-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Florestas Responsáveis</h3>
            <p className="text-gray-600">
              Trabalhamos apenas com fornecedores certificados que seguem práticas de manejo florestal responsável.
            </p>
          </Card>

          <Card hover>
            <div className="text-green-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Economia Circular</h3>
            <p className="text-gray-600">
              Nossos processos são otimizados para reduzir desperdícios e promover a reutilização de materiais.
            </p>
          </Card>

          <Card hover>
            <div className="text-green-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Compromisso Ambiental</h3>
            <p className="text-gray-600">
              Cada embalagem produzida reflete nosso compromisso com o meio ambiente e as futuras gerações.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Sustainability





