"use client";
import { useUser } from "@/contexts/UserContext";
import { Separator } from "@/components/ui/separator";
import RechargeItem from "@/components/RechargeItem";
import { useEffect } from "react";
import { useState } from "react";
import { URL } from "@/constant/url";
type Item = {
  amount: number;
  price: number;
  id: number;
};

export default function Page() {
  const [user, setUser] = useUser();
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    // fetch(`${url}/item`)
    fetch("http://206.238.113.198:3000/item")
      .then((response) => response.json())
      .then((data: Item[]) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="justify-center items-center flex flex-col bg-slate-50 my-10 rounded-lg w-full lg:w-1/2 lg:mx-auto ">
      <div className="mt-10 font-bold">
        <p>Top Up Account Detail</p>
      </div>
      <div className="flex-col flex items-start bg-[#E5E4E2] p-10 rounded-lg my-10 font-bold text-gray-400">
        {/* <div className="flex flex-col sm:flex-row"><p>Server: </p><p className="text-black ml-2">{user?.server}</p></div> */}
        <div className="flex flex-col sm:flex-row">
          <p>User ID: </p>
          <p className="text-black ml-2">{`${user?.id}`}</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <p>Username: </p>
          <p className="text-black ml-2">{user?.username}</p>
        </div>
        {/* <div className="flex flex-col sm:flex-row"><p>Account: </p><p className="text-black ml-2">{user?.account}</p></div> */}
        {/* <div className="flex flex-col sm:flex-row"><p>Diamond: </p><p className="text-black ml-2">{`${user?.daimond}`}</p></div> */}
      </div>
      <Separator className="my-10" />
      <div className="font-bold">
        <p>Select Item</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 my-10">
        {data.map((item, index) => {
          return (
            <RechargeItem
              key={index}
              amount={item.amount}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
