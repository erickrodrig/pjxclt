import { useState } from 'react';

function compare() {
  // logic to compare the PJ and CLT input values and provide results/estimations
}

const Body = () => {
  const [pjRemuneration, setPJRemuneration] = useState('');
  const [cltRemuneration, setCLTRemuneration] = useState('');

  return (
    <div className="p-20 dark:bg-neutral-800 dark:text-white text-left flex-grow">
      <div className="rounded grid grid-cols-3 gap-8 border-8 border-white p-10">
        {/* head */}
        <div></div> {/* empty div for spacing */}
        <div>
          <h2 className="text-2xl font-semibold pb-4 text-center">PJ</h2>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-4 text-center">CLT</h2>
        </div>

        <div className="font-semibold">Remuneração</div>
        <div className="text-center">
          <input
            type="text"
            value={pjRemuneration}
            onChange={(e) => setPJRemuneration(e.target.value)}
            className="border rounded p-1"
          />
        </div>
        <div className="text-center">
          <input
            type="text"
            value={cltRemuneration}
            onChange={(e) => setCLTRemuneration(e.target.value)}
            className="border rounded p-1"
          />
        </div>

        {/* ... Repeat for others */}

        {/* button */}
        <div className="col-span-3 text-center mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={compare}
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  )
};

export default Body;
