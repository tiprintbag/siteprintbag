'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const CTA: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com webhook ou API
    console.log('Email enviado:', email)
    alert('Obrigado! Entraremos em contato em breve.')
    setEmail('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-600">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para transformar suas embalagens?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento gratuito e descubra como podemos ajudar sua marca a se destacar.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </form>

          <p className="text-sm text-primary-200">
            ✓ Sem compromisso • ✓ Resposta em até 24h • ✓ Orçamento personalizado
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA


