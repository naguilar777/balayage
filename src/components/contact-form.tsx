"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
// Removed: import TimePickerInput from "react-time-picker-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Added Select components
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/constants";
import Link from "next/link";

// Function to generate time options
const generateTimeOptions = () => {
  const times = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 17 && minute > 0) break; // Stop after 17:00
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      times.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre completo debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos." }).regex(/^\+?[0-9\s-()]*$/, { message: "Número de teléfono inválido."}),
  preferredDate: z.date({ required_error: "Por favor, selecciona una fecha." }),
  preferredTime: z.string({
    required_error: "Por favor, selecciona una hora."
  })
  .min(1, { message: "Por favor, selecciona una hora." })
  // Keep Zod validation for extra safety, though the select options will enforce the range
  .refine(time => {
    if (!time) return false;
    const [hour, minute] = time.split(':').map(Number);
    const compareDate = new Date();
    const selectedTime = new Date(compareDate.getFullYear(), compareDate.getMonth(), compareDate.getDate(), hour, minute);
    const minTime = new Date(compareDate.getFullYear(), compareDate.getMonth(), compareDate.getDate(), 9, 0);
    const maxTime = new Date(compareDate.getFullYear(), compareDate.getMonth(), compareDate.getDate(), 17, 0);
    return selectedTime >= minTime && selectedTime <= maxTime;
  }, { message: "Selecciona una hora válida." }), // Updated message
  comments: z.string().optional(),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredTime: "",
      comments: "",
      privacyPolicy: false,
    },
  });

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    toast({
      title: "Preparando tu mensaje...",
      description: "¡Serás redirigido a WhatsApp para finalizar tu reserva!",
    });

    const formattedDate = format(values.preferredDate, "PPP", { locale: es });
    const dateTimePreference = `${formattedDate} - ${values.preferredTime}`;

    const messageParts = [
      "¡Hola! *Quiero reservar una cita para Balayage.*",
      `Nombre: ${values.fullName}`,
      `Email: ${values.email}`,
      `Teléfono: ${values.phone}`,
      `Fecha/Hora preferida: ${dateTimePreference}`,
    ];

    if (values.comments && values.comments.trim() !== "") {
      messageParts.push(`Comentarios: ${values.comments}`);
    }

    const whatsappMessage = messageParts.join("\n");
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
       form.reset();
       setIsSubmitting(false);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Ana García López" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tuemail@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="504 00000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha preferida</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) } // Disable past dates
                      initialFocus
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="preferredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hora preferida</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full time-select-trigger"> {/* Added custom class */}
                    <SelectValue placeholder="Selecciona la hora (9:00 – 17:00)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="time-select-content"> {/* Added custom class */}
                  {timeOptions.map(time => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Horario de atención para reservas: 09:00 - 17:00.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentarios (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="¿Algo más que debamos saber? ¿Alguna referencia?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacyPolicy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-background">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Acepto la política de privacidad
                </FormLabel>
                <FormDescription>
                  Confirmo que he leído y acepto los <Link href="/privacy-policy" onClick={(e) => handleSmoothScroll(e, "/privacy-policy")} target="_blank" className="underline hover:text-primary">términos y condiciones</Link>.
                </FormDescription>
                 <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Redirigiendo..." : "Enviar y contactar por WhatsApp"}
        </Button>
      </form>
    </Form>
  );
}
