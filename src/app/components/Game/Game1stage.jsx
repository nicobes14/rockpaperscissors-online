import PropTypes from 'prop-types';

const imgBackground = new URL(
  '../../assets/images/bg-pentagon.svg',
  import.meta.url
);
const imgScissors = new URL(
  '../../assets/images/icon-scissors.svg',
  import.meta.url
);
const imgPaper = new URL('../../assets/images/icon-paper.svg', import.meta.url);
const imgRock = new URL('../../assets/images/icon-rock.svg', import.meta.url);
const imgSpock = new URL('../../assets/images/icon-spock.svg', import.meta.url);
const imgLizard = new URL(
  '../../assets/images/icon-lizard.svg',
  import.meta.url
);

const Game1stage = (props) => {
  const onClick = (option) => {
    props.selectOption(option);
  };

  return (
    <div className="relative">
      <img
        className="md:w-96 mx-auto left-0 right-0 mt-14 absolute w-64"
        src={imgBackground}
      />
      <div className="flex flex-col justify-center md:items-center">
        <div className="flex justify-center">
          <div
            onClick={() => onClick(1)}
            className=" bg-white p-4 rounded-full z-0 border-[12px] border-[#eba420]"
          >
            <img className="w-12 h-12" src={imgScissors}></img>
          </div>
        </div>

        <div className="flex justify-between md:w-[28rem] mx-12 pb-6 mt-6">
          <div
            onClick={() => onClick(5)}
            className="bg-white p-4 rounded-full z-0 border-[12px] border-[#4bb8d0]"
          >
            <img className="w-12 h-12" src={imgSpock}></img>
          </div>
          <div
            onClick={() => onClick(2)}
            className="bg-white p-4 rounded-full z-0 border-[12px] border-[#4f6ef6]"
          >
            <img className="w-12 h-12" src={imgPaper}></img>
          </div>
        </div>
        <div className="flex justify-around md:w-[28rem] md:mt-20 mx-20">
          <div
            onClick={() => onClick(4)}
            className="bg-white p-4 rounded-full z-0 border-[12px] border-[#8b58e5]"
          >
            <img className="w-12 h-12" src={imgLizard}></img>
          </div>
          <div
            onClick={() => onClick(3)}
            className="bg-white p-4 rounded-full z-0 border-[12px] border-[#dc3b56]"
          >
            <img className="w-12 h-12" src={imgRock}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

Game1stage.propTypes = {
  selectOption: PropTypes.func,
};

export default Game1stage;
