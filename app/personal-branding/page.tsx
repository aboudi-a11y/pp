"use client"
import { useState } from "react"
import { Check, Users, Video, FileText, TrendingUp, Star, Plus, Minus } from "lucide-react"

export default function PersonalBrandingPage() {
  const videos = [
    {
      id: "rw-IeGZ0IUo",
      title: "Prof Français zineb",
    },
    {
      id: "uCg0wnRc3Mw",
      title: "Prof SVT imad",
    },
    {
      id: "NXtQ-jJ56h4",
      title: "Prof Physique oussama",
    },
  ]

  const testimonials = [
    {
      name: "imad",
      role: "CEO, Tech Startup",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Une très bonne expérience. Studio bien équipé, équipe professionnelle et accompagnement sérieux pour produire un contenu de qualité.",
    },
    {
      name: "oussama",
      role: "Coach Business",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Pour les profs li baghyin ysawro les cours dyalhom, lkhedma m3a Prestigia hia ahsan choix. Travail professionnel, respect du temps, w un résultat de qualité.",
    },
    {
      name: "zineb",
      role: "Influenceur Mode",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Studio professionnel zt pro, bonne organisation, accompagnement clair. W l résultat Kayban men lmara lawla o kayhder 3la raso ✅",
    },
  ]

  const [quantities, setQuantities] = useState({
    simple: 8,
    professional: 8,
    premium: 8,
  })

  const calculatePrice = (basePrice: number, quantity: number) => {
    let discount = 0
    if (quantity >= 20) {
      discount = 150
    } else if (quantity >= 15) {
      discount = 100
    }
    const pricePerVideo = basePrice - discount
    return {
      total: pricePerVideo * quantity,
      perVideo: pricePerVideo,
      discount: discount,
    }
  }

  const updateQuantity = (pack: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [pack]: Math.max(8, prev[pack as keyof typeof prev] + change),
    }))
  }

  const handleWhatsApp = (packName: string, quantity: number, price: number) => {
    const phoneNumber = "212652768993"
    const message = `Bonjour, je souhaite commander le pack ${packName} avec ${quantity} vidéos pour un total de ${price} DH.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const simplePricing = calculatePrice(500, quantities.simple)
  const professionalPricing = calculatePrice(700, quantities.professional)
  const premiumPricing = calculatePrice(1000, quantities.premium)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 animate-slide-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
              <span className="text-accent">Personal Branding</span> Professionnel
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Créez et amplifiez votre marque personnelle avec nos services de production vidéo professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-4 px-4 bg-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold text-foreground">
            🎉 Réductions spéciales : <span className="text-accent">-100 DH/vidéo</span> dès 15 vidéos |{" "}
            <span className="text-accent">-150 DH/vidéo</span> dès 20 vidéos
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pourquoi le <span className="text-accent">Personal Branding</span> ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dans un monde digital en constante évolution, votre marque personnelle est votre plus grand atout. Nous
              vous aidons à créer du contenu vidéo professionnel qui vous distingue de la concurrence.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Studio professionnel équipé avec matériel haute qualité</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Équipe créative expérimentée en storytelling</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">Stratégie de contenu personnalisée pour votre audience</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
          </div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
            <Users className="w-16 h-16 text-accent" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-2">Ahmed Benali</h3>
            <p className="text-xl text-accent mb-4">Spécialiste en Création de Contenu</p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Avec plus de 8 ans d'expérience dans la production de contenu digital, Ahmed a aidé plus de 200
              professionnels à construire leur marque personnelle et à amplifier leur présence en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos <span className="text-accent">Packs</span>
            </h2>
            <p className="text-lg text-muted-foreground">Choisissez le pack qui correspond à vos besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pack Simple */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent transition-colors">
              <div className="text-center mb-6">
                <Video className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Pack Simple</h3>
                <p className="text-muted-foreground">Vidéo + Montage</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => updateQuantity("simple", -1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-accent" />
                  </button>
                  <span className="text-3xl font-bold text-foreground">{quantities.simple}</span>
                  <button
                    onClick={() => updateQuantity("simple", 1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-accent" />
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground">Nombre de vidéos (min. 8)</p>
              </div>

              <div className="text-center mb-6">
                {simplePricing.discount > 0 && (
                  <div className="mb-2">
                    <span className="text-xl text-muted-foreground line-through">{500 * quantities.simple} DH</span>
                    <span className="ml-2 text-sm text-accent font-semibold">-{simplePricing.discount} DH/vidéo</span>
                  </div>
                )}
                <div className="text-4xl font-bold text-accent mb-2">{simplePricing.total} DH</div>
                <p className="text-sm text-muted-foreground">{simplePricing.perVideo} DH / vidéo</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Tournage professionnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Montage de qualité</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Livraison rapide</span>
                </li>
              </ul>

              <button
                onClick={() => handleWhatsApp("Simple", quantities.simple, simplePricing.total)}
                className="w-full bg-accent text-background py-3 rounded-full hover:bg-accent/90 transition-colors font-semibold"
              >
                Commencer
              </button>
            </div>

            {/* Pack Professional */}
            <div className="bg-card border-2 border-accent rounded-2xl p-8 relative scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-sm font-semibold">
                POPULAIRE
              </div>
              <div className="text-center mb-6">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Pack Professional</h3>
                <p className="text-muted-foreground">Vidéo + Montage + Script</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => updateQuantity("professional", -1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-accent" />
                  </button>
                  <span className="text-3xl font-bold text-foreground">{quantities.professional}</span>
                  <button
                    onClick={() => updateQuantity("professional", 1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-accent" />
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground">Nombre de vidéos (min. 8)</p>
              </div>

              <div className="text-center mb-6">
                {professionalPricing.discount > 0 && (
                  <div className="mb-2">
                    <span className="text-xl text-muted-foreground line-through">
                      {700 * quantities.professional} DH
                    </span>
                    <span className="ml-2 text-sm text-accent font-semibold">
                      -{professionalPricing.discount} DH/vidéo
                    </span>
                  </div>
                )}
                <div className="text-4xl font-bold text-accent mb-2">{professionalPricing.total} DH</div>
                <p className="text-sm text-muted-foreground">{professionalPricing.perVideo} DH / vidéo</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Tout du Pack Simple</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Script professionnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Storytelling optimisé</span>
                </li>
              </ul>

              <button
                onClick={() => handleWhatsApp("Professional", quantities.professional, professionalPricing.total)}
                className="w-full bg-accent text-background py-3 rounded-full hover:bg-accent/90 transition-colors font-semibold"
              >
                Commencer
              </button>
            </div>

            {/* Pack Premium */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent transition-colors">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Pack Premium</h3>
                <p className="text-muted-foreground">Vidéo + Montage + Script + Ads</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    onClick={() => updateQuantity("premium", -1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-accent" />
                  </button>
                  <span className="text-3xl font-bold text-foreground">{quantities.premium}</span>
                  <button
                    onClick={() => updateQuantity("premium", 1)}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-accent" />
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground">Nombre de vidéos (min. 8)</p>
              </div>

              <div className="text-center mb-6">
                {premiumPricing.discount > 0 && (
                  <div className="mb-2">
                    <span className="text-xl text-muted-foreground line-through">{1000 * quantities.premium} DH</span>
                    <span className="ml-2 text-sm text-accent font-semibold">-{premiumPricing.discount} DH/vidéo</span>
                  </div>
                )}
                <div className="text-4xl font-bold text-accent mb-2">{premiumPricing.total} DH</div>
                <p className="text-sm text-muted-foreground">{premiumPricing.perVideo} DH / vidéo</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Tout du Pack Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Campagne publicitaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Stratégie d'acquisition</span>
                </li>
              </ul>

              <button
                onClick={() => handleWhatsApp("Premium", quantities.premium, premiumPricing.total)}
                className="w-full bg-accent text-background py-3 rounded-full hover:bg-accent/90 transition-colors font-semibold"
              >
                Commencer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos <span className="text-accent">Réalisations</span>
            </h2>
            <p className="text-lg text-muted-foreground">Découvrez quelques exemples de nos travaux</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ce que disent nos <span className="text-accent">clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">{testimonial.name[0].toUpperCase()}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
