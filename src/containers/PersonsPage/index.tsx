import React from "react";

import { apiFetch } from "helpers/api";
import { Context, toggleProgressIndicator } from "helpers/context";
import { ILink } from "types/types";

import PersonsList from "./PersonsList";

import TracingButton from "components/TracingButton";
import { traceSpan } from "helpers/tracing";

export default () => {
  const [_, dispatch] = React.useContext(Context);
  const [persons, setPersons] = React.useState<ILink[]>([]);

  const fetchPersons = async (): Promise<void> => {
    toggleProgressIndicator(dispatch);

    setPersons([]);
    try {
      const persons = await apiFetch<{ count: number; entries: ILink[] }>(
        `https://api.publicapis.org/entries`
      );
      traceSpan("persons", () => {
        toggleProgressIndicator(dispatch);
        setPersons(persons.entries);
      });
    } catch (e) {
      traceSpan("error", () => {
        toggleProgressIndicator(dispatch);
      });
    }
  };

  return (
    <div>
      <header>
        <p>Sample Signoz React Instrumentation App</p>
      </header>

      <TracingButton
        id="test-fetch-persons-button"
        label={"Fetch Links"}
        onClick={fetchPersons}
      />
      {persons.length > 0 && (
        <React.Fragment>
          <div id="test-persons-count-text">Found {persons.length} persons</div>
          <PersonsList persons={persons} />
        </React.Fragment>
      )}
    </div>
  );
};
