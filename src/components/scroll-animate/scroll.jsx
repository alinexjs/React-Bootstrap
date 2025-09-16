import { motion, useScroll, useTransform } from "framer-motion"; //animaçao
import animateImg from "../../assets/animate.png";//imagem
import "./scroll.css"//css

const Animate = () => {
  const { scrollYProgress } = useScroll(); //conforme rola a página
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "150%"]); // movimentação ao scrollar

  return (
    <div className="overflow-hidden w-full h-64 my-10">
      <motion.img
        src={animateImg} //imagem
        alt="animate"
        className="animate-img h-full object-contain"
        style={{ x }} // animação vindo do Framer Motion
      />
    </div>
  );
};

export default Animate;
