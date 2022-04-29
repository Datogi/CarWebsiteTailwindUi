export default function InputElement({ name }) {
  return (
    <div className="">
      <select
        id="location"
        name="location"
        className="mt-1 border-2  block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option>{name}</option>
        <option>{name}</option>
        <option>{name}</option>
      </select>
    </div>
  );
}
