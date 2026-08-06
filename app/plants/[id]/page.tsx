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
      <main className="p-10">
        Pianta non trovata 🌱
      </main>
    );
  }


  return (

    <main className="min-h-screen bg-[#F8F6F1] p-6">

      <section className="mx-auto max-w-5xl">


        <article className="rounded-3xl bg-white p-8 shadow-sm">


          <div className="text-7xl">
            {plant.icon}
          </div>


          <h1 className="mt-5 text-4xl font-bold text-[#2F5D50]">
            {plant.name}
          </h1>


          <p className="italic text-gray-500">
            {plant.scientificName}
          </p>


          <p className="mt-6 text-gray-700">
            {plant.description}
          </p>


          <div className="mt-8 grid gap-5 md:grid-cols-2">


            <Info title="🌎 Origine" text={plant.origin}/>

            <Info title="🌿 Famiglia" text={plant.family}/>

            <Info title="☀️ Luce" text={plant.light}/>

            <Info title="💧 Acqua" text={plant.water}/>

            <Info title="🌡 Temperatura" text={plant.temperature}/>

            <Info title="💨 Umidità" text={plant.humidity}/>

            <Info title="🪴 Terriccio" text={plant.soil}/>

            <Info title="🌱 Concimazione" text={plant.fertilization}/>


          </div>


          <section className="mt-10">

            <h2 className="text-2xl font-bold text-[#2F5D50]">
              Problemi comuni
            </h2>


            <ul className="mt-4 space-y-2">

              {plant.problems.map((problem)=>(
                <li key={problem}>
                  ⚠️ {problem}
                </li>
              ))}

            </ul>

          </section>


          <section className="mt-10">

            <h2 className="text-2xl font-bold text-[#2F5D50]">
              Rimedi tradizionali
            </h2>


            <ul className="mt-4 space-y-2">

              {plant.remedies.map((remedy)=>(
                <li key={remedy}>
                  🌱 {remedy}
                </li>
              ))}

            </ul>

          </section>


        </article>


      </section>

    </main>

  );
}



function Info({
 title,
 text,
}:{
 title:string;
 text:string;
}){

 return(

  <div className="rounded-xl bg-[#F8F6F1] p-5">

    <h3 className="font-semibold text-[#2F5D50]">
      {title}
    </h3>

    <p className="mt-2 text-gray-600">
      {text}
    </p>

  </div>

 );

}
