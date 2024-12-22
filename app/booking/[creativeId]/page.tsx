"use client"

import { useState } from "react"
import { CalendarPicker } from "@/components/booking/calendar-picker"
import { TimeSlots } from "@/components/booking/time-slots"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function BookingPage({ params }: { params: { creativeId: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const { toast } = useToast()

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select both date and time",
        variant: "destructive",
      })
      return
    }

    try {
      // Here you would integrate with your booking API
      toast({
        title: "Success",
        description: "Booking request sent successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create booking",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-start justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Book a Session</CardTitle>
          <CardDescription>Select your preferred date and time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Date</h3>
            <CalendarPicker
              onDateSelect={setSelectedDate}
              minDate={new Date()}
              maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Available Times</h3>
            <TimeSlots
              date={selectedDate}
              onTimeSelect={setSelectedTime}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
          >
            Confirm Booking
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}