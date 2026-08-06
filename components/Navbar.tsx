export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">
            🌿
          </span>

          <span className="text-2xl font-bold text-[#2F5D50]">
            Plantopia
          </span>
        </div>


        {/* Menu desktop */}
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">

          <a
            href="#"
            className="transition hover:text-[#5E8C61]"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-[#5E8C61]"
          >
            Esplora
          </a>

          <a
            href="#"
            className="transition hover:text-[#5E8C61]"
          >
            Le mie piante
          </a>

          <a
            href="#"
            className="transition hover:text-[#5E8C61]"
          >
            Community
          </a>

        </div>


        {/* Profilo */}
        <button
          className="
            rounded-full
            bg-[#5E8C61]
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-[#2F5D50]
          "
        >
          Accedi
        </button>


      </div>
    </nav>
  );
}
