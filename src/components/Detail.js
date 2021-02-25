import React from "react";
import Link from "@material-ui/core/Link";

export default function Detail({ topic }) {
  return (
    <div>
      <div>
        <b>Topic Title:</b> {topic["topic_title"]}
      </div>
      <div>
        <b>Branch:</b> {topic["branch"]}
      </div>
      <div>
        <b>Topic Number:</b> {topic["topic_number"]}
      </div>
      <div>
        <b>Topic Description:</b> {topic["topic_description"]}
      </div>
      <div>
        <Link href={topic["sbir_topic_link"]} target="_blank" rel="noopener">
          Sbir Topic Link
        </Link>
      </div>
      {topic["subtopics"]?.length !== 0 && (
        <>
          <div>
            <b>Subtopic:</b>
          </div>
          {topic["subtopics"].map((sub, index) => (
            <div paragraph key={index}>
              <div>
                <b>Subtopic Title:</b> {sub["subtopic_title"]}
              </div>
              <div>
                <b>Branch:</b> {sub["branch"]}
              </div>
              <div>
                <b>Subtopic Number:</b> {sub["subtopic_number"]}
              </div>
              {sub["subtopic_description"] !== "" && (
                <div>
                  <b>Subtopic Description:</b> {sub["subtopic_description"]}
                </div>
              )}
              <div>
                <Link
                  href={sub["sbir_subtopic_link"]}
                  target="_blank"
                  rel="noopener"
                >
                  Sbir Subtopic Link
                </Link>
              </div>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
