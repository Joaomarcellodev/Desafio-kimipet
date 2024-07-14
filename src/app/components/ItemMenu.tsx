import React from "react";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center hover:underline">
      <span className="text-orange text-xl">{name}</span>
    </button>
  );
}
