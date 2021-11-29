import SyntheticLoot from "@components/SyntheticLoot";
import { Project } from "../types/interface";

const loot: Project = {
  name: "Longcats are very long!",
  description: "If you were looking for a longcat, you shall see a cat that is long...",

  image: "/vio.jpg"
};

const loot2: Project = {
  name: "There could be only one!",
  description: "the fight between good and evil will never disappear!",

  image: "/lc081.png"
};

const mLoot: Project = {
  name: "Longcats history!",
  description:
    "The most important moments in history were guided by longcats.  All who lived throught them testified that the moment Longcats were observed, history was in the making...",

  image: "/lc05.jpg"
};

const sLoot: Project = {
  name: "Why Longcat is long?",
  description:
    "Scientifically speaking, longcat can only be so long...  Never the less, the scientifc community is still working on an answer to this question.",

  image: "/lc04.jpg"
};

const realms: Project = {
  name: "Realms",
  heading: "MEME Coin",
  description: "Our offerings of the new Meme coin to replace the LC Token on the ICO Day",
  image: "MC.png"
};

const dungeons: Project = {
  name: "Dungeons",
  heading: "Explore Dungeons",
  description: "12000 Procedurally generated Dungeons waiting for your Adventurer to explore.  Generated entirely on-chain.",
  whatToDo: [
    {
      content: "Generate",
      url: "https://dungeonsnft.io"
    },
    {
      content: "Trade",
      url: "https://opensea.io/collection/dungeonsnft"
    }
  ],
  website: {
    url: "https://dungeonsnft.io"
  },
  contract: {
    content: "0x665d9259F18B29a4ca38e9A4768cEDee1429d116"
  },
  twitter: {
    url: "https://twitter.com/dungeons_nft"
  },
  discord: {
    url: "http://discord.gg/8CDEveXu4B"
  },
  image: "https://dungeonsnft.io/Sample1.jpg",
  neededProject: loot,
  mintPrice: {
    mint: 0.0
  }
};

const bibliotheca: Project = {
  name: "Bibliotheca",
  description:
    "Graphs Loot projects so you can see your progress in the LootVerse.",
  whatToDo: [
    {
      content: "See Your Entire Adventurer",
      url: "https://bibliothecaforloot.com/"
    },
    {
      content: "Search for Genesis Mana",
      url: "https://bibliothecaforloot.com/loot"
    }
  ],
  twitter: {
    url: "https://twitter.com/lootgraph"
  },
  discord: {
    url: "https://discord.gg/MNJ4T8w5JY"
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  }
};

const genesisMana: Project = {
  name: "Exchange Rate",

description: "The two coins are exchangable based on the USDT value. Further explanatory information shall be in the FAQ Section",
  whatToDo: [
    {content: "1 MC = 2 LCT"},
    {content: "1 USDT = 1 LCT"},
    {content: "1 LCT = 1 MC"}
            ],

  image:"/ex03.png"

};

const lootCharacter: Project = {
  name: "Loot Character",
  heading: "Mint a Loot Character",
  description: "Loot Characters is the first collection designed to visualize the Loot Adventurer Gear. Associative NFT, forever tied to the Loot bag from which it was minted.",
  whatToDo: [
    {
      content: "Generate",
      url: "https://www.lootcharacter.com/"
    }
  ],
  website: {
    url: "https://www.lootcharacter.com/"
  },
  contract: {
    content: "0x5bf553e149d2e0d4725cebee5ec18ba49b6ffc33",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/LootCharacter"
  },
  mintPrice: {
    mint: 0.2
  },
  neededProject: loot,
  image:
    "https://lh3.googleusercontent.com/uZ4mQ4LlAYyREh7KRr4uefjs_hbjYEPmnqUhNqTRhLDwgk9pnnz2ojgHXglLeLtnkOMNlIwoU7TDqAOr7cE4IXiCWwnD40RUDoXWMg=w600"
};
const lootExchange: Project = {
  name: "Loot Exchange",
  description: "Trade Loot items. All commission goes to the Loot DAO.",
  whatToDo: [
    {
      content: "Trade Loot",
      url: "https://www.loot.exchange/"
    }
  ],
  contract: {
    content: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7", // TODO: this is loot"s contract
    url: "https://etherscan.io/"
  },
  website: {
    url: "https://www.loot.exchange/"
  },
  twitter: {
    url: "https://twitter.com/LootExchange"
  },
  discord: {
    url: "https://discord.com/invite/hspfM6AE" // TODO: discord from twitter not working
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  },
  image: "/exchangeLogo2.svg"
};
const lootMart: Project = {
  name: "LCT Token",
  description: "Unbundle your Loot Bags into individual Lootmart items that you can trade and use to upgrade your Adventurer in the Loot universe.",

  image: "LCT.png",
  neededProject: loot
};

