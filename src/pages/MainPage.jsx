import Numbers from "../components/Numbers";
function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-3 ">
        <div className="flex flex-col items-center justify-center min-h-screen py-3 bg-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Rifa de Bicicleta
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Números Disponibles{" "}
            <span className="text-green-500">
              <i className="ri-checkbox-fill"></i>
            </span>
          </p>
          <Numbers />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
