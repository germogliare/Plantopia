import Link from "next/link";
import { plants } from "@/data/plants";


export default function MyPlants() {

  const myPlants = [
    {
      id: 1,
      nickname: "Luna",
      acquired: "Marzo 2026",
      notes:
        "Prima Monstera di casa. Cresce vicino alla finestra."
    }
  ];


  return (

    <main className="min-h-screen bg-[#F8F6F1] px-6 py-10">

      <section className="mx-auto max-w-5xl">


        <h1
          className="
            text-4xl
            font-bold
            text-[#2F5D50]
          "
        >
          🌱 Le mie piante
        </h1>


        <p className="mt-3 text-gray-600">
          Il tuo diario personale di crescita.
        </p>


        <div className="mt-8 grid gap-6 md:grid-cols-2">


          {myPlants.map((myPlant) => {


            const plant =
              plants.find(
                (item) => item.id === myPlant.id
              );


            if (!plant) return null;


            return (

              <Link
                key={myPlant.nickname}
                href={`/my-plants/${myPlant.id}`}
                className="block"
              >

                <article
                  className="
                    rounded-2xl
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:shadow-md
                  "
                >


                  <div className="text-5xl">
                    {plant.icon}
                  </div>


                  <h2
                    className="
                      mt-4
                      text-2xl
                      font-semibold
                      text-[#2F5D50]
                    "
                  >
                    {myPlant.nickname}
                  </h2>


                  <p className="italic text-gray-500">
                    {plant.name}
                  </p>


                  <div className="mt-4 space-y-2 text-gray-700">


                    <p>
                      📅 Acquistata:
                      {" "}
                      {myPlant.acquired}
                    </p>


                    <p>
                      📝 Note:
                      {" "}
                      {myPlant.notes}
                    </p>


                  </div>


                </article>

              </Link>

            );

          })}


        </div>


      </section>

    </main>

  );
}
