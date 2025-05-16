import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import { useTranslation } from 'react-i18next';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const cities = {
  Plovdiv: ["City Centre", "Old Town", "Kapana", "Karshiyaka", "Marasha", "Mladezhki Halm", "Sadiyski", "Kamenitsa 1", "Kamenitsa 2", "Zaharna fabrika", "Gagarin", "Filipovo", "Zapaden", "Hristo Smirnenski", "Kyuchuk Parizh", "Trakiya", "Vastanicheski", "Komatevski vazel", "Yuzhen", "Ostromila", "Belomorski", "Proslav", "Peshtersko shose"],
  Sofia: [
    "Oborishte", "Sredets", "Triaditsa", "Vazrazhdane", "Lower Lozenets", "Zona B-5", "Yavorov", // City Centre
    "Upper Lozenets", "Krasno Selo", "Slatina", "Poduyane", "Geo Milev", "Reduta", "Hladilnika", "Iztok", "Ivan Vazov", // Wider Centre
    "Mladost", "Studentski Grad", "Dianabad", "Druzhba", "Ovcha Kupel", "Lyulin", "Nadezhda", "Boyana", "Dragalevtsi", "Simeonovo", "Gorni Lozen", "Bankya" // Suburbs
  ],

  Varna: ["Vladislavovo", "Trakata", "Vinitsa", "Briz", "Old Town"],
  Burgas: ["Lazur", "Meden Rudnik", "Sarafovo", "Slaveykov", "Bratya Miladinovi"],
  Gabrovo: ["Sirmani", "Bichkinya", "Centre", "Etar", "Vasil Levski"],
  Ruse: ["Center", "Zdravets", "Charodeyka", "Druzhba", "Vuzrazhdane"],
  Bansko: ["Ski Area", "Old Town", "Gramadeto", "Glazne", "Strazhite"],
  Sozopol: ["Old Town", "New Town", "Budzhaka", "Chervenka", "Harmani"],
  "St. Vlas": ["Dinevi Resort", "Marina Dinevi", "Rusalka", "Intsaraki", "Yurta"]
};

const sofiaTranslations = {
  "Oborishte": "Оборище", "Sredets": "Средец", "Triaditsa": "Триадица", "Vazrazhdane": "Възраждане",
  "Lower Lozenets": "Долен Лозенец", "Zona B-5": "Зона Б-5", "Yavorov": "Яворов",
  "Upper Lozenets": "Горен Лозенец", "Krasno Selo": "Красно село", "Slatina": "Слатина", "Poduyane": "Подуяне",
  "Geo Milev": "Гео Милев", "Reduta": "Редута", "Hladilnika": "Хладилника", "Iztok": "Изток", "Ivan Vazov": "Иван Вазов",
  "Mladost": "Младост", "Studentski Grad": "Студентски град", "Dianabad": "Дианабад", "Druzhba": "Дружба",
  "Ovcha Kupel": "Овча купел", "Lyulin": "Люлин", "Nadezhda": "Надежда", "Boyana": "Бояна",
  "Dragalevtsi": "Драгалевци", "Simeonovo": "Симеоново", "Gorni Lozen": "Горни Лозен", "Bankya": "Банкя"
};

const plovdivZones = {
  "City Centre": "center", "Old Town": "center", "Kapana": "center",
  "Marasha": "wider", "Mladezhki Halm": "wider", "Sadiyski": "wider", "Karshiyaka": "wider",
  "Kamenitsa 1": "wider", "Kamenitsa 2": "wider",
  "Zapaden": "suburbs", "Zaharna fabrika": "suburbs", "Gagarin": "suburbs", "Filipovo": "suburbs",
  "Hristo Smirnenski": "suburbs", "Kyuchuk Parizh": "suburbs", "Trakiya": "suburbs", "Vastanicheski": "suburbs",
  "Komatevski vazel": "suburbs", "Yuzhen": "suburbs", "Ostromila": "suburbs", "Belomorski": "suburbs",
  "Proslav": "suburbs", "Peshtersko shose": "suburbs"
};

