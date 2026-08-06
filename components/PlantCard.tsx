import Link from "next/link";
import { Plant } from "@/data/plants";


export default function PlantCard({
  plant,
}: {
  plant: Plant;
}) {

  return (

    <Link
      href={`/plants/${plant.id}`}
      className="block"
    >

      <article
        className="
          overflow-hidden
          rounded-2xl
          bg-white
          p-5
          shadow-sm
          transition
          hover:shadow-md
          hover:-translate-y-1
        "
      >

        <div
          className="
            flex
            h-32
            items-center
            justify-center
            rounded-xl
            bg-[#E8F0E5]
            text-5xl
          "
        >
          {plant.icon}
        </div>


        <h3
          className="
            mt-4
            text-xl
            font-semibold
            text-[#2F5D50]
          "
        >
          {plant.name}
        </h3>


        <p
          className="
            text-sm
            italic
            text-gray-500
          "
        >
          {plant.scientificName}
        </p>


        <p
          className="
            mt-3
            text-gray-600
          "
        >
          {plant.description}
        </p>


        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            text-sm
          "
        >

          <span>
            ☀️ {plant.light}
          </span>

          <span>
            ⭐ {plant.difficulty}
          </span>

        </div>


      </article>

    </Link>

  );
}
