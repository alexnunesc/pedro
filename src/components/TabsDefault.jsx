import { useState } from "react";
import Listviews from "../components/ListViews";
import { mockAnimesViews } from "../utils/data";

export default function TabsDefault() {
  const [escolha, setEscolha] = useState('today');
  const [animes, setAnimes] = useState(mockAnimesViews);

  const sortByViews = (period) => {
    const sortedAnimes = [...mockAnimesViews];
    sortedAnimes.sort((a, b) => b.views[period] - a.views[period]);
    return sortedAnimes;
  };

  const setAnimesByPeriod = (period) => {
    setAnimes(sortByViews(period));
    setEscolha(period);
  };

  return (
    <>
      <div className="flex p-1">
        <button
          className={`cursor-pointer ${escolha === 'today' ? 'flex-1 bg-customPurple text-white p-1 rounded-l-md font-bold' : 'flex-1 rounded-l-md p-1 bg-gray-300'}`}
          onClick={() => setAnimesByPeriod('today')}
        >
          Today
        </button>
        <button
          className={`cursor-pointer ${escolha === 'week' ? 'flex-1 bg-customPurple text-white p-1 font-bold' : 'flex-1 p-1 bg-gray-300'}`}
          onClick={() => setAnimesByPeriod('week')}
        >
          Week
        </button>
        <button
          className={`cursor-pointer ${escolha === 'month' ? 'flex-1 bg-customPurple text-white p-1 rounded-r-md font-bold' : 'flex-1 rounded-r-md p-1 bg-gray-300'}`}
          onClick={() => setAnimesByPeriod('month')}
        >
          Month
        </button>
      </div>
      <div className="border-2 border-black p-1 gap-2 flex flex-col">
        {animes?.slice(0, 9).map((data, i) => (
          <Listviews key={i} data={data} period={escolha} index={i} />
        ))}
      </div>
    </>
  );
}
