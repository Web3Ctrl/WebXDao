import Head from 'next/head';
import { prefix } from '../constants';

export default function Partners({ partnerData }) {
  return (
    <>
      <Head>
        <title>Community Partners | WebXDAO</title>
      </Head>
      <section className="text-white text-center bg-transparent">
        <div className="px-20 py-20">
          <h1 className="font-bold text-5xl antialiased">Community Partners</h1>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            Our Valuable Community Partners
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        <div className="bg-transparent pt-12 pb-12 flex-1">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-6">
              <div className="text-black grid grid-col-1 p-3 gap-y-3 md:grid  md:grid-cols-2 md:gap-3 md:p-3">
                {partnerData.map(({ name, title, imgUrl, text }, index) => (
                  <div
                    key={name + index}
                    className="cursor-pointer border text-white/80 flex-1 rounded-md shadow focus:outline-none focus:shadow-outline transform transition-all hover:shadow-lg hover:scale-105 hover:z-10 duration-300 ease-in-out p-4 group hover:bg-gray-500 hover:ring-gray-500 ring-1 ring-slate-900/5"
                  >
                    <div className="grid grid-cols-3 items-center justify-start overflow-hidden">
                      <div className="relative col-span-1 ">
                        <img
                          alt={name}
                          className="bg-gray-50 p-5 rounded-md"
                          src={prefix + imgUrl}
                        />
                      </div>
                      <div className="flex flex-col col-span-2 gap-y-3 pl-5">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="text-white/80">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const data = [
    {
      name: 'dev protocol',
      imgUrl: '/logo 3.4.png',
      title: 'DEV PROTOCOL',
      text: 'Dev Protocol was designed as a unique protocol to fairly evaluate OSS, which has been economically undervalued for decades. It is built on the Ethereum blockchain and brings economic value to all open source activities.',
    },
    {
      name: 'the algorithms',
      imgUrl: '/logo 3 1.png',
      title: 'THE ALGORITHMS',
      text: 'We are a group of programmers helping each other build new things, whether it be writing complex encryption programs, or simple ciphers. Our goal is to work together to document and model beautiful, helpful and interesting algorithms using code. We are an open-source community - anyone can contribute. ',
    },
    {
      name: 'lumos lab',
      imgUrl: '/logo 3 2.webp',
      title: 'LUMOS LAB',
      text: 'The Lumos Metaverse - an initiative by Lumos Labs, is a developer-centric virtual ecosystem that is designed to connect developers with opportunities in the Web3 space. On identifying a fragmented marketplace for Web3 BUIDLers, Lumos Metaverse will be an experiential platform with aggregated Web3 opportunties and a unified builder identity.',
    },
    {
      name: 'web3 js',
      imgUrl: '/logo 3 4.jpeg',
      title: 'WEB3 JS',
      text: 'web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
    },
  ];
  return {
    props: {
      partnerData: data,
    },
  };
}
