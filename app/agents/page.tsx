"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import Link from "next/link";
import { Grid } from "../components/Grid";
import agentsData from "../api/agents/data/agents.json";
import Loading from "../loading";

export default function Agents() {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAgents(agentsData as any[]);
    setLoading(false);
  }, []);

  console.log(agents);

  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <Grid>
            {agents.map((agent: any) => (
              <Link href={`/agents/${agent.id}`} key={agent.id}>
                <Card
                  name={agent.name}
                  rarity={agent.rarity}
                  image={agent.image}
                  price={agent.price?.["7_days"]?.average}
                />
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
