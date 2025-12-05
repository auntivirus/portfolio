import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = ({ variant = "minimal" }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Adjust offset based on variant to center the cursor
      const offset = variant === "glow" ? 10 : 16;
      mouseX.set(e.clientX - offset);
      mouseY.set(e.clientY - offset);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Hide system cursor
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      // Restore system cursor
      document.body.style.cursor = "auto";
    };
  }, [variant, mouseX, mouseY]);

  const variants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: variant === "glow" ? 2.5 : 1.5,
    },
  };

  if (variant === "glow") {
    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "white",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
      />
    );
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid #ffffff",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 800, damping: 40 }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
};

export default Cursor;
