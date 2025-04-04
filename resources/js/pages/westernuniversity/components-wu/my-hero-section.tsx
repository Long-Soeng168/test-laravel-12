const MyHeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-between max-w-screen-2xl mx-auto gap-8  py-16 lg:flex-row px-4 sm:px-10 md:px-20">
            <div className="text-center lg:w-1/2 lg:text-left">
                <h2 className="font-noto-san-extra-light text-4xl leading-tight font-bold text-gray-900">
                    A Few Words <br /> About the University
                </h2>
                <div className="my-4 h-1 w-16 bg-[#2c318a]"></div>
                <p className="font-proxima-nova-regular text-lg leading-relaxed text-gray-600">
                    One of the world's premier academic and research institutions, the Jonathan Carroll University has driven new ways of thinking
                    since our 1876 founding. Today, JCU is an intellectual destination that draws inspired scholars to our Hyde Park and international
                    campuses, keeping JCU at the nexus of ideas that challenge and change the world.
                </p>
                <a
                    href="#"
                    className="mt-6 inline-flex items-center rounded-md border-2 border-[#2c318a] px-6 py-3 font-semibold text-[#2c318a] shadow-md transition hover:bg-gray-100"
                >
                    Learn More{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            <div className="flex justify-center shadow lg:w-1/2">
                <img src="assets/demo-images/banner3.jpg" alt="University Logo" />
            </div>
            {/* <div className="lg:w-1/3 flex justify-center shadow">
        <img src="assets/demo-images/logo-WU.png" alt="University Logo" className="max-w-xs lg:max-w-sm"/>
    </div> */}
        </section>
    );
};

export default MyHeroSection;
