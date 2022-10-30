import Head from "next/head";

import Header from "../components/Header";
import Body from "../components/Body";

export default function Home() {
	return (
		<div className='bg-black p-6 md:p-12 min-h-screen'>
			<Head>
				<title>Troy Eisert - Full Stack Developer</title>
				<meta name='description' content='Troy Eisert is a full stack web developer.' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			</Head>

			<main className='max-w-5xl mx-auto space-y-12'>
				<Header />
				<Body />
			</main>
		</div>
	);
}
