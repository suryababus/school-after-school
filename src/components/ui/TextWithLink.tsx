import React from "react";

interface TextWithLinkProps {
  text?: string;
  link?: string;
  hrefText?: string;
}

const TextWithLink: React.FC<TextWithLinkProps> = ({
  text,
  link,
  hrefText,
}) => {
  return (
    <>
      {text && <span>{text} </span>}
      {link && (
        <a className="text-blue-600 underline" href={link}>
          {hrefText ?? "here"}
        </a>
      )}
    </>
  );
};

export default TextWithLink;
