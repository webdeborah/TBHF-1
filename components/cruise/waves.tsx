import { motion } from "framer-motion";

const NaturalWaves = () => {
  // Wave configurations with varying heights, animations, and colors for more natural look
  const waveConfigs = [
    {
      height: "h-16",
      yOffset: "bottom-0",
      duration: 15,
      delay: 0,
      fillColor: "fill-cyan-100",
      opacity: "opacity-15",
      path: "M0,64 C100,35 200,80 300,50 C400,20 500,60 600,40 C700,20 800,70 900,50 C1000,30 1100,60 1200,45 L1200,120 L0,120 Z",
    },
    {
      height: "h-20",
      yOffset: "bottom-2",
      duration: 18,
      delay: 2,
      fillColor: "fill-cyan-200",
      opacity: "opacity-10",
      path: "M0,50 C150,75 250,40 400,60 C550,80 650,30 800,55 C950,80 1050,40 1200,60 L1200,120 L0,120 Z",
    },
    {
      height: "h-24",
      yOffset: "bottom-4",
      duration: 22,
      delay: 4,
      fillColor: "fill-blue-100",
      opacity: "opacity-20",
      path: "M0,70 C180,40 280,90 450,65 C620,40 750,75 900,60 C1050,45 1100,70 1200,55 L1200,120 L0,120 Z",
    },
    {
      height: "h-20",
      yOffset: "bottom-6",
      duration: 25,
      delay: 1,
      fillColor: "fill-blue-200",
      opacity: "opacity-15",
      path: "M0,55 C120,75 240,50 360,70 C480,90 600,40 720,65 C840,90 960,60 1080,75 C1140,85 1200,65 1200,65 L1200,120 L0,120 Z",
    },
    {
      height: "h-28",
      yOffset: "bottom-10",
      duration: 30,
      delay: 3,
      fillColor: "fill-white",
      opacity: "opacity-10",
      path: "M0,80 C150,55 200,85 350,65 C500,45 650,75 800,65 C950,55 1100,80 1200,70 L1200,120 L0,120 Z",
    },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {waveConfigs.map((config, index) => (
        <motion.div
          key={index}
          className={`absolute left-0 w-full ${config.height} ${config.yOffset}`}
          initial={{ x: index % 2 === 0 ? -10 : 10 }}
          animate={{
            x: index % 2 === 0 ? [0, 10, 0, -10, 0] : [0, -10, 0, 10, 0],
            y: [0, 2, -2, 1, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: config.duration,
              ease: "easeInOut",
              delay: config.delay,
            },
            y: {
              repeat: Infinity,
              duration: config.duration / 2,
              ease: "easeInOut",
              delay: config.delay / 2,
            },
          }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full h-full ${config.opacity}`}
          >
            <path d={config.path} className={config.fillColor}></path>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default NaturalWaves;
