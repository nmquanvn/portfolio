import React from "react";

export const LinkConverter = ({ text }: any) => {
    // Regular expression to identify all links in the text
    const partRegex = /\((https?:\/\/[^\s]+)\)\[([^\]]+)\]/g;

    // Split the text into parts using the regex
    const parts: string[] = text.split(partRegex);

    const urlRegex =
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

    let marks: number[] = [];
    parts.map((part: string, index: number) => {
        if (part.match(urlRegex)) return marks.push(index + 1);
        else return false;
    });

    // If there are matches, render the text with converted links; otherwise, render the original text
    return (
        <div>
            {parts.map((part: string, index: any) =>
                part.match(urlRegex) && marks.includes(index + 1) ? (
                    <a
                        key={index}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {parts[index + 1]}
                    </a>
                ) : !marks.includes(index) ? (
                    <span key={index}>{part}</span>
                ) : null,
            )}
        </div>
    );
};
