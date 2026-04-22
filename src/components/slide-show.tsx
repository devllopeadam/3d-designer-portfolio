// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "motion/react";

import "@splidejs/react-splide/css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState } from "react";
import ProjectMedia, { isVideoMedia } from "./project-media";

const SlideShow = ({ images }: { images: string[] }) => {
  const [selectedMedia, setSelectedMedia] = useState("");
  return (
    <>
      <Splide
        options={{
          autoplay: "true",
          perPage: 1,
          start: 0,
          rewind: true,
          padding: { left: "3rem", right: "3rem" },
          gap: "1rem",
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {images.map((image, idx) => (
            <SplideSlide key={idx} className="flex items-center">
              <motion.button
                className="relative block w-full cursor-zoom-in"
                onClick={() => {
                  setSelectedMedia(image);
                }}
              >
                <ProjectMedia
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-auto"
                  autoPlay
                  loop
                  muted
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-white/90 text-sm backdrop-blur-[2px]"
                  variants={{
                    idle: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Click to zoom
                </motion.div>
              </motion.button>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__progress">
          <div className="splide__progress__bar"></div>
        </div>
      </Splide>
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia("")}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
          <DialogHeader className="sr-only">
            <DialogTitle>Project media</DialogTitle>
            <DialogDescription>Expanded project media preview</DialogDescription>
          </DialogHeader>
          <motion.div>
            <ProjectMedia
              src={selectedMedia || ""}
              alt="project media"
              width={1080}
              height={1080}
              className="w-full rounded-lg h-auto max-h-[90vh]"
              controls={isVideoMedia(selectedMedia)}
              autoPlay={isVideoMedia(selectedMedia)}
              loop={isVideoMedia(selectedMedia)}
              muted={isVideoMedia(selectedMedia)}
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default SlideShow;
