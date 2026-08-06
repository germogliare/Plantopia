import Navbar from "@/components/Navbar";
import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";
export default function Home() {
  return (
  <>
  <Navbar />

  <main className="min-h-screen bg-[#F8F6F1] px-6 py-10">
      <section className="mx-auto max-w-5xl">

        <header className="mb-12">
          <h1 className="text-5xl font-bold text-[#2F5D50]">
            🌿 Plantopia
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-700">
            Il tuo giardino digitale per conoscere,
            curare e far crescere le tue piante.
          </p>
        </header>


        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2F5D50]">
            Cerca una pianta
          </h2>

          <input
            type="text"
            placeholder="Es. Monstera, Ficus, Orchidea..."
            className="
              mt-4
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#5E8C61]
            "
          />
        </div>


        <section className="mt-10">

          <h2 className="mb-6 text-3xl font-semibold text-[#2F5D50]">
            🌱 Piante popolari
          </h2>


          <div className="grid gap-6 md:grid-cols-3">

            {plants.map((plant) => (
  <PlantCard
    key={plant.id}
    plant={plant}
  />
))}

          </div>

        </section>

      </section>
    </main>

</>
  );
}

{

  return (
    <article
      className="
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
          mb-4
          flex
          h-32
          items-center
          justify-center
          rounded-xl
          bg-[#E8F0E5]
          text-5xl
        "
      >
        🌿
      </div>


      <h3 className="text-xl font-semibold text-[#2F5D50]">
        {name}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

    </article>
  );
}
