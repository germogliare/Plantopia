import { plants } from "@/data/plants";


export default function PlantDiary({
  params,
}: {
  params: {
    id: string;
  };
}) {


  const plant =
    plants.find(
      (item)=>item.id === Number(params.id)
    );


  if(!plant){

    return (
      <main className="p-10">
        Pianta non trovata 🌱
      </main>
    );

  }


  const diary = [

    {
      date:"Marzo 2026",
      event:"Acquistata",
      note:
        "Nuova arrivata in casa!"
    },


    {
      date:"Aprile 2026",
      event:"Nuova foglia",
      note:
        "La pianta sta crescendo bene."
    },


    {
      date:"Maggio 2026",
      event:"Rinvasata",
      note:
        "Nuovo vaso con terriccio drenante."
    }

  ];


  return (

    <main className="min-h-screen bg-[#F8F6F1] p-6">


      <section className="mx-auto max-w-4xl">


        <h1
          className="
          text-4xl
          font-bold
          text-[#2F5D50]
          "
        >
          📖 Diario di {plant.name}
        </h1>


        <p className="mt-2 text-gray-600">
          Segui la crescita della tua pianta nel tempo.
        </p>


        <div className="mt-10 space-y-6">


          {diary.map((entry)=>(

            <article
              key={entry.date}
              className="
              rounded-2xl
              bg-white
              p-6
              shadow-sm
              "
            >

              <h2
                className="
                text-xl
                font-semibold
                text-[#2F5D50]
                "
              >
                {entry.event}
              </h2>


              <p className="mt-1 text-gray-500">
                📅 {entry.date}
              </p>


              <p className="mt-3 text-gray-700">
                {entry.note}
              </p>


              <div
                className="
                mt-5
                flex
                h-32
                items-center
                justify-center
                rounded-xl
                bg-[#E8F0E5]
                text-4xl
                "
              >
                📸
              </div>


            </article>

          ))}


        </div>


      </section>


    </main>

  );
}
