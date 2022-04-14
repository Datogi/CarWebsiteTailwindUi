/* This example requires Tailwind CSS v2.0+ */
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

export default function Button() {
  return (
    <>
    <div className=' inline-block '>
      <h1>HI Name Surname</h1>
    </div>
      <button
        type="button"
        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white mr-5 ml-2 mt-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
      </button>
      <div className='inline-block'>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3  py-2 text-base bg-gray-200 rounded-md"
        defaultValue="Canada"
      >
        <option>USA</option>
        <option>Canada</option>
        <option>EU</option>
      </select>
    </div>
     
    </>
  )
}
