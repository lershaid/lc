// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4 sm:w-1/2">
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className="my-8">
          <h3>What is Longcat?</h3>
          <p>
            Longcat is a cat that is long...{"....too looooong..."}, you can read more about it in (
            <a

              href="https://en.uncyclopedia.co/wiki/Longcat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'red' }}
            >
               Wikipedia
            </a>
          ) . Longcats are holy and rarely cited, which provides a mystique aura around them, which resulted in us choosing them for our project. We are working on the ressorruction strategy for our longcat.
          </p>

        </div>

        {/* Why is loot special? */}
        <div className="my-8">
          <h3>What is Longcat Token</h3>
          <p>
            We created Longcat Token (LCT) in order to fund our journey of adventure and fun(virtually and in reality).  Note that we are not promising any monetary gains from our token, however, we are promising that the community will have fun with us in our journey.
          </p>
          <p>
            Loot is the unfiltered, uncensorable building block for stories,
            experiences, games, and more, in the hands of the community, at no
            cost. Loot pursues complete decentralization from day one.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className="my-8">
          <h3>What is MEME Coin?</h3>
          <p>
          We though about a new way of selling preffered positoin/coins prior to the launch and
          that's by selling a coin prior to the issuance of the Token.
          This coin we call it MEME COIN (MC).
          MC will be the liquidity pool token that will be used for LC Project and other projects down the line.  MC will be circulated on a project basis.
          </p>
          <p>
            Meme Coin similar to Longcat Token shall be based on the Ethereum Network for the time being.  Until we can justify moving the blockchain toward a new network, we shall not change.
          </p>

        </div>

        {/* Am I priced out of loot? */}
        <div className="my-8">
          <h3>What is the exchange value?</h3>
          <p>
We are planning to place the exchange value for the pre ICO to be double the amount that been bought for. Therefore, 1 MC shall be exchanged for 2 LCT and 1 LCT shall be traded exchanged for 1 USDT, while the buying price per MC is 1USDT.  This will be honored during the ICO period of the coin.  Note that MC will be exchanged to LCT in our website LCT.Exchange.
          </p>

        </div>

        {/* How do I value loot bags? */}
        <div className="my-8">
          <h3>What are the plans for the ICO?</h3>
          <p>
As we have mentioned before, the first stage of our deployment is that we shall start our NFT Marketplace and our MEME Exchange. The next stage shall be a virtual world, where we are deploying a videogame based on Longcat and virtual land that you could acquire. We are working on integrating NFTs to the videogame, such that it shall provide a comprehensive experince to the community and the users.  Afterwards, we Are bridging toward the real world and open LC Cafe and Marketplace, were our community members can meet, play and enjoy their time there.  We will allow LCT to be a currency to buy products and goods from the cafe and be the first.
          </p>
            </div>

            <div className="my-8">
              <h3>What is our asapirations in the future?</h3>
              <p>
Altought that we are not promising any monetary gains/ values, we are aspiring to become a top ten meme coins to be traded by the mid of 2022.  We wants to be the first Meme coin that is backed by it's community that allows the bridging toward real life and provide value back to the users. and LC Cafe shall be the first cafe in the world to accept payment in Meme coins and trade in value of NFTs, as in replicating the virtual world in reality.
              </p>
                </div>

      </div>
    </Layout>
  );
}
