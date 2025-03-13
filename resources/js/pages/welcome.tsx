import { MyAboutComponent } from '@/components/my-about-component';
import { MySlide } from '@/components/my-slide';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const welcome = () => {
    return (
        <div className='min-h-screen'>
            <div className="mx-auto mt-5 max-w-screen-2xl px-10 md:px-20">
                {/* Header  */}
                <div className="flex items-center justify-between gap-5">
                    <div className="flex-1/2">
                        <img src="assets/images/logo.png" className="w-36"></img>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 justify-end gap-5">
                            <div className="flex items-center justify-end gap-2">
                                <img src="assets/images/location.png" className="h-10 w-10"></img>
                                <p className="text-sm">
                                    <strong className="text-base">Address</strong> <br /> AP-1151, Aphivath BLV, Dermkor, Chongva, Chroy Changva.
                                    Phnom Penh, Cambodia
                                </p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <img src="assets/images/message.png" className="h-10 w-10"></img>
                                <p className="text-sm">
                                    <strong className="text-base">E-Mail</strong> <br /> Vectorasoft@gmail.com
                                </p>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <img src="assets/images/phone.png" className="h-10 w-10"></img>
                                <p className="text-sm">
                                    <strong className="text-base">Phone</strong> <br /> + 855 12346789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header  */}
            </div>
            {/* Navbar */}
            <div className="bg-gradient mt-5">
                <div className="mx-auto flex h-16 max-w-screen-2xl justify-between px-10 md:px-20">
                    <div className="flex items-center">
                        <div className="hidden md:flex md:space-x-8">
                            <a href="#" className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-white">
                                Home
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
                            >
                                Blogs
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden gap-5 md:ml-4 md:flex md:items-center">
                            <Button
                                variant="ghost"
                                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-white focus:ring-2 focus:outline-none"
                            >
                                <Search size={24} className="h-6 w-6" />
                            </Button>
                            <div className="h-4 border"></div>
                            <div className="flex gap-2">
                                <a href="#">
                                    <img
                                        className="w-10 rounded-md bg-white px-2 py-2 hover:shadow-2xl hover:transition-all"
                                        src="assets/images/facebook.png"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        className="w-10 rounded-md bg-white px-2 py-2 hover:shadow-2xl hover:transition-all"
                                        src="assets/images/linkedin.png"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        className="w-10 rounded-md bg-white px-2 py-2 hover:shadow-2xl hover:transition-all"
                                        src="assets/images/telegram.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Navbar */}

            {/* Slide */}
            <MySlide/>
            {/*End Slide */}

            {/* About */}
            <MyAboutComponent/>
            {/*End About */}
            </div>

    );
};

export default welcome;
