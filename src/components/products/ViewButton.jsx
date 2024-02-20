"use client";
import React from "react";
import Link from "next/link";

const ViewButton = ({ openlink }) => {
  return (
    <Link className="viewButton" href={openlink}>
      View
    </Link>
  );
};

export default ViewButton;
