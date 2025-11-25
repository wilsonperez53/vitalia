
import React from 'react';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
          <img src="C:\reposWilson\vitalia\src\assets\logo.png" alt="Vitalia" class="mx-auto h-10 w-auto" />
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green">Acceder como cuidador</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="menu" method="POST" class="space-y-6">
            <div>
              <label for="email" class="block text-sm/6 font-medium text-gray-800">Email</label>
              <div class="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md  px-3 py-1.5 text-base  outline-1 -outline-offset-1 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-800">Password</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Olvidaste el password?</a>
                </div>
              </div>
              <div class="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <a href="menu" class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Entrar
              <svg aria-hidden="true" class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </form>

          <p class="mt-10 text-center text-sm/6 text-gray-400">
            Aun no tienes acceso?
            <a href="registro" class="font-semibold text-indigo-400 hover:text-indigo-300">Inicia aca</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