const sofiaZones = {
  "Oborishte": "center", "Sredets": "center", "Triaditsa": "center", "Vazrazhdane": "center",
  "Lower Lozenets": "center", "Zona B-5": "center", "Yavorov": "center",
  "Upper Lozenets": "wider", "Krasno Selo": "wider", "Slatina": "wider", "Poduyane": "wider",
  "Geo Milev": "wider", "Reduta": "wider", "Hladilnika": "wider", "Iztok": "wider", "Ivan Vazov": "wider",
  "Mladost": "suburbs", "Studentski Grad": "suburbs", "Dianabad": "suburbs", "Druzhba": "suburbs",
  "Ovcha Kupel": "suburbs", "Lyulin": "suburbs", "Nadezhda": "suburbs", "Boyana": "suburbs",
  "Dragalevtsi": "suburbs", "Simeonovo": "suburbs", "Gorni Lozen": "suburbs", "Bankya": "suburbs"
};
const citiesTranslations = {
  "Sofia": "София", "Plovdiv": "Пловдив", "Varna": "Варна", "Burgas": "Бургас", "Gabrovo": "Габрово",
  "Ruse": "Русе", "Bansko": "Банско", "Sozopol": "Созопол", "St. Vlas": "Св. Влас"
};
const plovdivTranslations = {
  "City Centre": "Център", "Old Town": "Старият град", "Kapana": "Капана", "Karshiyaka": "Кършияка", "Marasha": "Мараша", "Mladezhki Halm": "Младежки хълм", "Sadiyski": "Съдийски", "Kamenitsa 1": "Каменица 1", "Kamenitsa 2": "Каменица 2", "Zaharna fabrika": "Захарна фабрика", "Gagarin": "Гагарин", "Filipovo": "Филипово", "Zapaden": "Западен", "Hristo Smirnenski": "Христо Смирненски", "Kyuchuk Parizh": "Кючук Париж", "Trakiya": "Тракия", "Vastanicheski": "Въстанически", "Komatevski vazel": "Коматевски възел", "Yuzhen": "Южен", "Ostromila": "Остромила", "Belomorski": "Беломорски", "Proslav": "Прослав", "Peshtersko shose": "Пещерско шосе"
}

