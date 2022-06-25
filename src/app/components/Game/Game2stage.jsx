import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './styles.css';

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

function importImg(option) {
  switch (option) {
    case 1:
      return imgScissors;
    case 2:
      return imgPaper;
    case 3:
      return imgRock;
    case 4:
      return imgLizard;
    case 5:
      return imgSpock;
  }
}

function selectBorderColor(option) {
  switch (option) {
    case 1:
      return '#eba420';
    case 2:
      return '#4f6ef6';
    case 3:
      return '#dc3b56';
    case 4:
      return '#8b58e5';
    case 5:
      return '#4bb8d0';
  }
}

function roundResult(humanChoise, houseChoise) {
  switch (humanChoise) {
    case 1:
      if (houseChoise === 2 || houseChoise === 4) return 'YOU WIN';
      if (houseChoise === 3 || houseChoise === 5) return 'YOU LOSE';
      if (houseChoise === humanChoise) return 'TIE';
      break;
    case 2:
      if (houseChoise === 3 || houseChoise === 5) return 'YOU WIN';
      if (houseChoise === 1 || houseChoise === 4) return 'YOU LOSE';
      if (houseChoise === humanChoise) return 'TIE';
      break;
    case 3:
      if (houseChoise === 4 || houseChoise === 1) return 'YOU WIN';
      if (houseChoise === 5 || houseChoise === 2) return 'YOU LOSE';
      if (houseChoise === humanChoise) return 'TIE';
      break;
    case 4:
      if (houseChoise === 5 || houseChoise === 2) return 'YOU WIN';
      if (houseChoise === 1 || houseChoise === 3) return 'YOU LOSE';
      if (houseChoise === humanChoise) return 'TIE';
      break;
    case 5:
      if (houseChoise === 1 || houseChoise === 3) return 'YOU WIN';
      if (houseChoise === 4 || houseChoise === 2) return 'YOU LOSE';
      if (houseChoise === humanChoise) return 'TIE';
      break;
  }
}

const Game2stage = (props) => {
  const [houseOption, setHouseOption] = useState(null);
  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      let number = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      setHouseOption(number);
      setFinalText(roundResult(props.option, number));
    }, 2000);
  }, []);

  const handleNext = () => {
    let result =
      finalText === 'YOU WIN' ? 1 : finalText === 'YOU LOSE' ? -1 : 0;

    props.score(result);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="flex flex-col col-span-1 text-center items-center ">
          <div
            className={`${finalText === 'YOU WIN' ? 'win' : ''} flex justify-center w-36 h-36 bg-white p-6 rounded-full z-0 border-[18px] border-[${selectBorderColor(
              props.option
            )}] my-8 `}
          >
            <img className='' src={importImg(props.option)} />
          </div>

          <p className="text-white font-bold text-xl">YOU PICKED</p>
        </div>
        <div className="flex flex-col col-span-1 text-center items-center">
          {!houseOption ? (
            <div>
              <img className="loading w-36 h-36 bg-white p-4 rounded-full z-0 my-8" />
            </div>
          ) : (
            <div
              className={`${finalText === 'YOU LOSE' ? 'win' : ''} flex justify-center w-36 h-36 bg-white p-6 rounded-full z-0 border-[18px] border-[${selectBorderColor(
                houseOption
              )}] my-8 `}
            >
              <img src={importImg(houseOption)} />
            </div>
          )}

          <p className="text-white font-bold text-xl">THE HOUSE PICKED</p>
        </div>
      </div>
      {finalText ? (
        <div className="mt-8 flex flex-col md:items-center">
          <h1 className="text-white font-bold text-center text-5xl ">
            {finalText}
          </h1>
          <button
            onClick={handleNext}
            className="bg-white mt-8 py-3 md:w-96 mx-20 rounded-lg text-2xl font-bold md:max-w-xs"
          >
            NEXT
          </button>
        </div>
      ) : null}
    </div>
  );
};

Game2stage.propTypes = {
  option: PropTypes.number,
  score: PropTypes.func,
};

export default Game2stage;
