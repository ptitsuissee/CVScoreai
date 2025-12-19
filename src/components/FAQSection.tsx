import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQSectionProps {
  language: 'fr' | 'en';
}

const faqData = {
  fr: {
    title: 'Questions fréquentes',
    items: [
      {
        question: "L'analyse de CV est-elle vraiment gratuite ?",
        answer: "Oui. Vous pouvez analyser votre CV gratuitement et recevoir une note avec des recommandations de base. Aucune carte bancaire requise.",
      },
      {
        question: 'Mon CV est-il stocké ou partagé ?',
        answer: "Non. Votre CV est utilisé uniquement pour l'analyse demandée et n'est ni stocké, ni vendu, ni partagé. Nous respectons votre confidentialité.",
      },
      {
        question: "L'analyse est-elle fiable ?",
        answer: "Oui. L'IA est entraînée sur les standards de recrutement européens et les systèmes ATS modernes. Nos algorithmes analysent des milliers de CVs pour fournir des recommandations pertinentes.",
      },
      {
        question: 'Est-ce adapté à mon pays ?',
        answer: "Oui. L'analyse s'adapte spécifiquement au marché de l'emploi de votre pays (France, Suisse, Allemagne, Italie, Espagne). Les normes culturelles et professionnelles locales sont prises en compte.",
      },
      {
        question: 'Quelle est la différence entre gratuit et Premium ?',
        answer: "La version gratuite offre un score global et des conseils de base. La version Premium débloque : feedback ligne par ligne, optimisation ATS détaillée, suggestions de reformulation et export PDF professionnel.",
      },
      {
        question: 'Les étudiants peuvent-ils utiliser cet outil ?',
        answer: 'Absolument. CVScore.ai fonctionne pour les étudiants, jeunes diplômés et professionnels expérimentés, quel que soit votre niveau d\'expérience.',
      },
    ],
  },
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Is the resume analysis really free?',
        answer: 'Yes. You can analyze your resume for free and receive a score with basic recommendations. No credit card required.',
      },
      {
        question: 'Is my resume stored or shared?',
        answer: 'No. Your resume is used only for the requested analysis and is not stored, sold, or shared. We respect your privacy.',
      },
      {
        question: 'Is the analysis reliable?',
        answer: 'Yes. The AI is trained on European hiring standards and modern ATS systems. Our algorithms analyze thousands of resumes to provide relevant recommendations.',
      },
      {
        question: 'Is this tool suitable for my country?',
        answer: 'Yes. The analysis specifically adapts to your country\'s job market (France, Switzerland, Germany, Italy, Spain). Local cultural and professional standards are taken into account.',
      },
      {
        question: 'What\'s the difference between free and Premium?',
        answer: "The free version offers an overall score and basic advice. Premium unlocks: line-by-line feedback, detailed ATS optimization, rewriting suggestions, and professional PDF export.",
      },
      {
        question: 'Can students use this tool?',
        answer: 'Absolutely. CVScore.ai works for students, recent graduates and experienced professionals, regardless of your experience level.',
      },
    ],
  },
};

export function FAQSection({ language }: FAQSectionProps) {
  const content = faqData[language];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">{content.title}</h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          {content.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-neutral-200">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-neutral-50 transition-colors">
                <span className="text-neutral-900 pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            {language === 'fr' ? 'Vous avez une autre question ?' : 'Have another question?'}
          </p>
          <a
            href="mailto:contact@cvscore.ai"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
          </a>
        </div>
      </div>
    </section>
  );
}