const lootWatcher: Project = {
  name: "Loot Watcher",
  description: "The easiest place to track the Loot ecosystem.",
  whatToDo: [
    {
      content: "View Loot Ecosystem",
      url: "https://www.lootwatcher.com/"
    }
  ],
  twitter: {
    url: "https://twitter.com/lootwatcher_"
  },
  discord: {
    url: "https://discord.gg/MedPJqybrX"
  },
  website: {
    url: "https://www.lootwatcher.com/"
  }
};

const NFTx: Project = {
  name: "NFTx",
  description:
    "Shop and earn yield on the most liquid decentralized NFT marketplace.",
  whatToDo: [
    {
      content: "Trade NFTs",
      url: "https://nftx.io/"
    }
  ],
  website: {
    url: "https://nftx.io/"
  },
  twitter: {
    url: "https://twitter.com/NFTX_"
  },
  discord: {
    url: "https://discord.com/invite/hytQVM5ZxR"
  },
  github: {
    url: "https://github.com/NFTX-project"
  },
  image: "https://www.coywolf.news/wp-content/uploads/2021/05/nft.webp"
};

const openSea: Project = {
  name: "OpenSea",
  description: "The world's first & largest NFT marketplace",
  whatToDo: [
    {
      content: "Trade ",
      url: "https://opensea.io/collection/lootproject"
    }
  ],
  twitter: {
    url: "https://twitter.com/opensea"
  },
  discord: {
    url: "https://discord.gg/opensea"
  },
  website: {
    url: "https://opensea.io/collection/lootproject"
  },
  image: "/Logomark-White.png"
};

const stakeARealm: Project = {
  name: "Stake a Realm",
  description:
    "Stake your Realm & Generate resources to trade and battle with.",
  whatToDo: [
    {
      content: "Stake (coming soon)",
      url: "https://bibliothecaforloot.com/roadmap"
    }
  ],
  twitter: {
    url: "https://twitter.com/LootRealms"
  },
  discord: {
    url: "https://discord.gg/hTYmwpvCDq"
  },
  neededProject: realms,
  image: "https://storage.opensea.io/files/2468d5c3fc290400d053a68e149c9d1c.svg",
  contract: {
    content: "0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d"
  },
};

