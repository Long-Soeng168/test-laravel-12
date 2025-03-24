export function MyHeroSection() {
    return (
        <>
            <section className="mx-auto max-w-screen-2xl min-w-[280px]">
                <div className="relative flex w-full flex-col gap-10 items-center rounded-[50px] bg-[#008080] px-4 py-6 sm:rounded-[60px] sm:px-10 sm:py-9 md:rounded-[70px]  md:py-11 lg:flex-row lg:rounded-[80px] lg:py-14">
                    <img className="w-full max-w-[550px] lg:order-2 lg:w-1/2 xl:w-full" src="assets/images/office.png" alt="" />
                    <div className="md:text-left mb-32 text-start">
                        <h1 className="mb-5 text-2xl leading-[30px] font-proxima-black text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        What is Westec ?
                        </h1>

                        <p className="mb-8 text-xl leading-[24px] font-normal sm:text-[15px] md:mb-12 font-proxima-thin text-white">
                        Westec Corporation was established in 2007 in Phnom Penh by a group of returning overseas engineers to provide security solutions to an emerging home and business market. Since that time, Westec has grown to provide solutions in a divers array of technology areas including home automation, cinema & home theater, custom software, etc.
                        </p>
                        <p className="mb-8 text-xl leading-[24px] font-normal sm:text-[15px] md:mb-12 font-proxima-thin text-white">
                        Now occupying in a new 830m2 facility in the Sen Sok district of Phnom Penh, Westec employs over 40 staff and provides service to customers all over Cambodia.
                        </p>
                    </div>
                    <div className="absolute right-0 -bottom-1 -left-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill="#ffff"
                                fillOpacity="1"
                                d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,170.7C672,181,768,235,864,261.3C960,288,1056,288,1152,256C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
