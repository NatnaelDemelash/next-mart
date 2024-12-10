'use client';

import Link from 'next/link';
import Form from 'next/form';
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const { user } = useUser();
  const createClerkPassKey = async () => {};
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2">
      {/* Top row */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2">
        <Link
          href="/"
          className="text-2xl text-cyan-900 hover:opacity-50 font-bold mx-auto cursor-pointer sm:mx-0"
        >
          NextMart
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for product"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-900 
            focus:ring-opacity-50 border w-full max-w-xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="relative flex justify-center sm:flex-none items-center space-x-2 bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span> My Basket</span>
          </Link>

          {/* User Area */}
          <ClerkLoaded>
            {user && (
              <Link
                href="/orders"
                className="relative flex justify-center sm:flex-none items-center space-x-2 bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-800">Welcome Back!</p>
                  <p>{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPassKey}
                className="bg-white hover:bg-cyan-700 hover:text-white rounded animate-pulse text-cyan-900 font-bold py-3 px-4 border-cyan-300 border"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
