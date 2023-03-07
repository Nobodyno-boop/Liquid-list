import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
      <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
              <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Bienvenue sur LiquidList</h1>
                  <p className="py-6">Commencer votre liste !</p>
                  <Link href='/list'>
                      <button className="btn btn-primary">GO !</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}
