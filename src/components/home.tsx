'use client'
import Image from 'next/image'
import { TbMessageCircle2Filled } from 'react-icons/tb'

import Balance from 'react-wrap-balancer'
import { HeroPattern } from '@/components/HeroPattern'

import { AnalyticsButton } from '@/components/analytics-button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } }

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
}

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="relative flex  flex-col items-center justify-center gap-8 pt-2 sm:gap-3"
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
        href="https://t.me/cangastips"
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
          Somos especialistas em análise do mercado esportivo, com foco em{' '}
          <strong>FIFA e NBA2K</strong> . Temos uma <strong>IA</strong> que
          realiza as análises do mercado, envia tips no Telegram e executa
          automaticamente apostas na <strong>BET</strong>, oferecendo um serviço
          autônomo e independente para uma experiência confiável e única.
        </Balance>
      </motion.p>

      <div className="flex max-w-96 flex-col gap-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Grupo FREE"
            target="_blank"
            route={`https://t.me/bet365fifafree`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Grupo Select (FiFA + NBA2K)"
            target="_blank"
            route={`https://lastlink.com/p/C3FCBB41B`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Planilha de resultados (VIP)"
            target="_blank"
            route={`https://docs.google.com/spreadsheets/d/1JcvFYtjFEmA4oi_X1Vi50VEled3JYX5spj5q_hPYvWM/edit#gid=12892773`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Analisar FIFA ao vivo"
            route={`/fifa`}
            className="bg-cangas-blue"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <AnalyticsButton
            textButton="CangasTips Pro (Apostas automáticas)"
            // target="_blank"
            route={`/`}
            className=" cursor-default bg-gradient-to-r from-cangas-green to-cangas-blue opacity-50"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Serviço Broker"
            target="_blank"
            route={`https://api.whatsapp.com/send/?phone=%2B5538998388179&text&type=phone_number&app_absent=0`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <AnalyticsButton
            textButton="Planilha de resultados (Broker)"
            target="_blank"
            route={`https://docs.google.com/spreadsheets/d/149qEVZWFYA_UMUCZ9qmK7k1gPkMEtoEmBME1vL1HOps/edit#gid=0`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
      </div>
    </motion.main>
  )
}
