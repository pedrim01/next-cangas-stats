import * as Tooltip from "@radix-ui/react-tooltip"
import { StarFilledIcon } from "@radix-ui/react-icons"

interface TooltipMatchesProps {
  name?: string
  dataMatch?: {
    home_player?: string
    away_player?: string
    winner_name?: string
    score?: string
    timestamp?: number
    dateConverted?: string
  }
  player1?: string
  player2?: string
  icon?: React.ReactNode
  content?: string
}

export function TooltipRoot({ icon, content }: TooltipMatchesProps) {
  return (
    <Tooltip.Provider delayDuration={10}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{icon}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`select-none rounded-[4px] bg-zinc-800 p-2 text-sm/3 font-semibold leading-none text-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade`}
            sideOffset={5}
          >
            <span>{content}</span>

            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export function TooltipMatches({ name, dataMatch }: TooltipMatchesProps) {
  const colorStateMatch = {
    textColor:
      dataMatch?.winner_name === name?.toLowerCase()
        ? `text-green-800`
        : dataMatch?.winner_name === "draw"
          ? `text-gray-500`
          : `text-red-800`,
    bgColor:
      dataMatch?.winner_name === name?.toLowerCase()
        ? `bg-green-800`
        : dataMatch?.winner_name === "draw"
          ? `bg-gray-500`
          : `bg-red-800`,
  }
  return (
    <Tooltip.Provider delayDuration={10}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <StarFilledIcon
            className={`${colorStateMatch.textColor} cursor-pointer`}
          />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`select-none rounded-[4px] ${colorStateMatch.bgColor} p-2 text-sm/3 font-semibold leading-none text-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade`}
            sideOffset={5}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="col-span-3"> {dataMatch?.dateConverted}</span>
              <span className="justify-self-end">
                {dataMatch?.home_player} {dataMatch?.score}{" "}
                {dataMatch?.away_player}
              </span>
            </div>

            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export function TooltipMatchesH2h({ player1, dataMatch }: TooltipMatchesProps) {
  const colorStateMatch = {
    textColor:
      dataMatch?.winner_name === player1?.toLowerCase()
        ? "text-rose-800"
        : dataMatch?.winner_name === "draw"
          ? "text-gray-500"
          : "text-purple-800",
    bgColor:
      dataMatch?.winner_name === player1?.toLowerCase()
        ? "bg-rose-800"
        : dataMatch?.winner_name === "draw"
          ? "bg-gray-500"
          : "bg-purple-800",
  }
  return (
    <Tooltip.Provider delayDuration={10}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <StarFilledIcon
            className={`${colorStateMatch.textColor} cursor-pointer`}
          />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`select-none rounded-[4px] ${colorStateMatch.bgColor} p-2 text-sm/3 font-semibold leading-none text-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade`}
            sideOffset={5}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="col-span-3"> {dataMatch?.dateConverted}</span>
              <span className="justify-self-end">
                {dataMatch?.home_player} {dataMatch?.score}{" "}
                {dataMatch?.away_player}
              </span>
            </div>

            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
