const InputTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-neutral-700 divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3">PJ</th>
            <th className="px-6 py-3">CLT</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-3">Remuneração</td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
          </tr>
          <tr>
            <td className="px-6 py-3">Vale Alimentação / Vale Refeição</td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
          </tr>
          <tr>
            <td className="px-6 py-3">PLR - Participação nos Lucros e Resultados</td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
          </tr>
          <tr>
            <td className="px-6 py-3">13º</td>
            <td>
              <select className="p-2 rounded border w-full">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
            <td className="px-6 py-3">Yes</td>
          </tr>
          <tr>
            <td className="px-6 py-3">14º</td>
            <td>
              <select className="p-2 rounded border w-full">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
            <td>
              <select className="p-2 rounded border w-full">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3">Dias de Férias Remuneradas</td>
            <td><input type="number" className="p-2 rounded border w-full" /></td>
            <td><input type="number" className="p-2 rounded border w-full" defaultValue="30" readOnly /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InputTable;
