'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Building2, Phone, MapPin } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Company Info
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    companyAddress: '',
    industry: '',
    companySize: '',
    registrationNumber: '',
    taxId: '',
    website: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // TODO: Implement Supabase registration
      console.log('Registration attempt:', formData)
    }
  }

  const industries = [
    'Agriculture et Agroalimentaire',
    'Banque et Finance',
    'BTP et Construction',
    'Commerce et Distribution',
    'Énergie et Mines',
    'Industrie et Manufacturing',
    'Logistique et Transport',
    'Santé et Pharmaceutique',
    'Services et Conseil',
    'Technologie et Télécoms',
    'Tourisme et Hôtellerie',
    'Autre'
  ]

  const companySizes = [
    'Micro-entreprise (1-9 employés)',
    'Petite entreprise (10-49 employés)',
    'Moyenne entreprise (50-249 employés)',
    'Grande entreprise (250+ employés)'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h2 className="text-3xl font-bold text-secondary-900">
            Rejoignez FEG Digital Hub
          </h2>
          <p className="mt-2 text-sm text-secondary-600">
            Ou{' '}
            <Link href="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">
              connectez-vous à votre compte existant
            </Link>
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-200 text-secondary-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step < currentStep ? 'bg-primary-600' : 'bg-secondary-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div className="card">
          <form className="card-content space-y-6" onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900">Informations personnelles</h3>
                  <p className="text-sm text-secondary-600">Commençons par vos informations de base</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="label">Prénom</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="input pl-10"
                        placeholder="Jean"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="label">Nom</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="input pl-10"
                        placeholder="Dupont"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">Adresse email</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="input pl-10"
                      placeholder="jean.dupont@entreprise.ga"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="label">Téléphone</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="input pl-10"
                      placeholder="+241 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="input pl-10 pr-10"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          className="text-secondary-400 hover:text-secondary-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="label">Confirmer le mot de passe</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        className="input pl-10 pr-10"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          className="text-secondary-400 hover:text-secondary-600"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900">Informations de l'entreprise</h3>
                  <p className="text-sm text-secondary-600">Parlez-nous de votre entreprise</p>
                </div>

                <div>
                  <label htmlFor="companyName" className="label">Nom de l'entreprise</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      className="input pl-10"
                      placeholder="Ma Société SARL"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyEmail" className="label">Email de l'entreprise</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="companyEmail"
                        name="companyEmail"
                        type="email"
                        required
                        className="input pl-10"
                        placeholder="contact@masociete.ga"
                        value={formData.companyEmail}
                        onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="companyPhone" className="label">Téléphone de l'entreprise</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="companyPhone"
                        name="companyPhone"
                        type="tel"
                        required
                        className="input pl-10"
                        placeholder="+241 XX XX XX XX"
                        value={formData.companyPhone}
                        onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="companyAddress" className="label">Adresse de l'entreprise</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      id="companyAddress"
                      name="companyAddress"
                      type="text"
                      required
                      className="input pl-10"
                      placeholder="123 Avenue de l'Indépendance, Libreville"
                      value={formData.companyAddress}
                      onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="label">Secteur d'activité</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="input"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    >
                      <option value="">Sélectionnez un secteur</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="label">Taille de l'entreprise</label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      className="input"
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    >
                      <option value="">Sélectionnez la taille</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Step 3: Legal Information */}
            {currentStep === 3 && (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-secondary-900">Informations légales</h3>
                  <p className="text-sm text-secondary-600">Finalisons votre inscription</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="registrationNumber" className="label">Numéro d'immatriculation</label>
                    <input
                      id="registrationNumber"
                      name="registrationNumber"
                      type="text"
                      required
                      className="input"
                      placeholder="RCCM GA-LBV-01-2024-XXXX"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="taxId" className="label">Numéro fiscal (NIF)</label>
                    <input
                      id="taxId"
                      name="taxId"
                      type="text"
                      required
                      className="input"
                      placeholder="XXXXXXXXX"
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="label">Site web (optionnel)</label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="input"
                    placeholder="https://www.masociete.ga"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-md p-4">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-secondary-900">
                      J'accepte les{' '}
                      <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                        Conditions d'utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                        Politique de confidentialité
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="bg-secondary-50 border border-secondary-200 rounded-md p-4">
                  <div className="flex items-center">
                    <input
                      id="marketing"
                      name="marketing"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <label htmlFor="marketing" className="ml-2 block text-sm text-secondary-900">
                      Je souhaite recevoir des informations sur les nouveautés et événements FEG
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn btn-outline btn-md"
                >
                  Précédent
                </button>
              )}
              <div className="flex-1" />
              <button
                type="submit"
                className="btn btn-primary btn-md"
              >
                {currentStep < 3 ? 'Suivant' : 'Créer mon compte'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
