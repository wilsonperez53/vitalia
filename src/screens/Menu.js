import React from 'react';
import Layout from '../components/Layout';

export default function Menu() {
  return (
    <Layout>
      <section className="flex items-center justify-center text-gray-600 body-font">
        <div className="w-full max-w-3xl px-4">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-center">Menu principal</h1>

          <div className="flex flex-col md:flex-row md:justify-center gap-12">
            <div className="flex gap-12 justify-center">
              <button className="bg-gray-300 py-3 w-full px-3 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex items-start flex-col ">
                  <span className="title-font font-medium">Asistencia</span>
                </span>
              </button>

              <button className="bg-gray-300 w-full py-3 px-3 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex items-start flex-col ">
                  <span className="title-font font-medium">Seguimiento</span>
                </span>
              </button>
            </div>
            </div>

            <div className="flex flex-col justify-center gap-6 mt-5">

              <div className="flex gap-12 justify-center">
                <button className="bg-gray-300 w-full inline-flex py-3 px-3 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <span className="ml-4 flex items-start flex-col ">
                    <span className="title-font font-medium">Recordatorios</span>
                  </span>
                </button>

                <button className="bg-gray-300 w-full inline-flex py-3 px-3 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <span className="ml-4 flex items-start flex-col ">
                    <span className="title-font font-medium">Consejos</span>
                  </span>
                </button>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}
