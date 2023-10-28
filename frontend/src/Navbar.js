import React from 'react';
import './App.css';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const navigation = [
    { name: 'Location', href: '#', current: true },
    { name: 'Home', href: '#', current: false },
    { name: 'Food', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact Us', href: '#', current: false },
  ];

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <p className="logo orange-text">Food-Mato</p>
          <ul className="ml-10 flex space-x-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Login</span>
            <BellIcon className="h-4 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;