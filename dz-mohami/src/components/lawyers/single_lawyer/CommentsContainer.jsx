"use client";
import { useTranslation } from "react-i18next";
import SingleComment from "./SingleComment";

const CommentsContainer = ({ email }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  // some comments for testing
  const comments = [
    {
      email: "y_allaoua@estin.dz",
      commentContent: "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/placeholder.png",
      rating: 3.4,
    },
    {
      email: "y_allaoua@estin.dz",
      commentContent: "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/placeholder.png",
      rating: 3.4,
    },
    {
      email: "y_allaoua@estin.dz",
      commentContent: "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/placeholder.png",
      rating: 4.4,
    },
    {
      email: "y_allaoua@estin.dz",
      commentContent: "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/placeholder.png",
      rating: 5,
    },
  ];
  return (
    <section className={` flex flex-col gap-5 ${lng == "ar" && "items-end"} `}>
      <h4 className=" font-semibold capitalize text-[#353535] text-2xl ">{t("comments")}</h4>
      <SingleComment
        newComment={true}
        email={email}
        image={"/placeholder.png"}
      />
      {comments?.map((comment, index) => {
        return (
          <SingleComment
            key={index}
            email={comment.email}
            commentContent={comment.commentContent}
            image={comment.image}
            newComment={false}
            rating={comment.rating}
          />
        );
      })}
    </section>
  );
};
export default CommentsContainer;
