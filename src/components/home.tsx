"use client";

import Image from "next/image";

import { TbMessageCircle2Filled } from "react-icons/tb";

import Balance from "react-wrap-balancer";

import { HeroPattern } from "@/components/HeroPattern";

import { AnalyticsButton } from "@/components/analytics-button";

import { motion } from "framer-motion";

import Link from "next/link";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },

  visible,
};

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="relative flex  flex-col items-center justify-center gap-8 pb-4 pt-2 sm:gap-3"
    >
      <motion.div variants={itemVariants} className="absolute top-0">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          quality={100}
          alt="logo"
        />
      </motion.div>

      <HeroPattern className="absolute bottom-1/2 left-1/2 top-1/2 -z-40 w-full -translate-x-1/2 -translate-y-1/2" />

      <Link
        href="https://api.whatsapp.com/send?phone=553898388179&text=Ol%C3%A1,%20venho%20atrav%C3%A9s%20do%20site%20da%20CangasTips!"
        target="_blank"
        className="z-100 fixed bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tl from-cangas-green to-zinc-950 hover:text-zinc-50 "
      >
        <TbMessageCircle2Filled className="text-4xl transition duration-200 hover:scale-110" />
      </Link>

      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },

          visible,
        }}
        className="mt-36 text-3xl font-extrabold leading-tight tracking-tight text-zinc-300"
      >
        Cangas Tips
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="px-4 text-center text-lg font-normal leading-7 tracking-tight text-zinc-400"
      >
        <Balance>
          Temos uma <strong>IA</strong> que realiza as análises de todos os
          mercados esportivos da <strong>BET365</strong> e executa
          automaticamente as entradas. Oferecendo um serviço autônomo e
          independente para uma experiência confiável e única. Chega de perder
          dinheiro pra <strong>BET</strong> e vem lucrar com a{" "}
          <strong>Cangas Investimentos.</strong>
        </Balance>
        {/* Somos especialistas em análise do mercado esportivo,
          com foco em <strong>FIFA e NBA2K</strong> . Temos uma{" "}
          <strong>IA</strong> que realiza as análises do mercado, envia tips e
          executa automaticamente apostas na <strong>BET</strong>, oferecendo um
          serviço autônomo e independente para uma experiência confiável e
          única. */}
      </motion.p>

      <div className="flex max-w-96 flex-col gap-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Sobre o Software Automático"
            target="_blank"
            route={``}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Sobre o Broker"
            target="_blank"
            route={``}
            className="bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Contratar Software"
            target="_blank"
            route={`https://api.whatsapp.com/send?phone=553898388179&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20Software!`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Contratar Broker"
            target="_blank"
            route={``}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Planilha de resultados Software"
            target="_blank"
            route={``}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Planilha de resultados Broker"
            target="_blank"
            route={``}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
