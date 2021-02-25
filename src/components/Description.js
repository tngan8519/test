import React from "react";
import Link from "@material-ui/core/Link";

export default function Description({ item }) {
  return (
    <div className="description">
      <div>
        <b>Program:</b> {item["program"]}
      </div>
      <div>
        <b>Phase:</b> {item["phase"]}
      </div>
      <div>
        <b>Agency:</b> {item["agency"]}
      </div>
      <div>
        <b>Branch:</b> {item["branch"]}
      </div>
      <div>
        <b>Solicitation Year:</b> {item["solicitation_year"]}
      </div>
      <div>
        <b>Release day:</b> {item["release_date"]}
      </div>
      <div>
        <b>Open day:</b> {item["open_date"]}
      </div>
      <div>
        <b>Close day:</b> {item["close_date"]}
      </div>
      <div>
        <b>Application due date:</b>{" "}
        {item["application_due_date"]?.map((element, index) => {
          if (index !== item["application_due_date"].length - 1) {
            return element + ", ";
          } else {
            return element + ".";
          }
        })}
      </div>

      <div>
        <Link
          href={item["sbir_solicitation_link"]}
          target="_blank"
          rel="noopener"
        >
          Sbir Solicitation Link
        </Link>
      </div>
      <div>
        <Link
          href={item["solicitation_agency_url"]}
          target="_blank"
          rel="noopener"
        >
          Solicitation Agency Url
        </Link>
      </div>
      <div>
        <b>Current Status:</b> {item["current_status"]}
      </div>
    </div>
  );
}
