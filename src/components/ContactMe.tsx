
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, Brain } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactMe: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend service
      console.log("Form submitted with values:", values);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 container-custom relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <h2 className="section-heading">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Left column: Introduction and social links */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-portfolio-light mb-4">Let's Connect</h3>
            <p className="text-portfolio-muted text-lg mb-6">
              Feel free to reach out for collaborations, opportunities, or just to say hello. 
              I'm always open to discussing new projects and ideas.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-portfolio-light">Find me on</h4>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.linkedin.com/in/jay-gehlot/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-portfolio-muted hover:text-portfolio-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-navy border border-portfolio-slate/10 group-hover:border-portfolio-accent/50 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Data-analyst-Jay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-portfolio-muted hover:text-portfolio-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-navy border border-portfolio-slate/10 group-hover:border-portfolio-accent/50 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
            </div>
            
            <div>
              <a 
                href="https://leetcode.com/u/pyLlG0guCk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-portfolio-muted hover:text-portfolio-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-navy border border-portfolio-slate/10 group-hover:border-portfolio-accent/50 transition-all duration-300">
                  {/* Using a custom LeetCode icon style since it's not in lucide */}
                  <div className="text-lg font-bold">LC</div>
                </div>
                <span className="font-medium">LeetCode</span>
              </a>
            </div>
            
            <div className="pt-6">
              <p className="text-portfolio-muted">
                Prefer email? Contact me directly at:
              </p>
              <a 
                href="mailto:jaygehlot661@gmail.com" 
                className="flex items-center gap-2 mt-2 text-portfolio-accent hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>jaygehlot661@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right column: Contact form */}
        <div className="bg-gradient-to-br from-portfolio-navy to-portfolio-midnight p-6 md:p-8 rounded-lg border border-portfolio-slate/10">
          <h3 className="text-xl font-semibold text-portfolio-light mb-6">Send Me a Message</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-light">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="bg-portfolio-dark-blue/50" />
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
                    <FormLabel className="text-portfolio-light">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-portfolio-dark-blue/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-light">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What is this regarding?" {...field} className="bg-portfolio-dark-blue/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-portfolio-light">Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your thoughts, questions, or project ideas..." 
                        className="min-h-[150px] bg-portfolio-dark-blue/50" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto btn-primary"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      {/* Custom Footer Banner - Reduced margin-top */}
      <div className="mt-16 text-center text-portfolio-muted">
        <p className="text-base flex items-center justify-center gap-2">
          Built with <Brain className="w-5 h-5 text-portfolio-accent" /> and 
          <span className="font-bold text-portfolio-accent flex items-center">
            AI
          </span>
        </p>
      </div>
    </section>
  );
};

export default ContactMe;
