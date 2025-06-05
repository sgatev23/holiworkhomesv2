import React from 'react';

const PartnershipModels: React.FC = () => {
  return (
    <section className="w-full bg-[#f3f5f8] text-gray-900 py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#815159] tracking-tight">Партньорски Модели</h2>
          <p className="text-lg text-gray-700">
            Гъвкави структури. Гарантирани резултати. Създадени за визионерски проекти.
          </p>
        </div>

        <div className="text-gray-800 text-lg max-w-4xl mx-auto text-center">
          В Nomadica партнираме с инвеститори и строители, които искат да отключат пълния потенциал на имотите си. Изберете модела, който най-добре пасва на вашата стратегия.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Box 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#815159]">1. % от Приходите (Revenue Share)</h3>
              <p className="italic text-gray-500">Без авансови такси. Печелим само ако печелите и вие.</p>
              <p>Подходящ за инвеститори, които искат минимален риск и дългосрочен партньор. Управляваме всичко – от интериор до гости, срещу процент от месечния приход.</p>
              <div className="border-t pt-4">
                <h4 className="font-medium text-[#815159]">Как работи:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                  <li>Минимална заетост след 3 месеца или намаляваме таксата</li>
                  <li>Резултатно ценообразуване, базирано на ефективност</li>
                  <li>Ние поемаме разходите по старт, маркетинг и обяви</li>
                </ul>
              </div>
              <div className="text-sm space-y-1 text-gray-700">
                <p><strong>Препоръчително за:</strong> 3+ имота или нови комплекси</p>
                <p><strong>Процент:</strong> По Договаряне </p>
                <p><strong>Мин. период:</strong> 12 месеца</p>
                <p><strong>Включва:</strong> Интериор, заснемане, обяви, поддръжка, месечни отчети</p>
              </div>
              <button className="mt-6 w-full bg-[#815159] text-white font-medium py-2.5 px-4 rounded-md hover:opacity-90 transition">
                Свържете се за % Модел
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#815159]">2. Фиксирана Такса (Fixed Fee)</h3>
              <p className="italic text-gray-500">Предвидимост. Прозрачност. Пълен контрол.</p>
              <p>Подходящ за инвеститори, които искат месечна услуга без промени според сезона. Получавате цялата услуга срещу фиксирана такса.</p>
              <div className="border-t pt-4">
                <h4 className="font-medium text-[#815159]">Как работи:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                  <li>Без скрити такси и сезонни колебания</li>
                  <li>Всички основни услуги + дашборд за отчетност</li>
                  <li>Опции за допълнителен дизайн и мебелировка</li>
                </ul>
              </div>
              <div className="text-sm space-y-1 text-gray-700">
                <p><strong>Подходящ за:</strong> Стабилизирани сгради или препродажби</p>
                <p><strong>Такса:</strong> 300–500 лв/месец на имот</p>
                <p><strong>Мин. период:</strong> 6 месеца</p>
                <p><strong>Включва:</strong> Управление, гости, поддръжка, почистване, отчети</p>
              </div>
              <button className="mt-6 w-full bg-[#815159] text-white font-medium py-2.5 px-4 rounded-md hover:opacity-90 transition">
                Получете Индивидуална Оферта
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#815159]">Какво Гарантираме</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <li><strong>Гаранция:</strong> Минимален праг на приходи, под който не вземаме комисиона.</li>
            <li><strong>Месечен дашборд:</strong> Пълен достъп до приходи, отзиви и заетост</li>
            <li><strong>Оперативна поддръжка:</strong> От спално бельо до спешни ситуации.</li>
            <li><strong>Онбординг:</strong> Старт до 7 дни</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <button className="bg-gray-300 text-gray-800 font-medium px-6 py-2.5 rounded-md hover:bg-gray-400 transition">
            Изчисли Потенциала на Имота
          </button>
          <button className="bg-[#815159] text-white font-medium px-6 py-2.5 rounded-md hover:opacity-90 transition">
            Резервирай Разговор с Екипа
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;
