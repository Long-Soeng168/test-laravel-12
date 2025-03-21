import { MyHeroSection } from './components/my-hero-section';
import { MyImage } from './components/my-image';
import { MyStickContent } from './components/my-stick-content';
import MyLayout from './layout/layout';

const Index = () => {
    return (
        <MyLayout>
              {/* Slide */}
              <MyImage/>
            {/*End Slide */}
            <div className="mx-auto max-w-screen-2xl my-20 px-4 sm:px-10 md:px-20">
                <MyHeroSection />
            </div>

            <div className="mx-auto max-w-screen-2xl my-20 px-4 sm:px-10 md:px-20">
                <MyStickContent />
            </div>

            <section className="bg-[#36454f] py-12 my-20 text-white">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20 text-center">
                    <h2 className="mb-4 text-3xl font-semibold text-white">Why Choose Us</h2>
                    <div className="mb-6 flex items-center justify-center space-x-2">
                        <div className="h-[2px] w-16 bg-gray-300"></div>
                        <div className="h-2 w-2 rounded-full bg-[#f68c1f]"></div>
                        <div className="h-[2px] w-16 bg-gray-300"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* <!-- Quality  */}
                        <div className="flex flex-col items-start text-start shadow-2xl rounded-md p-4">
                            <i className="w-10"><img src='assets/images/quality.png'/></i>
                            <h3 className="mt-4 text-xl text-yellow font-serif">Quality</h3>
                            <p className="mt-4 text-white font-proxima-thin text-start">
                                All our beverages are supplied by proven manufacturers from all around the world. We guarantee the high-class quality.
                            </p>
                        </div>
                        {/* <!-- Shipping  */}
                        <div className="flex flex-col items-start text-start shadow-2xl rounded-md p-4">
                        <i className="w-10"><img src='assets/images/time.png'/></i>
                            <h3 className="mt-4 text-xl text-yellow font-serif">Domestic & Commercial</h3>
                            <p className="mt-4 text-white font-proxima-thin text-start">
                                We ship all over the USA as well as overseas. It takes 3-5 business days for a package to be delivered right to your
                                door.
                            </p>
                        </div>
                        {/* <!-- Cost  */}
                        <div className="flex flex-col items-start text-start shadow-2xl rounded-md p-4">
                        <i className="w-10"><img src='assets/images/dollar.png'/></i>
                            <h3 className="mt-4 text-xl text-yellow font-serif">Best Cost</h3>
                            <p className="mt-4 text-white font-proxima-thin text-start">
                                Prices on our products are fair and affordable. You will be gladly surprised once you get your package delivered!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MyLayout>
    );
};

export default Index;
