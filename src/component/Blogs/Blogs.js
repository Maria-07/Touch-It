import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className=" text-4xl mt-10 text-teal-700">Blog Part</h2>
      <article className="container mx-auto mt-28 mb-32">
        <div className="blog text-left w-4/5  py-5">
          <h1 className=" text-3xl text-teal-700">What API Context means ?</h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> if we want
            to send data to any of the child components from the parent
            component, the API context helps us to send data without using props
            to those child components. <br /> it's challenging with an
            application with a lot of nested components. At any level, the
            Context API allows you to communicate information straight from a
            parent component to a child component.
          </p>
        </div>
        <div className="blog text-left w-4/5 py-5">
          <h1 className=" text-3xl text-teal-700">What Semantic tag means ?</h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> Semantic
            HTML, also known as semantic markup, is HTML that adds meaning to a
            web page rather than merely making it look pretty. The enclosing
            text is a paragraph, as indicated by the tag. Because people
            understand what paragraphs are and how to display them, this is both
            semantic and presentational. on the other hand, if there do not have
            any semantic value. They merely specify how the text should be
            formatted (bold or italic) <br /> <br />
            By including semantic tags in our text, we can convey more
            information about it, which can help with communication. Semantic
            tags, in particular, make it apparent to the browser what a page and
            its content signify. This clarity is passed on to search engines,
            ensuring that the correct pages are delivered for the correct
            queries.
            <br />
            <span className=" text-xl">
              article, aside, details, footer, nav etc are semantic tags.
            </span>
          </p>
        </div>
        <div className="blog text-left w-4/5 py-5">
          <h1 className=" text-3xl text-teal-700">
            Difference between block inline and inline block elements ?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> A Block
            element takes up the entire horizontal space of its parent element
            (container) as well as the vertical full space equivalent to the
            height of its contents, forming a "block." <br />
            <span className=" text-xl">
              div, h1, p, li, section etc are block elements.
            </span>{" "}
            <br /> <br />
            An inline element does not begin on a new line and only takes up the
            space required. It easily can adjust with other elements. There will
            be no effect on the height and width properties. We can not set
            margin value in an inline elements. <br />
            <span className=" text-xl">
              span, a, img, em, strong, i, small etc are inline elements.
            </span>{" "}
            <br /> <br /> <br />
            inline-block It's formatted similarly to the inline element, with
            the exception that it doesn't begin on a new line. You can, however,
            change the width and height of the image.
            <span className=" text-xl">
              article, aside, details, footer, nav etc are semantic tags.
            </span>{" "}
            <br /> <br />
          </p>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
