import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import { useTranslation } from 'react-i18next';
import supabase from "../../supabaseclient";
import { plovdivZones, getPlovdivRate } from '../../zones';

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
const seasonMap = {
  low: ["Jan", "Feb", "Dec"],
  medium: ["Mar", "Apr", "Sep", "Oct", "Nov"],
  high: ["May", "Jun", "Jul", "Aug"]
};

const occupancyByZone = {
  center: 0.85,
  wider: 0.75,
  suburbs: 0.5
};

const seasonMultiplier = {
  low: 0.6,
  medium: 0.85,
  high: 1.1
};

const plovdivLongTermBase = [800, 1050, 1500]; // Studio, 1BR, 2BR
const plovdivLongTermZoneMultiplier = {
  center: 1,
  wider: 0.8,
  suburbs: 0.65
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  const gross = payload[0].payload.Gross;
  const expenses = payload.find(p => p.name === "Expenses")?.value || 0;
  const profit = payload.find(p => p.name === "Profit")?.value || 0;

  return (
    <div className="bg-white p-3 rounded shadow border border-gray-300 text-sm">
      <p className="font-semibold mb-1">Месец: {label}</p>
      <p><strong>Общо:</strong> {gross} лв.</p>
      <p style={{ color: "#815159" }}>Разходи: {expenses} лв.</p>
      <p style={{ color: "#76b947" }}>Печалба: {profit} лв.</p>
    </div>
  );
};


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

  const [isMobile, setIsMobile] = useState(false);
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

    const rateShortTerm = city === "Plovdiv"
      ? getPlovdivRate(neighborhood, bedrooms) * 0.75
      : city === "Sofia"
        ? [45, 60, 75][parseInt(bedrooms)] * 0.75
        : [36, 48, 60][parseInt(bedrooms)] * 0.75;


    let grossYear = 0;
    let profitYear = 0;
    let totalOcc = 0;

    const monthlyData = months.map((month, idx) => {
      let occ;

      if (city === "Plovdiv" && !isLongTerm) {
        const baseOcc = occupancyByZone[zone] ?? 0.5;
        const season = seasonMap.high.includes(month)
          ? "high"
          : seasonMap.low.includes(month)
            ? "low"
            : "medium";
        occ = Math.min(baseOcc * seasonMultiplier[season], 1);
      } else {
        occ = isLongTerm ? 1 : baseOccupancy[idx];
        if (!isLongTerm) {
          if (isSea) occ = idx >= 5 && idx <= 8 ? 0.9 : 0.3;
          if (isCenter) occ = 0.8;
          if (isSofia) occ = Math.min(occ + 0.2, 1);
        }
      }

      let gross;

      if (city === "Plovdiv" && isLongTerm) {
        const zone = plovdivZones[neighborhood];
        const base = plovdivLongTermBase[parseInt(bedrooms)];
        const multiplier = plovdivLongTermZoneMultiplier[zone] || 1;
        gross = base * multiplier;
        occ = 1; // full month assumed
      } else {
        const shortTermGross = 30 * occ * rateShortTerm;
        gross = isLongTerm ? shortTermGross * 0.7 : shortTermGross;
      }


      const cost = isLongTerm ? gross * 0.2 : gross * 0.35;
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

    const avgDailyPrice = Math.round((grossYear / 12) / 30);
    setData(monthlyData);
    setNetAvg(Math.round(profitYear / 12));
    setOccAvg(Math.round((totalOcc / 12) * 100));
    setMinRate(Math.round(avgDailyPrice * 0.85)); // -15%
    setMaxRate(Math.round(avgDailyPrice * 1.25)); // +25%
  };


  useEffect(() => {
    processData({ city, neighborhood, bedrooms, rentalType });
  }, [city, neighborhood, bedrooms, rentalType, emailSubmitted]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const onFieldChange = () => setHasChanged(true);

  const handleGenerateClick = () => {
    if (hasChanged && !hasPrompted && !hasUnlocked) {
      setShowModal(true);
      setHasPrompted(true);
    } else {
      processData({ city, neighborhood, bedrooms, rentalType });
    }
  };

  const submitEmailAndGenerate = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    const { error } = await supabase
      .from('emails')
      .insert([{ email }])

    if (error) {
      console.error('Error storing email:', error)
      alert("Something went wrong.")
      return
    }

    setEmailSubmitted(true)
    setHasUnlocked(true)
    setShowModal(false)
    setHasChanged(false)
  }

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
              <select
                {...register("neighborhood", { required: true, onChange: onFieldChange })}
                className="form-input w-full max-h-52 overflow-y-auto"
              >

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
              <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis
  dataKey="name"
  hide={isMobile}
  tick={{ fontSize: 10, fill: "#555", fontWeight: 500 }}
/>

                  <YAxis
  tickFormatter={(value) => `${value} лв.`}
  tick={{ fontSize: isMobile ? 9 : 11, fill: "#555", fontWeight: 500 }}
  width={isMobile ? 24 : 38}
/>


                  <Tooltip
  content={<CustomTooltip />}
  wrapperStyle={{ pointerEvents: "auto" }}
/>

<Legend
  iconType="square"
  iconSize={10}
  layout="horizontal"
  align="center"
  wrapperStyle={{
    fontSize: isMobile ? 10 : 12,
    fontWeight: 600,
    marginTop: 12,
    color: "#444"
  }}
/>

                  
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

