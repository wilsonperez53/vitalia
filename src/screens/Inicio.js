
import React from 'react';
import Layout from '../components/Layout';

export default function Inicio() {
  return (
    <Layout>
        <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">Vitalia</h1>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">Nutricion</h1>
          <p class="mb-8 text-lg font-normal text-gray-800 sm:px-16 lg:px-48 lg:text-xl">Ayudando cuidadores de adultos mayores a mejorar la salud.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <a href="plan" class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Afíliese
              <svg aria-hidden="true" class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
            </a>
            <a href="asistencia" class="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"> Conozca su Nutricionista </a>
          </div>
          <p class="mt-8 text-lg font-normal text-gray-800 sm:px-16 lg:px-48 lg:text-xl">Trabajo Final. Bases gerenciales para el desarrollo de servicios de nutrición.</p>
        </div>
    </Layout>
  );
}