const genesisAdventurer: Project = {
  name: "Longcats are holy",
  description: "They are among the most holy creatures in the universe.  You could find them up and beyond and also they are very active in holiness stuff",
  image: "/lc06.png"

};
const lootMartAssemble: Project = {
  name: "Equip a Warrior (coming soon)",
  description: "Re-bundle your items into bags in order to equip your warrior.",
  whatToDo: [
    {
      content: "Equip Your Warrior",
      url: "https://www.lootmart.xyz/"
    },
  ],
  website: {
    url: "https://www.lootmart.xyz/"
  },
  contract: {
    content: "0x71355f4a94f46ee32eb443ad2bde2dec0470f949",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootmart_xyz"
  },
  discord: {
    url: "https://discord.gg/w8txv8bvWd" // TODO: not yet public
  },
  image: "https://lh3.googleusercontent.com/_D435IWZD8wPdDrR-zUbsbifnUgp-T-XOQrfS9bPs1okOSUTqXpH3zS8I8Yl-Djynx7aEbT9gY7IJ1DUzYAznzKHBDMGCJbOlWPr=w600",
  neededProject: loot
};
const lootSwag: Project = {
  name: "Get a Loot Swag Avatar",
  description: "Customize loot avatars through skins.",
  whatToDo: [
    {
      content: "Customize Your Avatar",
      url: "https://lootswag.io/"
    },
  ],
  website: {
    url: "https://lootswag.io/"
  },
  twitter: {
    url: "https://twitter.com/LootSwag"
  },
  discord: {
    url: "https://discord.gg/QEs6BArR" // TODO: not yet public
  },
  image: "/lootswag.png",
  neededProject: loot
};

const hyperLoot: Project = {
  name: "Visualize Your Adventurer",
  description: "HyperLoot is a collection of unique characters generated based on the items from your Loot and mLoot bags. Each HyperLoot grants an access to the Hyperverse.",
  whatToDo: [
    {
      content: "Coming soon",
      url: "https://twitter.com/hyperloot_"
    },
  ],
  twitter: {
    url: "https://twitter.com/hyperloot_"
  },
  discord: {
    url: "https://discord.gg/MAqUNNVVcT" // TODO: not yet public
  },
  image: "/hyper.jpg",
  neededProject: loot,
  website: {
    url: "https://hyperlootproject.com/"
  }
};
const LootExplorers: Project = {
  name: "Mint a Loot Explorer",
  description: "Explorer characters with their own distinct classes, equipped with loot which are generated based off the first 8000 genesis bags of loot.",
  whatToDo: [
    {
      content: "Coming soon",
      url: "https://twitter.com/LootExplorers"
    },
  ],
  twitter: {
    url: "https://twitter.com/LootExplorers"
  },
  discord: {
    url: "https://discord.gg/tkKrY8kYJ4" // TODO: not yet public
  },
  image: "/lootExplorers.jpeg",
  neededProject: loot
};
const lootAlliance: Project = {
  name: "Loot Alliance",
  description: "A collective of builders, designers, and geeks working together as representatives of the wider Lootverse community to shepherd the ongoing Loot website, in order to create a strong foundation for players and builders.",
  discord: {
    url: "https://discord.gg/sF2pGMpps6" // TODO: not yet public
  },
};
const divineDao: Project = {
  name: "Divine DAO",
  description: "A lore-driven DAO dedicated to communal world-building around Loot.",
  whatToDo: [
    {
      content: "Learn more",
      url: "https://divinedao.medium.com/introducing-the-divine-city-460596889bfc"
    },
  ],
  twitter: {
    url: "https://twitter.com/divine_dao"
  },
  discord: {
    url: "https://discord.gg/ucG9gD5hcq" // TODO: not yet public
  },

};
const fLoot: Project = {
  name: "fLoot",
  description: "Loot derivative project including $FLOOT tokens and Familiars NFTs.",
  whatToDo: [
    {
      content: "Trade",
      url: "https://opensea.io/collection/loot-familiars"
    },
  ],
  twitter: {
    url: "https://twitter.com/FlootFamiliars"
  },
  discord: {
    url: "https://discord.gg/AzHm6AYFRv" // TODO: not yet public
  },
};

export {
  loot,
  loot2,
  bibliotheca,
  genesisMana,
  lootCharacter,
  lootExchange,
  lootMart,
  lootWatcher,
  mLoot,
  NFTx,
  openSea,
  realms,
  dungeons,
  stakeARealm,
  sLoot,
  genesisAdventurer,
  lootMartAssemble,
  LootExplorers,
  hyperLoot,
  lootSwag,
  lootAlliance,
  divineDao,
  fLoot
};
