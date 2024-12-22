"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TimeSlotsProps {
  date?: Date
  slots?: string[]
  onTimeSelect?: (time: string) => void
}

export function TimeSlots({ 
  date, 
  slots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
  onTimeSelect 
}: TimeSlotsProps) {
  const [selectedTime, setSelectedTime] = useState<string>()

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (onTimeSelect) {
      onTimeSelect(time)
    }
  }

  if (!date) return null

  return (
    <ScrollArea className="h-[280px] rounded-md border">
      <div className="p-4 space-y-2">
        {slots.map((time) => (
          <Button
            key={time}
            variant="outline"
            className={cn(
              "w-full justify-start",
              selectedTime === time && "border-primary"
            )}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}