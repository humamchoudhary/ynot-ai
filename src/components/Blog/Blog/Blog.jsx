import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Nav/Nav";
import BlogImg from "../../../assets/blogimg.webp";
import { HashLink } from "react-router-hash-link";

const Blog = () => {
  const { id } = useParams();

  const blog_list = [
    {
      title: "Test Blog",
      desc: "This is a test",
      cat: "Category",
      img: BlogImg,
      writer: "Muhammad Humam",
      url: "test-blog",
    },
    {
      title: "Test Blog2",
      desc: "This is a test",
      cat: "Category",
      img: BlogImg,
      writer: "Muhammad Humam",
      url: "test-blog2",
      blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit.<strong>test</strong> Porro ipsa enim  fuga eos ad labore, veritatis soluta ipsum quo voluptas atque unde eum incidunt animi error ab quaerat possimus? Quibusdam aut eius autem odio excepturi quae in maxime ipsum dolorum tempora soluta nihil ut, doloremque dolorem ipsam tempore, nesciunt labore quasi nobis iusto cumque ex numquam placeat ad! Libero dolorem provident dignissimos qui tempore labore ad ipsum cumque sit est enim odit, neque facilis voluptates, beatae commodi laboriosam eligendi. Voluptatem cum facere odio totam unde nulla, omnis tempore quisquam in similique beatae doloremque rem eos? Id quisquam accusantium aut. Quos.",
    },
  ];
  return (
    <div>
      <div className="bg-mid">
        <Navbar></Navbar>
      </div>
      <div className="main-marg">
        <h1 className="font-extrabold text-3xl text-center pt-24 text-bg pb-12 ">
          {id}
        </h1>
        <div className="grid grid-cols-2 gap-20">
          {blog_list.map((blog) => {
            return (
              <HashLink to={blog.url}>
                <div className="flex flex-row gap-14 hover:cursor-pointer hover:opacity-90 bg-hover bg-opacity-50 duration-300 rounded-lg border-2 hover:border-cta border-dark">
                  <img
                    src={blog.img}
                    alt="blog thumbnail"
                    className=" w-full rounded-lg"
                  />
                  <div className=" w-full py-4 flex flex-col rounded-lg justify-between text-dark">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-xl">{blog.title}</h3>
                      <p className=" font-semibold text-md">{blog.desc}</p>
                    </div>
                    <p>{blog.writer}</p>
                  </div>
                </div>
              </HashLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
