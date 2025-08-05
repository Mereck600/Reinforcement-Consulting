import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("homeAnimationPlayed");

    if (!hasVisited) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        setAnimationDone(true);
        setShowIntro(false);
        localStorage.setItem("homeAnimationPlayed", "true");
      }, 3000); // 3 seconds animation

      return () => clearTimeout(timer);
    } else {
      setAnimationDone(true);
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.img
              src="/assets/images/reinforcementLogo.png"
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ width: 200, height: "auto" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {animationDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ padding: 20 }}
        >
          <h1>Welcome to My Site!</h1>
          <p>This is your normal homepage content.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
