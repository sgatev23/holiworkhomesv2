import React from 'react';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { Users, BarChart4, Home, BadgeCheck, DollarSign, CheckCircle } from 'lucide-react';

const NomadicaOperators: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>

      {/* Hero Section */}
      <section className="bg-[#fff8e1] py-28 pt-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#815159] mb-6">
              Нашата подкрепа, твоят успех.
            </h2>
            <p className="text-lg text-gray-800 mb-8 max-w-xl">
              Станеш ли част от мрежата ни, ще получиш пълна подкрепа – без значение дали имаш опит в управлението на имоти или не. Работим с теб за да успееш.
            </p>
            <a
              href="/careers/operator/apply"
              className="inline-block bg-[#815159] text-white font-medium py-3 px-6 rounded-xl hover:bg-[#6e444b] transition"
            >
              Кандидатствай сега
            </a>


          </div>
          <div className="relative w-full h-full">
            <img
              src="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Nomadica operator support"
              className="rounded-xl shadow-md object-cover w-full h-auto max-h-[320px]"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-[#fff8e1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-3xl font-bold text-[#815159] mb-6">Защо да развиеш Nomadica във вашия град?</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Като наш партньор, ще управляваш местни имоти под нашата марка. Ние предоставяме технология, обучение, маркетинг и непрекъсната поддръжка. Ти фокусираш върху това да развиваш бизнеса си.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-[#815159] mb-4" />
              <h4 className="text-xl font-semibold text-[#815159] mb-2">Пълна система и обучение</h4>
              <p className="text-gray-600">Подробен стартов процес, оперативен наръчник и постоянна поддръжка от екипа ни.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart4 className="w-12 h-12 text-[#815159] mb-4" />
              <h4 className="text-xl font-semibold text-[#815159] mb-2">Маркетинг и клиенти</h4>
              <p className="text-gray-600">Ние ще доставяме потенциални клиенти чрез нашия сайт, реклами и мрежа.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Home className="w-12 h-12 text-[#815159] mb-4" />
              <h4 className="text-xl font-semibold text-[#815159] mb-2">Доказан бранд и доверие</h4>
              <p className="text-gray-600">Работиш под утвърдено име с силна репутация и изградени стандарти.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="bg-[#fff8e1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-[#815159] text-center mb-12">Какво печелиш?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-[#815159] w-6 h-6 mr-3 mt-1" />
                  <span>Възможност за солиден месечен доход при нисък първоначален риск</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#815159] w-6 h-6 mr-3 mt-1" />
                  <span>Достъп до вътрешна технология и автоматизации</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#815159] w-6 h-6 mr-3 mt-1" />
                  <span>Маркетинг материали, шаблони и насоки за продажби</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#815159] w-6 h-6 mr-3 mt-1" />
                  <span>Включване в мрежа от предприемачи и регулярни срещи</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386329/pexels-photo-4386329.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Franchise team"
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fff8e1] py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-[#815159] mb-6">Готов ли си да станеш част от Nomadica?</h3>
          <p className="text-lg text-gray-800 mb-6">
            Работим с хора, които искат да изградят бизнес в техния град и да създават стойност за собствениците. Без нужда от офис, само от желание и дисциплина.
          </p>
          <a
            href="/careers/operator/apply"
            className="inline-block bg-[#815159] text-white font-medium py-3 px-6 rounded-xl hover:bg-[#6e444b] transition"
          >
            Кандидатствай сега
          </a>

        </div>
      </section>

    </Layout>
  );
};

export default NomadicaOperators;
