"use client";
import React from "react";
import { useParams } from "next/navigation";
const CreateTransaction = () => {
  const params = useParams<{ id: string }>();

  const id = params.id;

  return <div>{id}</div>;
};

export default CreateTransaction;
