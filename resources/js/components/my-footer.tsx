import { Link } from "@inertiajs/react";

const MyFooter = () => {
    return (
        <>
            <footer className="background px-6 py-10 text-white md:px-20">
                <div className="mx-auto grid max-w-scren-2xl grid-cols-1 gap-8 md:grid-cols-4">
                    <div>
                        <img src="assets/images/whiteLogo.png" alt="Angkor Wildlife & Aquarium" className="mb-4 w-64" />
                        <div>
                            <p>#20, Street. 598C, Phum Tomnob, Sangkat Phnom Penh Thmey, Khan SenSok, Phnom Penh, Cambodia</p>
                        </div>
                        <p className="mt-2 ">Tell : 023 882 580 | 016 991 580 | 012 269 661</p>
                        <p> Email: contact@westec.com | sales@westec.com | support@westec.com</p>
                        <p className="mt-4"> Monday - Saturday : 8:00am - 5:00pm</p>
                    </div>

                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">About Us</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Who We Are</li>
                            <li>Sustainability</li>
                            <li>Education</li>
                            <li>Animal Care</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Solutions</h3>
                        <ul className="mt-2 space-y-1">
                            <li>River & Sea Spectacle</li>
                            <li>Touch Pool</li>
                            <li>Wildlife Animal Park</li>
                            <li>Reptile House</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Case Studies</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Park Map</li>
                            <li>Activities</li>
                            <li>Dining</li>
                            <li>Retail</li>
                            <li>Facilities</li>
                            <li>Adventure Rules</li>
                        </ul>
                    </div>
                    {/* <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Partners</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Park Map</li>
                            <li>Activities</li>
                            <li>Dining</li>
                            <li>Retail</li>
                            <li>Facilities</li>
                            <li>Adventure Rules</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Careers</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Park Map</li>
                            <li>Activities</li>
                            <li>Dining</li>
                            <li>Retail</li>
                            <li>Facilities</li>
                            <li>Adventure Rules</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">News</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Park Map</li>
                            <li>Activities</li>
                            <li>Dining</li>
                            <li>Retail</li>
                            <li>Facilities</li>
                            <li>Adventure Rules</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Contact Us</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Park Map</li>
                            <li>Activities</li>
                            <li>Dining</li>
                            <li>Retail</li>
                            <li>Facilities</li>
                            <li>Adventure Rules</li>
                        </ul>
                    </div> */}
                </div>

                <div className="mx-auto mt-10 grid max-w-screen-2xl grid-cols-1 gap-8 border-t border-gray-600 pt-6 md:grid-cols-2">
                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Follow Us!</h3>
                        <div className="mt-3 flex items-center space-x-4">
                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/facebook-new.png" className="w-10"/>
                            </Link>

                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/icons8-linkedin-64.png" className="w-11"/>
                            </Link>
                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/youtube-play.png" className="w-10"/>
                            </Link>


                        </div>
                    </div>

                    <div>
                        <h3 className="inline-block border-b-2 border-green-500 pb-1 text-lg font-bold">Chat With Us!</h3>
                        <div className="mt-3 flex space-x-4">

                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/icons8-telegram-64.png" className="w-10"/>
                            </Link>
                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/icons8-messenger-64.png" className="w-10"/>
                            </Link>
                            <Link href="#" className="fab fa-facebook-square text-2xl">
                                <img src="assets/images/icons8-call-64.png" className="w-9"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t max-w-screen-2xl mx-auto  flex justify-between border-gray-600 pt-6 text-sm text-gray-300">
                    <p>&copy; 2025 - Angkor Wildlife & Aquarium - All Rights Reserved</p>
                    <p>
                        Made with <span className="text-red-500">❤️</span> by Olive & Lake
                    </p>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;
