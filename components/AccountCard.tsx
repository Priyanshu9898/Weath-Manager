/* eslint-disable @typescript-eslint/no-explicit-any */
// components/AccountCard.tsx

"use client";

import React from "react";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import toast from "react-hot-toast";
import { AccountCardProps } from "@/types";
import { updateAccountDefaults } from "@/actions/Dashboard";

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const { id, name, type, balance, isDefault } = account;

  const handleToggleDefault = async () => {
    try {
      const updateAccount = await updateAccountDefaults(account.id);

      if (updateAccount && updateAccount.success) {
        toast.success(updateAccount.message);
      } else {
        toast.error("Failed to update account");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update account");
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow group relative" key={id}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
        <Switch
          checked={isDefault}
          onCheckedChange={handleToggleDefault}
          className="bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700"
        />
      </CardHeader>
      <Link href={`/account/${id}`}>
        <CardContent>
          <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default AccountCard;
