"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "motion/react";

export function MyHeroSection() {
  const images = [
    "/assets/images/office.png",
  ];
  return (

    <ImagesSlider className="aspect-video object-cover h-[40rem]  mt-5 justify-start items-start" images={images}>
      <motion.div
        className="z-50 flex flex-col p-7 max-w-[50%] bg-[#f68c1f]/90 m-4 text-white"
      >
        <motion.img src="assets/images/logoBgBlue.png" className="w-30 absolute right-10" />
        <motion.p className="font-proxima-black text-4xl">
        What is Westec ?
        </motion.p>
        <motion.p className="font-proxima-thin text-xl mt-10">
        Westec Corporation was established in 2007 in Phnom Penh by a group of returning overseas engineers to provide security solutions to an emerging home and business market. Since that time, Westec has grown to provide solutions in a divers array of technology areas including home automation, cinema & home theater, custom software, etc.
        </motion.p>
        <motion.p className="font-proxima-thin text-xl mt-10">
        Now occupying in a new 830m2 facility in the Sen Sok district of Phnom Penh, Westec employs over 40 staff and provides service to customers all over Cambodia.
        </motion.p>

        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
