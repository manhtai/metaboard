import React from 'react';
import Cat from '../../img/cat.svg';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="px-4 py-8 text-center">
      <div className="mx-auto max-w-auto md:max-w-lg">
        <img className="mb-8" src={Cat} alt="Page not found" />
        <h2 className="mb-1 text-5xl font-heading">There is nothing here!</h2>
        <p className="mb-6 text-gray-500">(except the cat, obviously...)</p>
        <div>
          <Link className="px-4 text-blue-700 hover:opacity-75" to="/">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
