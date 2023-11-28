import { BiCameraMovie } from "react-icons/bi";
import TailH1 from "../UI/TailH1";

export default function BoxOffice() {
  return (
    <div className="container mx-auto h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex m-8">
          <BiCameraMovie className="text-5xl text-amber-400" />
          
          <span className="text-red-700   text-4xl">박스오피스</span>
        </div>
        
        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-0 dark:text-gray-400">
            <thead className="text-xs text-amber-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-red-500">
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-200 border-b dark:bg-gray-800 border-red-500 hover:bg-gray-50 border-red-500">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

