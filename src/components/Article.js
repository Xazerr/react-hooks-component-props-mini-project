import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderMinutes = (minutes) => {
    let emoji = "";
    if (minutes < 30) {
      emoji = "☕️".repeat(Math.ceil(minutes / 5)); 
    } else {
      emoji = "🍱".repeat(Math.ceil(minutes / 10)); 
    }
    return `${emoji} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderMinutes(minutes)}</p>
    </article>
  );
}

export default Article;
