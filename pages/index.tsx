// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, whatToDo, getAfterLoot, getYourCharacter, onlyLoot } from "../utils/newLists"
import Opensea from "../img/opensea.svg";
import Telegram from "../img/tel.svg";
import Twitter from "../img/twitter.svg";
import ExchangeIcon from "../img/exchangeIcon2.svg";
import ExchangeIcon2 from "../img/ex02.svg";
import Discord from "../img/discord.svg";

// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
      <div className="mx-auto px-2 sm:px-4 text-center py-10 sm:py-20 justify-around flex flex-wrap hero-img bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="sm:px-4">

            <h1>Longcat Token</h1>

            <p className="text-xl sm:text-2xl text-gray-300">Longcats are among the most prestigious creatures ever walked on this earth. We are selling LCT to enogerates the ressoruction of the Longcat Army!</p>
            <div>
              <div className="flex py-8 w-full justify-center space-x-6">
                <a
                  href="https://www.lct.exchange/"
                  className="self-center p-3 border border-gray-800 rounded-xl bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <ExchangeIcon2 className="fill-current hover:text-gray-200 w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://www.lct.exchange/"
                  className="self-center p-3 border border-gray-800 rounded-xl bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Telegram className="fill-current hover:text-gray-200 w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://twitter.com/lootproject"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Twitter className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
                <a
                  href="https://discord.gg/KuYyKXam9G"
                  className="self-center p-3 border border-gray-800 rounded-xl  bg-black hover:bg-gray-600"
                  target="_blank"
                >
                  <Discord className="fill-current  text-white w-6 h-6 mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto sticky top-0 bg-black w-full justify-center text-sm space-x-6 sm:space-x-10 py-4 z-10 sm:text-2xl font-display">
        <div>
        <a

          className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1   text-gray-200 border border-gray-700 w-full text-center" href="#End">
          Get Longcat Presale
        </a>

        </div>

      </div>
      <div id="start" className="bg-black  sm:py-20 py-10 pb-40 ">

        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">The Quest begins here</span>
              <h1 className="text-center mt-4 capitalize">Overview</h1>
              <p className="text-xl sm:text-2xl text-gray-400">Among the most ambitious project ever that been justified by the importance of Longcats around the world</p>
            </div>
          </div>
          {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
          {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter1" className=" sm:py-20 py-10 pb-40  bg-gray-800">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Stage I</span>
              <h1 className="text-center mt-4 capitalize">Token Offering</h1>
              <p className="sm:text-2xl text-gray-400">In this stage, we are offering MEME Tokens for our community memebrs.  With MEME Tokens, our members will be able to exchange them with LCT They are public</p>
            </div>
          </div>

          {getAfterLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className=" bg-gray-700 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Stage II</span>
              <h1 className="text-center mt-4">Marketplace and Exchange</h1>
              <p className="sm:text-2xl text-gray-400">Congratulations! at this stage, we overcame the ICO and stood our ground.  Now, we can play...  What are we offering is an NFT Marketplace and MEME Exchange.  Whichever one comes out first.</p>
            </div>
          </div>


          {getYourCharacter.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      {/* <div id="chapter2" className="bg-gradient-to-b from-gray-700 to-gray-600 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-2xl">Chapter 3</span>
              <h1 className="text-center mt-4">Fun & Games</h1>
              <p className="sm:text-2xl">Who carried these Loot bags? Where did they come from? What can you do with these treasures? Your adventure begins now.</p>
            </div>
          </div>


          {whatToDo.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div> */}
      <div id="chapter3" className="bg-white  py-20 text-black ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 rounded text-center">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Stage III</span>
              <h1 className="text-center mt-4">Virtual World</h1>
            </div>
          </div>
          <div className="text-center sm:text-2xl my-4 sm:w-2/3 mx-auto px-4 ">
            <p className="my-4">In this stage, we shall expand on the virtual world where we shall have Longcat Video game and virtual land to be part of the overall map</p>
            <br />
            <a
              target="_blank"
              href="https://a.quest"
              className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
            >
              Coming soon
            </a>
          </div>
        </div>
      </div>

      <div id="chapter4" className="bg-gray-700  py-20 text-black ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 rounded text-center">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Stage IV</span>
              <h1 className="text-center mt-4">Crossing Over</h1>
            </div>
          </div>
          <div className="text-center sm:text-2xl my-4 sm:w-2/3 mx-auto px-4 ">
            <p className="my-4">Longcat shall cross to the real world by providing a physical marketplace and a cafe.  While bridging between both worlds and operates throught a proxy.  The projection of hte virtual world will be observed in reality.</p>
            <br />
            <a
              target="_blank"
              href="https://a.quest"
              className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
            >
              Coming soon
            </a>
          </div>
        </div>
      </div>
      <div id="End" className="bg-black  sm:py-20 py-10 pb-40 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
              <span className="uppercase sm:text-xl tracking-widest text-gray-400">Get your Presale Tokens</span>
              <h1 className="text-center mt-4 capitalize">Get your Meme Coin Here</h1>
              <p className="text-xl sm:text-2xl text-gray-400">Buy the Meme Coin now and you shall be able to trade it for double the amount of LC Token!</p>


<br />
              <a
                target="_blank"
                href="https://eth-swap-gamma.vercel.app/"
                className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
              >
                  BUY TOKENS
              </a>
            </div>
          </div>

        </div>
      </div>


    </Layout>
  );
}
