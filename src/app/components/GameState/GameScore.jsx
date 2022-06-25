import PropTypes from 'prop-types';
const imgUrl = new URL('../../assets/images/logo-bonus.svg', import.meta.url)
  .href;

const GameScore = (props) => {
  return (
    <div className="flex justify-center">
      <div className="m-8 border-[2px] border-[#606e85] grid grid-cols-3 p-4 rounded-lg gap-2">
        <div className="col-auto">
          <img src={imgUrl} className="w-20" />
        </div>
        <div className='col-span-1 flex flex-col items-center'>
          <h1 className='text-white font-bold text-xl'>BEST</h1>
          <h1 className='text-white font-bold text-xl'>OF {props.bestOf}</h1>
          <h1 className='text-white font-bold text-xl'>ROUND {props.round+1}</h1>
        </div>
        <div className="grid grid-cols-1 col-span-1   justify-items-end">
          <div className="w-20 h-20 bg-white rounded-lg col-span-3 grid grid-cols-1">
            <div className="row-span-1 text-center text-[#2a46c0] text-xs pt-2 font-semibold">
              SCORE
            </div>
            <div className="row-span-2 text-center text-[#3b4363] font-bold text-4xl">
              {props.score}/{Math.ceil(props.bestOf/2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GameScore.propTypes = {
  score: PropTypes.number,
  bestOf: PropTypes.number,
  round: PropTypes.number
};

export default GameScore;
