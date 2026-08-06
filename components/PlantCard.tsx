import { Plant } from "@/data/plants";


export default function PlantCard({
  plant,
}: {
  plant: Plant;
}) {

  return (

    <article
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        transition
        hover:shadow-md
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


      <div className="mt-4 space-y-2 text-sm">

        <p>
          ☀️ {plant.light}
        </p>

        <p>
          💧 {plant.water}
        </p>

        <p>
          ⭐ Difficoltà: {plant.difficulty}
        </p>

      </div>


    </article>

  );
}
