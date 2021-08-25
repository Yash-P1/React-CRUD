import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function HomeRoute() {
  const history = useHistory();

  return (
    <div>
      <Button type="button" onClick={() => history.push("/create")}>
        Add Data
      </Button>
      <Button type="button" onClick={() => history.push("/read")}>
        Read Data
      </Button>
    </div>
  );
}
