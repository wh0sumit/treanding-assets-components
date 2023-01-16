import React, { useRef } from "react";
import AssetsCard from "../organism/card/AssetsCard";
import assetsData from "../../data/assetsData.json";
import { Assets as AssetType } from "../../types/assets.type";
export default function Home() {
  const assetDataRef = useRef(assetsData);

  return (
    <React.Fragment>
      <div className="container mx-auto p-20 items-center">
        <div
          className="flex mx-4
        lg:justify-start
        justify-center
        "
        >
          <img
            src="https://ik.imagekit.io/thebugcommunity/assets/common/activity_pGfq_S10-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673896177908"
            alt="logo"
            className="mr-2"
          />
          <h4 className="font-tomorrow font-bold text-secondary">
            Trending Assets
          </h4>
        </div>
        <div
          className="flex flex-wrap mt-12 lg:justify-between
          justify-center
        "
        >
          {assetDataRef?.current?.map((item: AssetType, index: number) => {
            return (
              <div className="mt-24 mx-4" key={index}>
                <AssetsCard assetData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

