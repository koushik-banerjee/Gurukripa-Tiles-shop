"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  projectType: z.string().min(1, "Please specify project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ConsultationModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Consultation Request Sent", {
        description: "Our design team will contact you within 24 hours.",
      });
      setOpen(false);
      form.reset();
    } catch (error) {
      toast.error("Submission Failed", {
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-[500px] bg-ag-charcoal border-ag-mist text-ag-white p-8 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-ag-copper/10 blur-[60px] pointer-events-none" />
        
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl font-display tracking-tight text-ag-white">Book Consultation</DialogTitle>
          <DialogDescription className="text-ag-sand/50 font-sans">
            Schedule a private architectural consultation with our stone specialists.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-ag-sand/50">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-ag-black border-ag-mist focus:border-ag-copper rounded-none h-12" />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-ag-sand/50">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-ag-black border-ag-mist focus:border-ag-copper rounded-none h-12" />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-ag-sand/50">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 ..." {...field} className="bg-ag-black border-ag-mist focus:border-ag-copper rounded-none h-12" />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] uppercase tracking-widest text-ag-sand/50">Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Residential / Hotel" {...field} className="bg-ag-black border-ag-mist focus:border-ag-copper rounded-none h-12" />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] uppercase tracking-widest text-ag-sand/50">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your architectural vision..." 
                      className="bg-ag-black border-ag-mist focus:border-ag-copper min-h-[100px] rounded-none resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-400" />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ag-copper hover:bg-ag-copper/90 text-ag-white py-6 uppercase tracking-widest text-xs h-auto rounded-none font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Requesting...
                </>
              ) : (
                "Request Consultation"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
