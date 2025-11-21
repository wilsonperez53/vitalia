
import React from 'react';
import Layout from '../components/Layout';

export default function Plan() {
  return (
    <Layout>
     <div class="mt-4 max-w-sm mx-auto px-4 mt-16">
      <div class="bg-white border rounded text-center px-4 pt-6 pb-8 shadow">
          <h3 class="text-2xl">
              Básico
          </h3>
          <div class="mt-4">
              <span class="text-red-500 text-2xl line-through">30.000 colones</span>
          </div>
          <div class="mt-1">
              <span class="font-bold text-3xl">10.000 colones</span>
              <span class="text-gray-600">/ mes</span>
          </div>
          <div class="mt-6">
              <div class="font-bold text-lg">Planes nutricionales</div>
              <div class="mt-3">Consejos personalizados</div>
              <div class="mt-3">1 cita virtual con la Nutricionista</div>
              <div class="mt-3">Plan de alimentacion mensual</div>
              <div class="mt-3">Recordatorios de medicinas</div>
          </div>
          <div class="mt-8">
              <a href="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Comenzar mis 7-dias gratis.
              </a>
          </div>
      </div>
  </div>
    </Layout>
  );
}
