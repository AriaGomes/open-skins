"use client";
import React, { useEffect, useState } from "react";
import Loading from "../../loading";

export default function Skins({ params }: { params: { id: string } }) {
  const [skin, setSkin] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = params;
  console.log(id);

  useEffect(() => {
    fetch(`/api/skins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSkin(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  console.log(skin);

  return (
    <div className="bg-gray-100 h-full overflow-scroll">
      <div className="flex justify-center items-center w-full">
        {loading ? <Loading /> : <div></div>}
      </div>
    </div>
  );
}
