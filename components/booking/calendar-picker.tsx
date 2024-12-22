"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface CalendarPickerProps {
  onDateSelect?: (date: Date) => void
  availableDates?: Date[]
  minDate?: Date
  maxDate?: Date
}

export function CalendarPicker({
  onDateSelect,
  availableDates = [],
  minDate = new Date(),
  maxDate,
}: CalendarPickerProps) {
  const [date, setDate] = useState<Date>()

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate && onDateSelect) {
      onDateSelect(selectedDate)
    }
  }

  // Function to check if a date is available
  const isDateAvailable = (date: Date) => {
    if (availableDates.length === 0) return true
    return availableDates.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          disabled={(date) => {
            const isBeforeMin = date < minDate
            const isAfterMax = maxDate ? date > maxDate : false
            const isUnavailable = !isDateAvailable(date)
            return isBeforeMin || isAfterMax || isUnavailable
          }}
        />
      </PopoverContent>
    </Popover>
  )
}