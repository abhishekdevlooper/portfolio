import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as BullIcon } from "./bull.svg"; // Ensure you have a bull.svg file
import "./BullLogo.css";

const BullLogo = () => {
  return (
    <motion.div
      className="bull-logo"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <BullIcon className="bull-icon" />
    </motion.div>
  );
};

export default BullLogo;