const bedroomTranslations = {
  "0": "Студио",
  "1": "1 спалня",
  "2": "2 спални"
};
const rentalTypeTranslations = {
  "short-term": "Краткосрочен наем",
  "long-term": "Дългосрочен наем"
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const baseOccupancy = [0.45, 0.5, 0.5, 0.65, 0.65, 0.69, 0.69, 0.65, 0.65, 0.5, 0.45, 0.45];
const PropertyCalculator = () => {
  const { t } = useTranslation(); // ✅ Add this line to fix the hook error

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      city: "Sofia",
      neighborhood: "Oborishte",
      bedrooms: "2",
      rentalType: "short-term"
    }
  });


  const [data, setData] = useState([]);
  const [netAvg, setNetAvg] = useState(null);
  const [occAvg, setOccAvg] = useState(null);
  const [minRate, setMinRate] = useState(null);
  const [maxRate, setMaxRate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const city = watch("city");
  const rentalType = watch("rentalType");
  const neighborhood = watch("neighborhood");
  const bedrooms = watch("bedrooms");
  const neighborhoodOptions = city ? cities[city] || [] : [];

  const seasides = ["Sozopol", "St. Vlas"];
  const centerCities = ["Plovdiv", "Varna", "Burgas"];

  const processData = ({ city, neighborhood, bedrooms, rentalType }) => {
    const isSea = seasides.includes(city);
    const isCenter = centerCities.includes(city) && neighborhood.includes("Old Town");
    const isSofia = city === "Sofia";
    const isLongTerm = rentalType === "long-term";
    const zone = city === "Plovdiv" ? plovdivZones[neighborhood] : null;

    const rate = ["Plovdiv", "Sofia"].includes(city) ? [45, 60, 75][bedrooms] : [36, 48, 60][bedrooms];

    let grossYear = 0;
    let profitYear = 0;
    let totalOcc = 0;

    const monthlyData = months.map((month, idx) => {
      let occ = isLongTerm ? 1 : baseOccupancy[idx];
      if (!isLongTerm) {
        if (isSea) occ = idx >= 5 && idx <= 8 ? 0.9 : 0.3;
        if (isCenter) occ = 0.8;
        if (isSofia) occ = Math.min(occ + 0.2, 1);
      }

      let gross = 30 * occ * rate;
      if (isLongTerm) gross *= 0.7;
      const cost = gross * 0.35;
      const profit = gross - cost;

      grossYear += gross;
      profitYear += profit;
      totalOcc += occ;

      return {
        name: month,
        Gross: Math.round(gross),
        Expenses: Math.round(cost),
        Profit: Math.round(profit)
      };
    });

    setData(monthlyData);
    setNetAvg(Math.round(profitYear / 12));
    setOccAvg(Math.round((totalOcc / 12) * 100));
    setMinRate(Math.round(rate * 1.8));
    setMaxRate(Math.round(rate * 2.6));
  };

  useEffect(() => {
    processData({ city, neighborhood, bedrooms, rentalType });
  }, [city, neighborhood, bedrooms, rentalType, emailSubmitted]);

  const onFieldChange = () => setHasChanged(true);

  const handleGenerateClick = () => {
    if (hasChanged && !hasPrompted && !hasUnlocked) {
      setShowModal(true);
      setHasPrompted(true);
    } else {
      processData({ city, neighborhood, bedrooms, rentalType });
    }
  };

  const submitEmailAndGenerate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Simulate success without external call
    setEmailSubmitted(true);
    setHasUnlocked(true);
    setShowModal(false);
    setHasChanged(false);

    console.log("✅ Email accepted, report unlocked");
  };

  return (
    <section id="calculator" className="py-2 px-6" style={{ backgroundColor: '#f3f5f8' }}>
      <div className="max-w-7xl mx-auto bg-[#fdf4e3] rounded-xl shadow-md p-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#815159]">
          {t('calculator.title')}
        </h2>
        <p className="text-center text-sm text-[#815159] italic mb-6">
          {t('calculator.betaNotice')}
        </p>


        <div className="md:flex gap-10 items-start">
          <form className="flex-1 space-y-6">
            <div>
              <label className="font-medium">{t('calculator.city')}</label>
              <select {...register("city", { required: true, onChange: onFieldChange })} className="form-input w-full">
                {Object.keys(cities).map((c) => (
                  <option key={c} value={c}>
                    {t(`calculator.cities.${c}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium">{t('calculator.neighborhood')}</label>
              <select {...register("neighborhood", { required: true, onChange: onFieldChange })} className="form-input w-full">
                {neighborhoodOptions.map((n) => (
                  <option key={n} value={n}>
                    {t(`calculator.neighborhoods.${city}.${n}`)}
                  </option>
                ))}

              </select>

            </div>
            <div>
              <label className="font-medium">{t('calculator.bedrooms')}</label>
              <select {...register("bedrooms", { required: true, onChange: onFieldChange })} className="form-input w-full">
                {["0", "1", "2"].map((val) => (
                  <option key={val} value={val}>
                    {bedroomTranslations[val]}
                  </option>
                ))}
              </select>

            </div>
            <div>
              <label className="font-medium">{t('calculator.rentalType')}</label>
              <select {...register("rentalType", { required: true, onChange: onFieldChange })} className="form-input w-full">
                {["short-term", "long-term"].map((type) => (
                  <option key={type} value={type}>
                    {rentalTypeTranslations[type]}
                  </option>
                ))}
              </select>


            </div>
            <div className="pt-2">
              <button onClick={handleGenerateClick} type="button" className="btn bg-[#815159] text-white px-6 py-2 rounded hover:bg-[#6f464d] transition">
                {t('calculator.generate')}
              </button>

            </div>
          </form>

          {data.length > 0 && (
            <div id="report-section" className={`flex-1 mt-10 md:mt-0 bg-white rounded p-6 shadow transition ${!hasUnlocked ? 'blur-sm pointer-events-none' : ''}`}>
              <h3 className="text-xl font-semibold text-center mb-4">Estimated Monthly Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} лв.`, ""]} />
                  <Legend />
                  <Bar dataKey="Gross" stackId="a" fill="#d4af37" />
                  <Bar dataKey="Expenses" stackId="a" fill="#815159" />
                  <Bar dataKey="Profit" stackId="a" fill="#76b947" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mt-6">
                <div className="bg-[#f3f5f8] p-4 rounded shadow">
                  <h4 className="font-semibold text-[#815159]">Avg. Occupancy / Profit (BGN)</h4>
                  <div className="flex justify-center mt-2">
                    <span className="bg-[#815159] text-white px-4 py-2 rounded-l">{occAvg}%</span>
                    <span className="bg-[#76b947] text-white px-4 py-2 rounded-r">{netAvg} лв.</span>
                  </div>
                </div>
                <div className="bg-[#f3f5f8] p-4 rounded shadow">
                  <h4 className="font-semibold text-[#815159]">Avg. Daily Price Range (BGN)</h4>
                  <div className="flex justify-center mt-2">
                    <span className="bg-[#815159] text-white px-4 py-2 rounded-l">{minRate}</span>
                    <span className="bg-[#76b947] text-white px-4 py-2 rounded-r">{maxRate}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold text-[#815159] mb-4">Before we show your report...</h3>
              <p className="text-sm text-gray-600 mb-4">Enter your email to get a copy and unlock the insights.</p>
              <input
                type="email"
                className="form-input w-full mb-4"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={submitEmailAndGenerate}
                className="w-full py-2 bg-[#815159] text-white font-semibold rounded hover:bg-[#6f464d] transition"
              >
                View My Report
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyCalculator;

