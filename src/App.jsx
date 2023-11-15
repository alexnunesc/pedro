import { useState } from 'react';
import Card from './components/Card';
import TabsDefault from './components/TabsDefault';
import { mockAnimes, mockAnimesVol } from './utils/data';

export default function App() {
  const [escolha, setEscolha] = useState('chap');
  const [animes, setAnimes] = useState(mockAnimes);

  const setAnimesChap = () => {
    setAnimes(mockAnimes);
    setEscolha('chap');
  };

  const setAnimesVol = () => {
    setAnimes(mockAnimesVol);
    setEscolha('vol');
  };

  return (
    <div className=" p-2 container mx-auto max-w-[1341px] flex justify-center gap-1 flex-col xl:flex-row min-w-[430px]">
      {/* Lado Esquerdo */}
      <div className=" p-4 md:w-3/3 pr-4 mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-start gap-x-2">
          <div>
            <h2 className="text-xl font-bold p-1 mb-2 md:mb-0 md:mr-0 text-customPurple">Latest Updates</h2>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <a className={`cursor-pointer ${escolha === 'chap' ? 'bg-customPurple text-white p-1 rounded-md font-bold' : ''}`} onClick={setAnimesChap}>Chapter</a>
            <a className={`cursor-pointer ${escolha === 'vol' ? 'bg-customPurple text-white p-1 rounded-md font-bold' : ''}`} onClick={setAnimesVol}>Volume</a>
          </div>
        </div>

        <div className="p-1 grid grid-cols-1 md1:grid-cols-2 md:grid-cols-1 gap-2 mb-4">
          {
            animes?.slice(0, 9).map((data, i) => (
              <Card key={i} data={data} />
            ))
          }
        </div>

      </div>

      {/* Lado Direito */}
      <div className="p-4 bg-white p-4 rounded-md flex-col w-full lg:w-[30%] min-w-[433px]">
        <h2 className="text-xl font-bold p-1 mb-2 md:mb-0 md:mr-0 text-customPurple">Most Viewed
      </h2>
        <div className="mb-4">
          <TabsDefault />
        </div>
      </div>

    </div>
  )
}
