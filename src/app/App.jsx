import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
const imgUrl = new URL('./assets/images/logo-bonus.svg', import.meta.url).href;

const imgBack = new URL('./assets/images/icon-close.svg', import.meta.url).href;

import { Dialog, Transition } from '@headlessui/react';
import Rules from './pages/rules/Rules';

function App() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
                  ></Dialog.Title>
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

      <div className="bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen flex flex-col">
        <img src={imgUrl} className="el mx-auto w-56 my-20" />
        <div className="container mx-auto flex flex-col justify-center md:items-center">
          <Link
            to="gameoffline"
            className="bg-white my-4 py-3 mx-24 rounded-lg md:w-96 font-bold text-center"
          >
            PLAY OFFLINE
          </Link>
          <Link
            to="game"
            className="bg-white my-4 py-3 md:w-96 mx-24 rounded-lg font-bold text-center"
          >
            MULTIPLAYER
          </Link>
          <button
            onClick={openModal}
            className="bg-transparent border-[2px] md:w-56 border-[#606e85] my-4 py-3 mx-32 rounded-lg font-bold text-white text-center"
          >
            RULES
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
