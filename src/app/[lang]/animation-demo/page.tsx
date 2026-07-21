import AnimatedCard from '@/components/website/AnimatedCard';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { getAuxiliaryPagesContent } from '@/lib/content';
import { isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default async function AnimationDemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const { animationDemo: content } = await getAuxiliaryPagesContent(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-lg opacity-80 mb-8">
          {content.subtitle}
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{content.parametersTitle}</h2>
          <div className="text-left text-sm space-y-2 opacity-90">
            {content.parameters.map((parameter: string) => (
              <p key={parameter}>{parameter}</p>
            ))}
          </div>
        </div>

        <div className="text-xs opacity-60">
          {content.instruction}
        </div>
      </div>

      <AnimatedCard
        lines={[...content.cardLines]}
      />
      </main>
      <Footer />
    </div>
  );
}
