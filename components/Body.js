import clsx from "clsx";

const Body = () => {
	const skills = [
		"React",
		"Laravel",
		"Tailwind CSS",
		"WordPress",
		"HTML & CSS",
		"Javascript",
		"PHP",
		"MySQL",
		"Git / GitHub",
		"SEO",
		"DevOps",
	];
	const employment = [
		{
			position: "Full Stack Web Developer",
			company: "Guaranteed SEO",
			years: "2015 - Present",
			location: "Vancouver / Remote",
		},
		{
			position: "Map Artist / Web Developer",
			company: "GM Johnson Maps",
			years: "2012 — 2015",
			location: "Vancouver",
		},
		{
			position: "Affiliate Marketing",
			company: "Self-Employed",
			years: "2008 - 2012",
			location: "Vancouver",
		},
	];

	return (
		<div className='bg-zinc-900 p-6 md:p-8 rounded-lg'>
			<div className='md:flex'>
				<div className='md:order-2 md:ml-12 pt-4 flex-grow'>
					<h2 className='font-display text-zinc-200 font-bold text-2xl tracking-wider'>
						Employment History
					</h2>
					{employment.map((e, i) => (
						<div
							key={i}
							className={clsx(
								i + 1 != employment.length && "border-b border-zinc-300 border-opacity-20 pb-5",
								"my-5 md:flex"
							)}>
							<div className='md:w-3/4'>
								<div>
									<span className='text-zinc-200 text-lg'>{e.position}</span>
								</div>
								<div className='text-sm'>
									<span className='text-zinc-300'>{e.company}</span>
								</div>
							</div>
							<div className='md:ml-auto md:w-1/4 md:text-right'>
								<div className='text-sm'>
									<span className='text-zinc-300'>{e.years}</span>
								</div>
								<div className='text-sm'>
									<span className='text-zinc-300'>{e.location}</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='md:order-1 py-4 px-6 bg-zinc-800 rounded-md'>
					<h2 className='font-display text-zinc-200 font-bold text-2xl tracking-wider'>
						My Skills
					</h2>
					<div className='space-y-1 text-zinc-300 mt-5 md:block flex flex-wrap'>
						{skills.map((s, i) => (
							<div key={i} className='w-1/2 md:w-full'>
								{s}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
