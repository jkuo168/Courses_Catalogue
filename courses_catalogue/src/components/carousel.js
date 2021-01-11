import React from "react";
import ClassCard from "./card";

export default function Carousel(props) {
  return (
    props.data &&
    props.data.map((course) => {
      return (
        <div key={course.id}>
          <ClassCard data={course} />
        </div>
      );
    })
  );
}
