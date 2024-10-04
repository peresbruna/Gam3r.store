"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Produto } from "../../core";


export interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;
  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
       >
      <div className="h-48 w-full relative">
        <Image
          src={produto.imagem}
          alt="Imagem do produto"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex-1 flex p-5">
        <span className="text-lg font-semibold">
          {props.produto.nome}
        </span>
      </div>
    </Link>
  );
}
