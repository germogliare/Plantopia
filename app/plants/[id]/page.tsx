import { plants } from "@/data/plants";


export default function PlantDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {

  const plant = plants.find(
    (item) => item.id === Number(params.id)
  );


  if (!plant) {
    return (
      <main className="min-h-screen bg-[#F8F6F1] p-10">
        <h1 className="text-3xl text-[#2F5D50]">
          Pianta non trovata 🌱
        </h1>
      </main>
    );
  }


  return (

    <main className="min-h-screen bg-[#F8F6F1] px-6 py-10">

      <section className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-white p-8 shadow-sm">


          <div
            className="
              flex
              h-48
              items-center
              justify-center
              rounded-2xl
              bg-[#E8F0E5]
              text-7xl
            "
          >
            {plant.icon}
          </div>


          <h1
            className="
              mt-8
              text-4xl
              font-bold
              text-[#2F5D50]
            "
          >
            {plant.name}
          </h1>


          <p className="mt-2 italic text-gray-500">
            {plant.scientificName}
          </p>


          <p className="mt-6 text-lg text-gray-700">
            {plant.description}
          </p>


          <div className="mt-8 grid gap-4 md:grid-cols-2">


            <InfoBox
              title="☀️ Luce"
              text={plant.light}
            />


            <InfoBox
              title="💧 Acqua"
              text={plant.water}
            />


            <InfoBox
              title="⭐ Difficoltà"
              text={plant.difficulty}
            />


            <InfoBox
              title="🌱 Cura"
              text="Segui la stagionalità e osserva la crescita."
            />


          </div>


        </div>


      </section>

    </main>

  );
}



function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {

  return (

    <div
      className="
        rounded-xl
        bg-[#F8F6F1]
        p-5
      "
    >

      <h3
        className="
          font-semibold
          text-[#2F5D50]
        "
      >
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {text}
      </p>

    </div>

  );

}
