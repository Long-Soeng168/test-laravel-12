'use client';
import { Card } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MySlide() {
    const images = [
        { id: '1', image: '/assets/images/banner2.png', alt: 'Slide 1' },
        { id: '2', image: '/assets/images/banner1.png', alt: 'Slide 2' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative mx-auto w-full max-w-full">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images?.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%]">
                            <Card className="relative aspect-[19/6] w-full rounded-none py-0">
                                <img src={item.image} alt="slide" className="aspect-[19/6] w-full object-cover" />
                                <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white">
                                    <div className="mx-auto max-w-screen-2xl p-20">
                                        <h3 className="max-w-[50%] text-5xl">Transforming Tomorrow, Today</h3>
                                        <p className="mt-5 max-w-[50%] text-base">
                                            Empowering businesses and institutions with cutting-edge software solutions, crafted precisely for your
                                            unique challenges.
                                        </p>
                                        <div className="mt-5 flex justify-start gap-4">
                                            <a
                                                className="min-w-[120px] rounded border border-white bg-[#2f61b2] px-6 py-2 text-center text-white hover:bg-transparent hover:text-white focus:ring focus:outline-none active:text-white"
                                                href="/contact"
                                            >
                                                Contact Us
                                            </a>

                                            <a
                                                className="min-w-[120px] rounded border border-[#2f61b2] px-6 py-2 text-center text-white hover:bg-[#2f61b2] hover:text-white focus:ring focus:outline-none active:bg-indigo-500"
                                                href="/explore"
                                            >
                                                Explore
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dot Navigation */}
            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {images?.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full transition ${index === selectedIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
