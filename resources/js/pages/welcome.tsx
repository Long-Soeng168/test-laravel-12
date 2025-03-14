import { MyAboutComponent } from '@/components/my-about-component';
import MyBlog from '@/components/my-blog';
import { MyProject } from '@/components/my-project';
import { MySlide } from '@/components/my-slide';
import { MyTestimonial } from '@/components/my-testimonial';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const welcome = () => {
    return (
        <div >
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
            <MySlide />
            {/*End Slide */}

            {/* About */}
            <MyAboutComponent />
            {/*End About */}

            {/* Service */}
            <div>
                <div className="bg-blue-100 py-2 sm:py-10 dark:bg-blue-900">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-2 text-center sm:mb-4 dark:text-white">Services</h2>
                        <p className="text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">Our Best Project</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden leading-none dark:bg-gray-800">
                    <svg
                        className="relative block h-[60px] w-[101%] md:h-[150px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-blue-100 dark:fill-blue-900"
                        ></path>
                    </svg>
                </div>

                <div className="mx-auto max-w-screen-2xl bg-white px-10 pt-12 sm:pt-11 md:px-20 dark:bg-gray-800">
                    <div className="container mx-auto">
                        <div className="h-full">
                            <div className="grid gap-14 md:grid-cols-2 md:gap-16">
                                {[
                                    {
                                        title: 'Delivery Management System',
                                        src: 'assets/images/delivery.png',
                                        description:
                                            'is a software tool that streamlines the delivery process by managing orders, optimizing routes, and providing real-time tracking.',
                                    },
                                    {
                                        title: 'HR Management System',
                                        src: 'assets/images/hr.png',
                                        description:
                                            'is a software solution that automates and streamlines various human resource functions. It helps manage employee data, recruitment, payroll, performance evaluations, and benefits administration.',
                                    },
                                    {
                                        title: 'Loan Management System',
                                        src: 'assets/images/loan.png',
                                        description:
                                            'is a software solution designed to manage the lifecycle of loans from origination to repayment. It automates processes such as application processing, credit assessment, disbursement, and collections.',
                                    },
                                    {
                                        title: 'School Management System',
                                        src: 'assets/images/education.png',
                                        description:
                                            'is a software solution designed to manage the school, teachers, students, total fee that students will pay for school.',
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="rounded-xl bg-white p-6 text-center shadow hover:shadow-xl">
                                        <div className="bg-gradient mx-auto flex h-20 w-20 -translate-y-16 transform items-center justify-center rounded-full hover:shadow-lg hover:shadow-teal-500/40">
                                            <img src={item.src} alt="icon" className="h-full w-full" />
                                        </div>
                                        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{item.title}</h1>
                                        <p className="px-4 text-gray-500">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="mx-auto mt-5 max-w-screen-2xl px-10 md:px-20">
                <div className="text-center">
                    <h1 className="text-sm text-blue-900 uppercase">Services</h1>
                    <p className="mt-4 text-3xl font-bold">Our Best Project</p>
                    <div className="bg-gradient-line mx-auto my-20 h-px w-full max-w-6xl"></div>
                    <div className="bg-gradient-line mx-auto my-20 h-px w-full max-w-6xl"></div>
                    <div className="bg-gradient-line mx-auto my-4 h-px w-full max-w-xl py-1"></div>
                </div>
            </div> */}
            </div>
            {/*End Service */}

            {/* Project */}
            <MyProject />
            {/*My Project */}

            {/* Testmonial */}
            <div className="py-2 sm:py-10">
                <div className="bg-blue-100 py-2 sm:py-10 dark:bg-blue-900">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-2 text-center sm:mb-4 dark:text-white">Testimonial</h2>
                        <p className="text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">What Saying Our Customers</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden leading-none dark:bg-gray-800">
                    <svg
                        className="relative block h-[60px] w-[101%] md:h-[150px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-blue-100 dark:fill-blue-900"
                        ></path>
                    </svg>
                </div>
                <MyTestimonial />
            </div>
            {/*end Testmonial */}

            {/* Blog */}
            <div className="py-2 sm:py-10">
                <div className="bg-blue-100 py-2 sm:py-10 dark:bg-blue-900">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-2 text-center sm:mb-4 dark:text-white">Blogs</h2>
                        <p className="text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">Read Our Latest Tips & Tricks</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden leading-none dark:bg-gray-800">
                    <svg
                        className="relative block h-[60px] w-[101%] md:h-[150px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-blue-100 dark:fill-blue-900"
                        ></path>
                    </svg>
                </div>
                <MyBlog />
            </div>
            {/*End Blog */}

            {/* Partner */}
            <div className="bg-gradient">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-2 items-center justify  gap-8 px-10 text-gray-500 sm:grid-cols-3 sm:gap-12 md:px-20 lg:grid-cols-5 dark:text-gray-400">
                    <a href="#" className="flex h-32 w-32 items-center justify-center p-2">
                        <img src="assets/images/1.png" alt="Logo 1"  />
                    </a>
                    <a href="#" className="flex h-32 w-32 items-center justify-center p-2">
                        <img src="assets/images/2.png" alt="Logo 2"  />
                    </a>
                    <a href="#" className="flex h-32 w-32 items-center justify-center p-2">
                        <img src="assets/images/3.png" alt="Logo 3"  />
                    </a>
                    <a href="#" className="flex h-32 w-32 items-center justify-center p-2">
                        <img src="assets/images/4.png" alt="Logo 4"  />
                    </a>
                    <a href="#" className="flex h-32 w-32 items-center justify-center p-2">
                        <img src="assets/images/5.png" alt="Logo 5"  />
                    </a>
                </div>
            </div>

            {/*End Partner */}

            {/* Footer */}
            <footer className="bg-gradient-to-b from-blue-100 to-white py-10">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <img src="assets/images/logo.png" alt="Logo" className="h-8 mr-2"/>
      </h2>
      <p className="text-gray-600 mt-3">Vectorasoft is a leading provider of business and educational software solutions, dedicated to transforming the way organizations operate.</p>
      <div className="flex space-x-3 mt-4">
        <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-300"><img src='assets/images/facebook.png' className='w-5 h-5' /></a>
        <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-300"><img src='assets/images/linkedin.png' className='w-5 h-5' /></a>
        <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-300"><img src='assets/images/telegram.png' className='w-5 h-5' /></a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-blue-600">Software Development</a></li>
        <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
        <li><a href="#" className="hover:text-blue-600">Analytic Solutions</a></li>
        <li><a href="#" className="hover:text-blue-600">Cloud and DevOps</a></li>
        <li><a href="#" className="hover:text-blue-600">Product Design</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li><i className="fas fa-map-marker-alt text-blue-600"></i> 374 FA Tower, William S Blvd, IL, USA</li>
        <li><i className="fas fa-phone text-blue-600"></i> (+880) 155-69569</li>
        <li><i className="fas fa-envelope text-blue-600"></i> info@yourmail.com</li>
        <li><i className="fas fa-clock text-blue-600"></i> Opening Hours: 10:00 - 18:00</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">Newsletter</h3>
      <p className="text-gray-600 mt-3">Subscribe to get the latest updates.</p>
      <div className="mt-4 flex">
        <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border rounded-l-lg"/>
        <button className="bg-gradient text-white px-4 py-2 rounded-r-lg"><img src='assets/images/telegram.png' className='w-5 h-5' /></button>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-600 mt-8 border-t pt-4">
    <p>&copy; 2025 Copyright @Vectorasoft | Designed by Vectorasoft

</p>
    <div className="mt-3 flex justify-center space-x-4">
      <a href="#" className="hover:text-blue-600">Home</a>
      <span>•</span>
      <a href="#" className="hover:text-blue-600">About</a>
      <span>•</span>
      <a href="#" className="hover:text-blue-600">Services</a>
      <span>•</span>
      <a href="#" className="hover:text-blue-600">Blogs</a>
      <span>•</span>
      <a href="#" className="hover:text-blue-600">Contect</a>

    </div>
  </div>
</footer>

            {/*End Footer */}
        </div>
    );
};

export default welcome;
