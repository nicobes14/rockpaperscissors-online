import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game1stage from '../../components/Game/Game1stage';
import Game2stage from '../../components/Game/Game2stage';
import GameScore from '../../components/GameState/GameScore';

const imgBack = new URL('../../assets/images/icon-close.svg', import.meta.url)
  .href;

import { Dialog, Transition } from '@headlessui/react';
import Rules from '../rules/Rules';

function GameOffline(props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [result, setResult] = useState(0);
  const [option, setOption] = useState(null);

  const [humanWins, setHumanWins] = useState(0);
  const [houseWins, setHouseWins] = useState(0);

  const [round, setRound] = useState(0);

  let navigate = useNavigate();

  const selected = (option) => {
    setOption(option);
  };

  useEffect(() => {
    let bestOf = props.bestOf || 5;

    if (round === bestOf) {
      humanWins > houseWins ? setResult(1) : setResult(-1);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }

    if (humanWins > bestOf / 2) {
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
      setResult(1);
    }

    if (houseWins > bestOf / 2) {
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
      setResult(-1);
    }
  }, [round]);

  const scoreFunction = (action) => {
    if (action === 1) setHumanWins(humanWins + 1);
    if (action === -1) setHouseWins(houseWins + 1);

    setRound(round + 1);

    setOption(null);
  };

  return (
    <>
      {' '}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    
                  </Dialog.Title>
                  <Rules />
                  <div className="flex justify-center">
                    <button
                      onClick={closeModal}
                      className="font-bold text-[#0DF5E3]"
                    >
                      <img className="mx-auto" src={imgBack} />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>




      <div className=" mx-auto bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen grid grid-cols-1 grid-rows-5">
        <div className="row-span-1 ">
          <GameScore round={round} score={humanWins} bestOf={props.bestOf || 5} />
        </div>
        <div className="row-span-3  flex flex-col justify-center ">
          {result === 0 ? (
            !option ? (
              <Game1stage selectOption={selected} />
            ) : (
              <Game2stage option={option} score={scoreFunction} />
            )
          ) : result === 1 ? (
            <div className="animate__zoomIn animate__animated place-self-center">
              <h1 className="text-white font-bold text-7xl text-center">
                YOU WIN
              </h1>
            </div>
          ) : (
            <div className="animate__zoomIn animate__animated place-self-center">
              <h1 className="text-white font-bold text-7xl text-center">
                YOU LOSE
              </h1>
            </div>
          )}
        </div>
        <div className="row-span-1 flex justify-center">
          <div className="items-center">
            <button
              onClick={openModal}
              to="/rules"
              className="bg-transparent border-[2px] border-[#606e85] px-10 py-2 rounded-lg font-bold text-white text-center"
            >
              RULES
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

GameOffline.propTypes = {
  bestOf: PropTypes.number,
};

export default GameOffline;
