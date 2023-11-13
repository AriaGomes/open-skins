import React, { ReactNode } from "react";
import Image from "next/image";
import { Badge } from "../components";

type CardProps = {
  name?: string;
  price?: number;
  min_float?: number;
  max_float?: number;
  type?: string;
  rarity?: {
    id?: string;
    name?: string;
  };
  stattrak?: boolean;
  souvenir?: boolean;
  image: string;
  hasFloat?: boolean;
};
export const Card = ({
  name,
  min_float,
  max_float,
  rarity,
  stattrak,
  souvenir,
  image,
  price,
  hasFloat,
}: CardProps) => {
  return (
    <div className="h-[350px] px-10 bg-base-100 shadow-xl bg-slate-100">
      <figure>
        <Image src={image} alt={name || ""} width={300} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name && name}
          <div className="badge badge-secondary">{rarity?.name}</div>
        </h2>
        {hasFloat && (
          <p>
            {max_float && min_float ? (
              //Change to a number range component
              <>
                Float Range: {min_float} - {max_float}{" "}
              </>
            ) : (
              <>Float Range: 0 - 1 </>
            )}
          </p>
        )}
        <div className="card-actions justify-end">
          {stattrak && <Badge> Stat-track </Badge>}
          {souvenir && <Badge> Souvenir </Badge>}
        </div>
        <div>
          {price &&
            Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "USD",
            }).format(price)}
        </div>
      </div>
    </div>
  );
};

export default Card;
