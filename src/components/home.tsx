"use client"
import Image from "next/image"
import Balance from "react-wrap-balancer"
import { HeroPattern } from "@/components/HeroPattern"

import { AnalyticsButton } from "@/components/analytics-button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-3 pt-2">
      <Image
        className="absolute top-0"
        src="/logo.png"
        width={150}
        height={150}
        quality={100}
        alt="logo"
      />
      <HeroPattern className="absolute bottom-1/2 left-1/2 top-1/2 -z-40 w-full -translate-x-1/2 -translate-y-1/2" />

      <h1 className="mt-36 text-3xl font-extrabold leading-tight tracking-tight text-zinc-300">
        Cangas Tips
      </h1>

      <p className="px-4 text-center text-lg font-normal leading-7 tracking-tight text-zinc-400">
        <Balance>
          Somos especialistas em análise do mercado esportivo, com foco em{" "}
          <strong>FIFA e NBA2K</strong> . Temos uma <strong>IA</strong> que
          realiza as análises do mercado, envia tips no Telegram e executa
          automaticamente apostas na <strong>BET</strong>, oferecendo um serviço
          autônomo e independente para uma experiência confiável e única.
        </Balance>
      </p>

      <div className="flex w-96 flex-col gap-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Grupo FREE"
            target="_blank"
            route={`https://t.me/bet365fifafree`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Grupo Select (FiFA + NBA2K)"
            target="_blank"
            route={`https://lastlink.com/p/C3FCBB41B`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Planilha de resultados"
            target="_blank"
            route={`https://docs.google.com/spreadsheets/d/1JcvFYtjFEmA4oi_X1Vi50VEled3JYX5spj5q_hPYvWM/edit#gid=12892773`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Analisar FIFA ao vivo"
            route={`/fifa`}
            className="bg-cangas-blue"
          />
        </motion.div>
        <motion.div>
          <AnalyticsButton
            textButton="Software AI Apostador (Em breve)"
            // target="_blank"
            route={`/`}
            className=" cursor-default bg-gradient-to-r from-cangas-green to-cangas-blue opacity-50"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Serviço Broker"
            target="_blank"
            route={`https://api.whatsapp.com/send/?phone=%2B5538998388179&text&type=phone_number&app_absent=0`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <AnalyticsButton
            textButton="Suporte"
            target="_blank"
            route={`https://t.me/cangastips`}
            className=" bg-gradient-to-r from-cangas-green to-cangas-blue"
          />
        </motion.div>
      </div>
    </main>
  )
}
