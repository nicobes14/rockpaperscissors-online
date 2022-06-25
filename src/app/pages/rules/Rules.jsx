//import PropTypes from 'prop-types';
const imgRules = new URL(
  '../../assets/images/image-rules-bonus.svg',
  import.meta.url
).href;


const Rules = () => {
  return (
    <div className="grid grid-rows-5">
      <div className="row-start-auto text-center justify-center flex flex-col">
        <h1 className="text-[#3b4363] font-bold text-3xl ">RULES</h1>
      </div>
      <div className="row-span-3">
        <img className="mx-auto" src={imgRules} />
      </div>
    </div>
  );
};

Rules.propTypes = {};

export default Rules;
