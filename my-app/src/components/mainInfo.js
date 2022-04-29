const cars = [
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
  {
    name: "2015 Porsche Macan",
    role: "S duet s Dbk",
    price: "52245.00 $",
    imageUrl:
      "https://performancedrive.com.au/wp-content/uploads/2013/11/Porsche-Macan-blue.jpg",
    lastPrice: "50$",
    repairCost: "800$",
    shipping: "9$",
    total: "52245 $",
  },
];

export default function Maininfo() {
  return (
    <div className=" h-full">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {cars.map((person, index) => (
              <li key={index}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>
                        {person.name}{" "}
                        <span className="text-indigo-600 text-lg ml-4 font-bold">
                          {person.price}
                        </span>
                      </h3>
                      <p className="text-gray-600 text-sm">{person.role}</p>
                    </div>
                    <div className=" flex justify-between">
                      <button className=" rounded-full bg-gray-300 text-black px-4 py-2">
                        Button1
                      </button>
                      <button className=" rounded-full bg-gray-300 text-black px-4 py-2">
                        Button1
                      </button>
                      <button className=" rounded-full bg-gray-300 text-black px-4 py-2">
                        Button1
                      </button>
                    </div>
                    <ul className="flex flex-col ">
                      <li className="flex justify-between">
                        <h3 className="font-extralight">Last price</h3>
                        <h3 className="font-extralight">{person.lastPrice}</h3>
                      </li>
                      <li className="flex justify-between">
                        <h3 className="font-extralight">
                          Est cost & Repairment
                        </h3>
                        <h3 className="font-extralight">{person.repairCost}</h3>
                      </li>
                      <li className="flex justify-between">
                        <h3 className="font-extralight">Shipping fee</h3>
                        <h3 className="font-extralight">{person.shipping}</h3>
                      </li>
                      <li className="flex justify-between">
                        <h3 className="font-extrabold">Total Price</h3>
                        <h3 className="font-extrabold">{person.total}</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
