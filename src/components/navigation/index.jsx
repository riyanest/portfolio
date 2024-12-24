"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

const Navigation = () => {
  // const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    // <div className="w-full fixed h-screen flex items-center justify-center">
    <div className="fixed top-10 right-0 h-screen w-100 flex items-center justify-center  ">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            // <motion.div
            //   variants={container}
            //   initial="hidden"
            //   animate="show"
            //   className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            // >
            <div>
              {BtnList.map((btn, index) => {
                return <NavButton key={btn.label} {...btn} />;
              })}
            </div>
            // </motion.div>
          ) : (
            <>
              {/* <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div> */}
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
