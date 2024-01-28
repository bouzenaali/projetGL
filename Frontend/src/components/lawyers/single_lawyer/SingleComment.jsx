"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setNewCommentInfo } from "@/store/features/single_lawyer/singleLawyerSlice";
import StarRatings from "react-star-ratings";
import { Button } from "@/components/ui/button";
import { BsFillSendFill } from "react-icons/bs";
const SingleComment = ({ email, image, commentContent, newComment, rating }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { newCommentContent, newCommentRating } = useSelector((store) => store.singleLawyer);
  const changeHandler = (name, value) => {
    dispatch(setNewCommentInfo({ name, value }));
  };
  const lng = i18n.language;
  return (
    <div className={`w-full bg-white p-5 rounded-8 flex flex-col gap-4 ${lng == "ar" && "items-end"}  `}>
      {/* this is the top section */}
      <div className={`img-container flex items-center gap-5 ${lng == "ar" && "flex-row-reverse"}   `}>
        <Image
          width={50}
          height={50}
          className=" rounded-full object-cover "
          src={image}
        />
        <div className={`email-container flex flex-col gap-1 ${lng == "ar" && "items-end"} `}>
          <span className=" text-[#061C3D] text-sm  font-semibold ">{t("your comment")}</span>
          <span className=" text-[#42526B] text-xs  font-semibold  ">{email}</span>
        </div>
      </div>
      {/* this is the input */}
      {newComment && (
        <input
          type="text"
          className={`w-full border-none outline-none text-base placeholder:text-sm ${lng == "ar" && "text-end"} `}
          placeholder={t("your comment")}
          name="newCommentContent"
          value={newCommentContent}
          onChange={(e) => {
            changeHandler("newCommentContent", e.target.value);
          }}
        />
      )}
      {!newComment && <p className={` font-medium  text-[#061C3D] ${lng == "ar" && "text-right"}    `}>{commentContent}</p>}
      <div className={`rating-container flex justify-between w-full ${lng == "ar" && "flex-row-reverse"} `}>
        {newComment && (
          <div className={`rating-container flex justify-between w-full ${lng == "ar" && "flex-row-reverse"} `}>
            <StarRatings
              rating={newCommentRating}
              starRatedColor="#FF8800"
              changeRating={(newRating) => {
                changeHandler("newCommentRating", newRating);
              }}
              numberOfStars={5}
              starEmptyColor="#E2E8F0"
              starHoverColor="#FF8800"
              name="rating"
              starDimension="20px"
              starSpacing="2px"
            />
            <Button variant="primary">
              <BsFillSendFill
                className={`text-white `}
                size={17}
              />
            </Button>
          </div>
        )}
        {!newComment && (
          <StarRatings
            rating={rating}
            starRatedColor="#FF8800"
            numberOfStars={5}
            starEmptyColor="#E2E8F0"
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
        )}
      </div>
    </div>
  );
};
export default SingleComment;
