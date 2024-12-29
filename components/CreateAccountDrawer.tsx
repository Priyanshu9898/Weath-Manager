"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  //   DrawerClose,
  DrawerContent,
  DrawerDescription,
  //   DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CreateAccountDrawer = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">+ Create Account</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Create Account</DrawerTitle>
              <DrawerDescription>
                Create a new account to manage your transactions.
              </DrawerDescription>
            </DrawerHeader>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
