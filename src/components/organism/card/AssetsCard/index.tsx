import React from "react";
import { Assets as AssetType } from "../../../../types/assets.type";

export default function AssetsCard(
  props: React.PropsWithChildren<{ assetData: AssetType }>
) {
  const { assetData } = props;
  return (
    <React.Fragment>
      <div className="assets_card flex justify-center h-[350px] w-[290px] relative">
        <div className="assets_card__image">
          <div
            className={`asset_icon absolute left-24  -top-14 border-solid border-[1px] border-[#303449] w-fit h-fit p-6 rounded-full backdrop-blur-[50px] ${assetData?.asset_name}`}
          >
            <img
              className="w-12"
              src={assetData?.asset_imgURL}
              alt={assetData?.asset_name}
            />
          </div>
        </div>
        <div className="text-center mt-16 assets_card__content">
          <div className="assets_card__content__title">
            <h5
              className="font-semibold text-center text-primary font-tomorrow 
              text-[12px]
              mt-2
            "
            >
              {assetData?.asset_type}
            </h5>
          </div>
          <div
            className="flex justify-center bg-[#14172B] mt-4 text-secondary font-assets-tomorrow font-semibold text-base rounded-[17px] w-[242px] h-[40px] border-solid border-x-[1px] border-t-[1.55px] border-[#2A2D40]
          items-center gap-2
          "
          >
            <p
              className="font-bold text-secondary font-tomorrow
            text-[16px]
            "
            >
              ${assetData?.asset_pricing?.price}
            </p>
            <h4
              className={`font-bold 
            ${
              assetData?.asset_pricing?.increment
                ? "text-success"
                : "text-danger"
            }
            font-tomorrow text-[12px]`}
            >
              {assetData?.asset_pricing?.percentage}
            </h4>
          </div>
          <div className="assets_card__content__title top-[121px]">
            <h5
              className="font-semibold text-center text-[#5A5F7D] font-tomorrow 
              text-[12px]
              mt-2
            "
            >
              Price
            </h5>
          </div>
          <div
            className="flex justify-center bg-[#14172B] mt-4 text-secondary font-assets-tomorrow font-semibold text-base rounded-[17px] w-[242px] h-[40px] border-solid border-x-[1px] border-t-[1.55px] border-[#2A2D40]
          items-center gap-2
          "
          >
            <p
              className="font-bold text-secondary font-tomorrow
            text-[16px]
            "
            >
              ${assetData?.asset_tvl?.price}
            </p>
          </div>
          <div className="assets_card__content__title top-[121px]">
            <h5
              className="font-semibold text-center text-[#5A5F7D] font-tomorrow 
              text-[12px]
              mt-2
            "
            >
              {assetData?.asset_tvl.title}
            </h5>
          </div>
          <div className="bg-[#14172B] mt-4 text-secondary pt-2 font-assets-tomorrow font-semibold text-base rounded-[30px] w-fit h-[40px] flex justify-center items-center gap-4 px-4 p-2 mx-auto">
            <img
              className="w-6"
              src={assetData?.asset_popular_pairs.firstIcon}
              alt={assetData?.asset_name}
            />
            <img
              className="w-6"
              src={assetData?.asset_popular_pairs.secondIcon}
              alt={assetData?.asset_name}
            />
            <img
              className="w-6"
              src={assetData?.asset_popular_pairs.thirdIcon}
              alt={assetData?.asset_name}
            />
          </div>
          <div className="assets_card__content__title top-[121px]">
            <h5
              className="font-semibold text-center text-[#5A5F7D] font-tomorrow 
              text-[12px]
              mt-2
            "
            >
              Popular pairs
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

