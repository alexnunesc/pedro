/* eslint-disable react/prop-types */
import DescriptionIcon from '@mui/icons-material/Description';
import { idiomasList } from '../utils/idiomasList';

export default function Card({data}) {

  // EU SEI QUE TEM COMO MELHORAR ISSO!

  return (
    <>
      <div className="border-2 border-black bg-white flex-1 rounded-md flex flex-row border-3 w-full gap-2 min-w-[360px] relative">
        <img src="anime.svg" alt="" className='relative z-0' />
        <div className="absolute top-95 right-90 bg-customGreen w-auto h-6 p-1 flex justify-center items-center rounded-md">
          <span>
            {idiomasList(data?.idiomas).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">{data?.nome}</h3>
            <div className='flex gap-2'>
              <p>{data?.tipos[0]}</p>
              <p>{data?.tipos[1]}</p>
              <p>{data?.tipos[2]}</p>
            </div>
          </div>
          <div>
            <p className='text-purple-500 text-[.9em]'><DescriptionIcon /> {data.chap ? <span>Chap: {data.chap}</span> : <span>Vol: {data.vol}</span>} [{'EN'}]</p>

            <p className='text-purple-500 border-t border-b border-dashed border-gray text-[.9em]'><DescriptionIcon /> {data.chap ? <span>Chap: {data.chap - 1}</span> : <span>Vol: {data.vol - 1}</span>} [{'PT'}]</p>

            <p className='text-purple-500 text-[.9em]'><DescriptionIcon /> {data.chap ? <span>Chap: {data.chap - 2}</span> : <span>Vol: {data.vol - 2}</span>} [{'ES'}]</p>
          </div>
        </div>
      </div>
    </>
    );
}
