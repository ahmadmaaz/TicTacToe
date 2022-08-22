import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script"
import React from 'react'

export default function Home() {

  return (
    <div className="w-full h-full  bg-black background-black">
      <Head>
        
        <title>XO- PLay tictactoe  Now! Single, Local Multiplayer, and online multiplayer available! @ahmad</title>
        <meta name="og:title" content="XO game- Lay tictactoe Now! Single, Local Multiplayer, and online multiplayer available! @ahmad" />
        <meta name="description" content="XO game - play tictactoe against a bot,player2, or even a friend online! The One Who loses always starts the game!  @ahmad" />
        <meta name="og:description" content="XO game - play tictactoe against a bot,player2, or even a friend online! The One Who loses always starts the game!  @ahmad  "  />
        <meta name="keywords"  content='x and o game, xo game online,  tictactoe online, tictactoe play, tictactoe game, google tictactoe, tictactoe 2 players' />
        <link rel="icon" href="/Tic.ico" />
      </Head>
      <Script id="Adsense-id" data-ad-client="ca-pub-4230105514569476" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"  async strategy="afterInteractive"  onError={ (e) => { console.error('Script failed to load', e) }} /> 

      <main className=' h-screen'>
        
        <div className='text-white h-screen flex flex-col justify-center  items-center'>
          <h1 className='text-center text-white text-7xl font-bold mb-4 fontT'>Tic Tac Toe</h1>
          <h3 className='text-white text-center text-xs md:text-base fontT mb-4'>The one who loses always starts the game!</h3>
          <Link href="/single"   ><button className=" w-9/12  lg:w-4/12 text-center py-4 px-8 my-4 fontT text-3xl md:text-4xl rounded-xl border-2 border-white  shadow-inner shadow-white hover:text-black hover:bg-white transition-all duration-500">Local Multiplayer </button></Link>
          <Link href="/bot" ><button  className=" w-9/12  lg:w-4/12 text-center py-4 px-8 my-4 fontT text-3xl md:text-4xl rounded-xl border-2 border-white  shadow-inner shadow-white hover:text-black hover:bg-white transition-all duration-500">Bot</button></Link>
          <Link href="/online"   ><button className=" w-9/12  lg:w-4/12 text-center py-4 px-8 my-4 fontT text-3xl md:text-4xl rounded-xl border-2 border-white  shadow-2xl  shadow-red-400 hover:text-black hover:bg-white transition-all duration-500">Online Multiplayer</button></Link>
        
        </div>

      </main>
      <footer className='border-t-2 border-gray-300 mx-8 flex flex-col  justify-center items-center '>
        <a href="https://ahmadmaaz.herokuapp.com/" className='text-center text-white text-4xl fontT mt-6 cursor-pointer hover:opacity-60'>@Ahmad </a>
        <h4  className='text-white text-center text-xs md:text-base fontT my-2' >play tictactoe </h4>
      </footer>

    </div>
  )
}
