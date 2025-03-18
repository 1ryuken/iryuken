import { motion } from 'framer-motion';
import { Github, MessageSquare } from 'lucide-react';
import { ParallaxCard } from './components/ParallaxCard';
import { FloatingCircle } from './components/FloatingCircle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4">
          <FloatingCircle delay={0} />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <FloatingCircle delay={2} />
        </div>
        <div className="absolute top-3/4 left-3/4">
          <FloatingCircle delay={4} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-200/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [null, "-100%"],
              x: [null, `${(Math.random() - 0.5) * 200}%`]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: -Math.random() * 20
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full relative z-10">
        <ParallaxCard className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-yellow-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-24 h-24 rounded-full overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="Ryuken_Infobox.webp" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-200/20 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <h1 className="text-4xl font-bold text-gray-800">
                Ryuken
              </h1>
            </div>

            <div className="space-y-4">
              <motion.a
                href="https://github.com/1ryuken"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-yellow-50/80 hover:bg-yellow-100/80 transition-colors"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-6 h-6 text-yellow-600" />
                <span className="text-yellow-800 font-medium">github.com/1ryuken</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 p-4 rounded-xl bg-yellow-50/80"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <MessageSquare className="w-6 h-6 text-yellow-600" />
                <span className="text-yellow-800 font-medium">eshwar.eth</span>
              </motion.div>

              <motion.a
                href="https://bsky.app/profile/iryuken.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-yellow-50/80 hover:bg-yellow-100/80 transition-colors"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2ZM16.2264 15.8246C15.7934 16.2132 14.6256 16.9097 12.4172 16.9097C9.61183 16.9097 7.09322 15.1953 7.09322 12C7.09322 8.80474 9.61183 7.09025 12.4172 7.09025C14.6256 7.09025 15.7934 7.78687 16.2264 8.17536C16.5376 8.45425 16.9397 8.42755 17.2186 8.11563L17.8975 7.34661C18.1764 7.03469 18.1497 6.53259 17.8385 6.2537C17.0096 5.52798 15.2419 4.5 12.4172 4.5C8.23169 4.5 4.50293 7.04754 4.50293 12C4.50293 16.9525 8.23169 19.5 12.4172 19.5C15.2419 19.5 17.0096 18.472 17.8385 17.7463C18.1497 17.4674 18.1764 16.9653 17.8975 16.6534L17.2186 15.8844C16.9397 15.5725 16.5376 15.5458 16.2264 15.8246Z" />
                </svg>
                <span className="text-yellow-800 font-medium">@iryuken.bsky.social</span>
              </motion.a>
            </div>
          </motion.div>
        </ParallaxCard>
      </div>
    </div>
  );
}

export default App;