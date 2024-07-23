import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 bg-black border-[#F5D558] rounded-3xl"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 w-full h-full rounded-3xl"
        initial={{ borderWidth: '2px' }}
        variants={{
          hover: {
            borderWidth: '4px',
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'mirror'
            }
          }
        }}
      />
      <div>
        <span className='relative'>Let's Vibe</span>
    </div>
    </motion.button>
  );
};

export default Button;

    
 