import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ card, showCard }) => {
  if (card.checked == true) {
    return (
      <div className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 transition opacity-50 p-4">
        <img src={card.img} alt={card.name} draggable="false" />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={() =>
          showCard({ target: { accessKey: card.name, id: card.id } })
        }
        animate={{
          rotateY: card.show === true ? 180 : 0,
          scale: card.show === true ? 1.03 : 1,
          transition: { duration: 0.5 },
        }}
        className="w-20 h-32 md:w-28 md:h-40 m-1 border-2 border-neutral-900 flex items-center justify-center rounded-md cursor-pointer "
      >
        {card.show === true ? (
          <motion.div
            className="w-full h-full flex items-center justify-center p-4"
            style={{
              rotateY: card.show === true ? 180 : 0,
            }}
          >
            <img src={card.img} alt={card.name} draggable="false" />
          </motion.div>
        ) : (
          <motion.div className="w-full h-full flex items-center justify-center">
            <img src="/assets/logo250.png" alt="logo" draggable="false" />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
