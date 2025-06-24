import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the form schema using Zod for validation
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize the form with react-hook-form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Define the submit handler
  const onSubmit = (data: LoginFormValues) => {
    console.log('Form submitted:', data);
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle success/error states here
    }, 2000);
  };

  return (
    <Card className="w-96 bg-card text-card-foreground shadow-lg rounded-lg">
      <CardHeader className="text-center space-y-1 p-6">
        <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Customizing Input to match the image style */}
                  <FormControl>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder=" " // Required for the label animation
                        className={cn(
                          'peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary bg-transparent rounded-none p-0',
                          'focus-visible:ring-0 focus-visible:ring-offset-0'
                        )}
                        {...field}
                      />
                      <FormLabel
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                      >
                        Email Address
                      </FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="password"
                          type="password"
                          placeholder=" " // Required for the label animation
                          className={cn(
                            'peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary bg-transparent rounded-none p-0',
                            'focus-visible:ring-0 focus-visible:ring-offset-0'
                          )}
                          {...field}
                        />
                        <FormLabel
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                        >
                          Password
                        </FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
               <div className="flex justify-end">
                 <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-primary hover:text-primary/80">
                    Forgot Password
                 </Button>
               </div>
            </div>

            <Button type="submit" className="w-full text-base py-3" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <p className="w-full text-center text-sm text-muted-foreground">
          Don't have an account?{\' '}
          <Button variant="link" className="p-0 h-auto ml-1 text-primary hover:text-primary/80">
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
