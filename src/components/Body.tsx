import { useState } from 'react';

const Body = () => {
  const [pjRemuneration, setPJRemuneration] = useState('');
  const [cltRemuneration, setCLTRemuneration] = useState('');

  return (
    <div className="p-20 bg-neutral-800 text-white text-left">
      <div className="rounded grid grid-cols-2 gap-8 border-8 border-white p-10">
        <div>
          <h2 className="text-2xl font-semibold pb-4">PJ</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Remuneração</th>
                {/* Add other table headers as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={pjRemuneration}
                    onChange={(e) => setPJRemuneration(e.target.value)}
                  />
                </td>
                {/* Add other table row content as needed */}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-4">CLT</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Remuneração</th>
                {/* Add other table headers as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={cltRemuneration}
                    onChange={(e) => setCLTRemuneration(e.target.value)}
                  />
                </td>
                {/* Add other table row content as needed */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default Body;
