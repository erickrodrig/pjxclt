// import { useState } from 'react';

type Field = {
  label: string;
  type: "text" | "checkbox" | "number";
  inputMode?: "decimal" | "numeric";
  pattern?: string;
  readOnly?: boolean;
  defaultValue?: boolean | string | number;
};

const fields: Field[] = [
  { label: "Vale Alimentação / Vale Refeição", type: "text", inputMode: "decimal", pattern: "\\d*(\\.\\d{0,2})?" },
  // TODO: Make optional and boolean - { label: "Vale Transporte", type: "text", inputMode: "decimal", pattern: "\\d*(\\.\\d{0,2})?" },
  { label: "PLR - Participação nos Lucros e Resultados", type: "text", inputMode: "decimal", pattern: "\\d*(\\.\\d{0,2})?" },
  { label: "13º", type: "checkbox", readOnly: true, defaultValue: true },
  { label: "14º", type: "checkbox" },
  { label: "Dias de Férias Remuneradas", type: "number", readOnly: true, defaultValue: 30 },
  // ... add more fields as needed
];

// const x = fields;


function compare() {
  // logic to compare the PJ and CLT input values and provide results/estimations
}

const Body = () => {
  // const [pjRemuneration, setPJRemuneration] = useState('');
  // const [cltRemuneration, setCLTRemuneration] = useState('');

  return (
    <div className="p-20 dark:bg-neutral-800 dark:text-white text-left flex-grow">
      <div className="rounded-xl bg-slate-100 dark:bg-neutral-700 grid grid-cols-3 gap-8 p-10">
        {/* head */}
        <div></div> {/* empty div for spacing */}
        <div>
          <h2 className="text-2xl font-semibold pb-4 text-center">PJ</h2>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pb-4 text-center">CLT</h2>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); compare(); }}>
          <div className="rounded grid grid-cols-3 gap-8 p-10">
            {/* ... headers and other static elements ... */}

            {fields.map((field) => {
              return (
                <>
                  <div className="font-semibold">{field.label}</div>
                  <div className="text-center">
                    <input
                      type={field.type}
                      inputMode={field.inputMode}
                      pattern={field.pattern}
                      readOnly={field.readOnly}
                      defaultValue={field.defaultValue?.toString()}
                      className="border rounded p-1"

                    />
                  </div>
                  <div className="text-center">
                    <input
                      type={field.type}
                      inputMode={field.inputMode}
                      pattern={field.pattern}
                      className="border rounded p-1"
                    />
                  </div>
                </>
              );
            })}

            {/* ... buttons and other elements ... */}
          </div>
        </form>

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
