'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Search, Plus, Building2, Package, MapPin, Star, Send, ChevronDown, ChevronRight,
  User, BarChart3, Factory, Truck, Shield, Award, Globe, X
} from 'lucide-react'

const categories = [
  { id: 1, name: 'Électronique & Technologie', icon: Package, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { id: 2, name: 'Machines & Équipements', icon: Factory, color: 'text-feg-orange', bgColor: 'bg-orange-100' },
  { id: 3, name: 'Textile & Vêtements', icon: Building2, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { id: 4, name: 'Matériaux de Construction', icon: Building2, color: 'text-feg-green', bgColor: 'bg-green-100' },
  { id: 5, name: 'Automobile & Transport', icon: Truck, color: 'text-red-600', bgColor: 'bg-red-100' },
  { id: 6, name: 'Médical & Santé', icon: Shield, color: 'text-green-600', bgColor: 'bg-green-100' }
]

const qualifiedFactories = [
  {
    id: 1, name: 'Shenzhen TechPro Manufacturing', location: 'Shenzhen, Guangdong',
    specialties: ['Électronique', 'Composants'], certifications: ['ISO 9001', 'CE', 'FCC'],
    rating: 4.8, experience: '15 ans', capacity: '10,000 unités/mois'
  },
  {
    id: 2, name: 'Guangzhou Heavy Machinery Co.', location: 'Guangzhou, Guangdong',
    specialties: ['Machines industrielles'], certifications: ['ISO 9001', 'ISO 14001'],
    rating: 4.9, experience: '20 ans', capacity: '500 machines/mois'
  }
]

const recentRequests = [
  { id: 1, product: 'Smartphones Android 128GB', category: 'Électronique', quantity: '1,000 unités', budget: '150,000,000 XAF', status: 'En cours', responses: 3 },
  { id: 2, product: 'Générateurs diesel 100kW', category: 'Machines', quantity: '10 unités', budget: '65,000,000 XAF', status: 'Devis reçus', responses: 5 }
]

export default function SourcingPage() {
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [activeTab, setActiveTab] = useState('categories')
  const [requestForm, setRequestForm] = useState({
    category: '', productName: '', description: '', quantity: '', budget: '', deadline: ''
  })

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demande soumise:', requestForm)
    setShowRequestForm(false)
    setRequestForm({ category: '', productName: '', description: '', quantity: '', budget: '', deadline: '' })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-yellow-100 text-yellow-800'
      case 'Devis reçus': return 'bg-blue-100 text-blue-800'
      case 'Finalisé': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-feg-green rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-sm">FEG</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Sourcing</h1>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Accueil</Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-feg-green">Sourcing</span>
              </nav>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={() => setShowRequestForm(true)}
                className="bg-feg-green text-white px-4 py-2 rounded-lg hover:bg-feg-green/90 transition-colors text-sm font-medium flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle demande
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 sm:space-x-2 p-1 rounded-full hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-feg-green rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JD</span>
                  </div>
                  <ChevronDown className="hidden sm:block h-4 w-4 text-gray-500" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4 mr-3" />
                      Accueil
                    </Link>
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <BarChart3 className="h-4 w-4 mr-3" />
                      Dashboard
                    </Link>
                    <Link href="/marketplace" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Package className="h-4 w-4 mr-3" />
                      Marketplace
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-feg-green to-feg-green/80 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Sourcing International</h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Connectez-vous avec des usines qualifiées chinoises pour vos besoins en produits et matériels
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Factory className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Usines Certifiées</h3>
                <p className="text-sm text-green-100">Partenaires vérifiés avec certifications internationales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Qualité Garantie</h3>
                <p className="text-sm text-green-100">Contrôle qualité et conformité aux standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Globe className="h-8 w-8 mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Livraison Mondiale</h3>
                <p className="text-sm text-green-100">Expédition directe vers le Gabon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['categories', 'requests', 'factories'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-feg-green text-feg-green'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'categories' ? 'Catégories' : tab === 'requests' ? 'Mes Demandes' : 'Usines Partenaires'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Catégories de Produits</h2>
              <p className="text-gray-600">Sélectionnez une catégorie pour commencer votre demande de sourcing</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <div
                    key={category.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer border border-gray-200 hover:border-feg-green"
                    onClick={() => {
                      setRequestForm({...requestForm, category: category.name})
                      setShowRequestForm(true)
                    }}
                  >
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mes Demandes de Sourcing</h2>
                <p className="text-gray-600">Suivez l'état de vos demandes et les réponses des fournisseurs</p>
              </div>
              <button 
                onClick={() => setShowRequestForm(true)}
                className="bg-feg-green text-white px-4 py-2 rounded-lg hover:bg-feg-green/90 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle demande
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réponses</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentRequests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{request.product}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{request.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{request.budget}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{request.responses} réponses</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Factories Tab */}
        {activeTab === 'factories' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Usines Partenaires Qualifiées</h2>
              <p className="text-gray-600">Nos partenaires manufacturiers certifiés en Chine</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {qualifiedFactories.map((factory) => (
                <div key={factory.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{factory.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {factory.location}
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(factory.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{factory.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{factory.experience}</div>
                      <div className="text-xs text-gray-500">d'expérience</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Spécialités</h4>
                    <div className="flex flex-wrap gap-2">
                      {factory.specialties.map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-feg-green/10 text-feg-green text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {factory.certifications.map((cert, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-feg-green text-white py-2 px-4 rounded-lg hover:bg-feg-green/90 transition-colors text-sm font-medium">
                      Contacter
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Voir profil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nouvelle Demande de Sourcing</h2>
                <button 
                  onClick={() => setShowRequestForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitRequest} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                  <select
                    value={requestForm.category}
                    onChange={(e) => setRequestForm({...requestForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner une catégorie</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom du produit</label>
                  <input
                    type="text"
                    value={requestForm.productName}
                    onChange={(e) => setRequestForm({...requestForm, productName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                    placeholder="Ex: Smartphone Android 128GB"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description détaillée</label>
                  <textarea
                    value={requestForm.description}
                    onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                    placeholder="Décrivez en détail vos besoins, spécifications techniques, etc."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantité</label>
                    <input
                      type="text"
                      value={requestForm.quantity}
                      onChange={(e) => setRequestForm({...requestForm, quantity: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                      placeholder="Ex: 1000 unités"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget (XAF)</label>
                    <input
                      type="text"
                      value={requestForm.budget}
                      onChange={(e) => setRequestForm({...requestForm, budget: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                      placeholder="Ex: 50,000,000 XAF"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date limite souhaitée</label>
                  <input
                    type="date"
                    value={requestForm.deadline}
                    onChange={(e) => setRequestForm({...requestForm, deadline: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-feg-green focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowRequestForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-feg-green text-white px-6 py-2 rounded-lg hover:bg-feg-green/90 transition-colors flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer la demande
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
