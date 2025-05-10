
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/constants";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre completo debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos." }).regex(/^\+?[0-9\s-()]*$/, { message: "Número de teléfono inválido."}),
  preferredDate: z.date({ required_error: "Por favor, selecciona una fecha." }),
  preferredTime: z.string({ required_error: "Por favor, selecciona una hora." }).min(1, { message: "Por favor, selecciona una hora." }),
  comments: z.string().optional(),
  privacyPolicy: z.boolean().refine(val => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

const generateTimeSlots = () => {
  const slots = [];
  const startTime = 9; // 9 AM
  const endTime = 19; // 7 PM
  const interval = 30; // minutes

  for (let hour = startTime; hour <= endTime; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      if (hour === endTime && minute > 0) break; // Do not exceed end time
      
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      slots.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  // Ensure the last slot is exactly endTime if interval doesn't align perfectly
  // For 9:00 to 19:00 with 30 min interval, 19:00 is already included.
  return slots;
};

const timeSlots = generateTimeSlots();

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
      "¡Hola! Quiero reservar una cita para Balayage.",
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

    window.open(whatsappUrl, '_blank');

    // Reset form and state after a brief moment
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 500);
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
                  <Input type="tel" placeholder="(+34) 600 000 000" {...field} />
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
                  <SelectTrigger className={cn(!field.value && "text-muted-foreground")}>
                    <SelectValue placeholder="Selecciona una hora" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Horario de atención: 09:00 - 19:00.
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

