import { Button } from '@mui/material'

import { traceSpan } from 'helpers/tracing'

interface Props {
  label: string;
  id?: string;
  secondary?: boolean;
  onClick: () => void;
}

export default (props: Props) => {
  const onClick = (): void =>
    traceSpan(`'${props.label}' button clicked`, props.onClick);

  return (
    <div>
      <Button
        id={props.id}
        variant={"contained"}
        color={props.secondary ? "secondary" : "primary"}
        onClick={onClick}
      >
        {props.label}
      </Button>
    </div>
  );
};
