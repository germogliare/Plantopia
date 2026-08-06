import Navbar from "@/components/Navbar";
import PlantCard from "@/components/PlantCard";
import { plants } from "@/data/plants";


export default function Home() {

  return (

    <>

      <Navbar />


      <main className="min-h-screen bg-[#F8F6F1] px-6 py-10">


        <section className="mx-auto max-w-6xl">


          <h1
            className="
              text-4xl
              font-bold
              text-[#2F5D50]
            "
          >
            🌿 Benvenuto in Plantopia
          </h1>


          <p
            className="
              mt-3
              text-gray-600
            "
          >
            Scopri, cura e fai crescere le tue piante.
          </p>


          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {plants.map((plant) => (

              <PlantCard
                key={plant.id}
                plant={plant}
              />

            ))}


          </div>


        </section>


      </main>


    </>

  );

}
