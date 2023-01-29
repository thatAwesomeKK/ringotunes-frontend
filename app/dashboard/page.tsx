"use client";
import React from "react";
import { BsHeart, BsMusicNoteList } from "react-icons/bs";
import { HiFolderDownload } from "react-icons/hi";
import useSWR from "swr";
import { fetchUserRings } from "../../util/fetchers/fetchers";
import { useAuthContext } from "../Context/AuthContext";
import Feed from "./Feed";
import Widget from "./Widget";
import { Unbounded } from "@next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500"],
});

const Dashboard = () => {
  const { token } = useAuthContext();
  const {
    data: dash,
    error,
    isValidating,
    isLoading,
  } = useSWR(token ? "/dashboard" : null, () =>
    fetchUserRings(token, "/user/dash")
  );

  console.log(dash);

  return (
    <div className="flex flex-col justify-center items-center mt-24 space-y-24">
      <h1 className={`${unbounded.className} text-4xl`}>Welcome, {dash?.uid.username}!</h1>
      <div className="flex flex-row items-center justify-between w-[80%]">
        <Widget
          key={1}
          name={"Liked Rings"}
          analytic={dash?.likesCount}
          Icon={BsHeart}
          color={"bg-red-300"}
          iconColor={"text-red-700"}
        />
        <Widget
          key={2}
          name={"Your Rings"}
          analytic={dash?.rings?.length}
          Icon={BsMusicNoteList}
          color={"bg-yellow-300"}
          iconColor={"text-yellow-700"}
        />
        <Widget
          key={3}
          name={"Downloaded Rings"}
          analytic={dash?.downloadsCount}
          Icon={HiFolderDownload}
          color={"bg-blue-300"}
          iconColor={"text-blue-700"}
        />
      </div>
      <Feed rings={dash?.rings} />
    </div>
  );
};

export default Dashboard;
