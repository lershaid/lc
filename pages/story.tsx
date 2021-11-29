// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import { build } from "../utils/newLists"
import Discord from "../img/discord.svg"
// Types
import type { ReactElement } from "react";
import {
  resourceList,
} from "@utils/lists";
export default function Build(): ReactElement {
  const resourcesIndex = [
    {
      title: "All Developer Tooling",
      description: "Aggregated resources built by the Loot community:",
      list: resourceList,
    },
  ];
  return (
    <Layout>
      <div className="bg-black py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl ">
              <span className="uppercase text-xl tracking-widest text-gray-700">Story</span>
              <h1 className="text-center mt-4 capitalize">The Longcat story</h1>
              <div className="flex justify-around py-4">
                <a className="text-2xl flex bg-gray-900 rounded p-4 hover:bg-gray-700" href=" https://discord.gg/vEvmv34NPK"><Discord className="fill-current w-6 h-6 mx-2 mr-4  self-center" />Join Longcat Discord</a>
              </div>

            </div>
          </div>
          <div className="flex flex-wrap px-4 justify-center">
            <div className="sm:w-1/2">
              <h2>Origin</h2>
              <p className="text-xl text-gray-400">Longcat the meme first started back in February 2006 based on the post in 2nd Channel (2chan) of a cat named Shiroi (白い) or Nobiko.
                            The meme tehn start to gain popularity around the internet from games and memes and other posts.  More variances start to sporadically appreas around the internet and gained a significant popularity.  Sadly in March 2020, Shiroi passed away due to natural causes leaving the community behind. Due to the popularity of Longcat, we wanted to revive and ressurrect the Longcat era, entering a new world of memes, where Shiroi lives forever and the meme shall never disappear.  Therefore, we are creating a universe where the Longcat shall be ressoructed and have followers aroud the world</p>

              <h2 className="mt-4">Story and Narrative</h2>
              <p className="text-xl text-gray-400">In 2020, Shiroi, the original Longcat passed away to the other side, leaving the door open for the shadow Tacgnol to take over the world.  However, nothing to behold that Shiroi left an army of followers to protect the world from dissolving into chaos and disorder.  LC Army will fight the evil life until the resurrection of Shiroi and holds the end of the new beginning.</p>

              <h2 className="mt-4">Longcat Army</h2>
              <p className="text-xl text-gray-400">Longcat Army are the chosen ones.  They are the one who will defend the Tacgnol from ever gaining the dark power and takeover the world.  LC Army shall do everything in their power to support Longcats by Getting MEME Coins, buying LC Tokens, Trading NFTs, Acquiring virtual lands and spreading the word about Longcat around the world</p>
            </div>

          </div>

        </div>
      </div>



    </Layout >

  )
}
