import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function MyFeatureProducts() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
    <div className="w-full h-full pt-20">
      <h2 className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Security and Safety Solution
      </h2>
      <Carousel items={cards} />
    </div>
    <div className="w-full h-full py-20">
      <h2 className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Smart Home and Office Solutions
      </h2>
      <Carousel items={cards} />
    </div>
    <div className="w-full h-full py-20">
      <h2 className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Security and Safety Solutions
      </h2>
      <Carousel items={cards} />
    </div>
    <div className="w-full h-full py-20">
      <h2 className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      It Solutions
      </h2>
      <Carousel items={cards} />
    </div>
    </>
  );
}

const data = [
  {
    category: "Security and Safety Solution",
    title: "Access Control",
    src: "assets/images/78.png",
  },
  {
    category: "Security and Safety Solution",
    title: "CCTV",
    src: "assets/images/77.png",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
