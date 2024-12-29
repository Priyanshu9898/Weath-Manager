"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  //   DrawerClose,
  DrawerContent,
  DrawerDescription,
  //   DrawerFooter,
  //   DrawerHeader,
  //   DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// import { Button } from "@/components/ui/button";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateAccountFormSchema } from "@/schema/AccountFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AccountType } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
// import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { HashLoader } from "react-spinners";

const CreateAccountDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof CreateAccountFormSchema>>({
    resolver: zodResolver(CreateAccountFormSchema),
    defaultValues: {
      name: "",
      type: "SAVINGS",
      balance: "",
      isDefault: false,
    },
  });

  function onSubmit(values: z.infer<typeof CreateAccountFormSchema>) {
    setIsLoading(true);
    console.log(values);
  }

  return (
    <div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <h1 className="text-3xl font-bold ">Create Account</h1>
            <DrawerDescription>
              Create a new account to manage your transactions.
            </DrawerDescription>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-5 mb-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Savings Account" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the name for your account.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) =>
                            field.onChange(value as AccountType)
                          }
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select account type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={AccountType.CURRENT}>
                              Current
                            </SelectItem>
                            <SelectItem value={AccountType.SAVINGS}>
                              Savings
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Choose the type of account.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="balance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initial Balance</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0.00" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the initial balance for the account.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Is Default Field */}
                <FormField
                  control={form.control}
                  name="isDefault"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        {/* <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        /> */}
                        <Switch
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Set as Default Account</FormLabel>
                        <FormDescription>
                          Make this account your default for transactions.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="mb-10 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <HashLoader color="#fff" size={20} />
                      <span className="ml-2">Creating Account...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
