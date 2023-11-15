import DescriptionIcon from '@mui/icons-material/Description';
import PropTypes from 'prop-types';
import { idiomasList } from '../utils/idiomasList';

function ListViews({ data, period, index }) {
  return (
    <div className='flex gap-1 justify-between'>
      <div className='flex gap-1'>
        <img className='w-[60px] h-[80px]' src={data.foto} alt="" />
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold'>{data.nome}</h2>
          <div className='flex gap-2'>
            <div>
              <span className='text-[.9em] flex gap-2'>
              {idiomasList(data?.idiomas).toUpperCase()}
            </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="flex justify-center items-center w-[4px] h-[4px] rounded-full bg-black"></span>
            </div>
            <div className='flex gap-1 text-[.9em]'>
              <p>{data?.tipos[0]}</p>
              <p>{data?.tipos[1]}</p>
            </div>
          </div>
          <div>
            <p className='text-sm text-purple-500 flex gap-2 '><DescriptionIcon fontSize='small' /> <span>Chap: {data.chap}</span>  <DescriptionIcon fontSize='small' /><span>Vol: {10}</span></p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-evenly items-end'>
        <div>
          <span className={ index + 1 < 4 ? 'h-[40px] w-[40px] text-customPurple bg-purple-100 flex justify-center items-center border border-solid border-gray-300 rounded-md p-1' : 'h-[40px] w-[40px] flex justify-center items-center border border-solid border-gray-300 rounded-md p-1 ' }>{index + 1}</span>
        </div>
        <div className="hidden viewsWidth:flex justify-center items-center border border-solid border-gray-300 rounded-md p-1 text-gray-300 h-[21px] min-w-[104px] text-[.9em]">
          <p>{ data.views[period].toFixed(3).replace('.', ',') } views</p>
        </div>
      </div>
    </div>
  );
}

export default ListViews;

ListViews.propTypes = {
  data: PropTypes.any.isRequired,
  period: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
