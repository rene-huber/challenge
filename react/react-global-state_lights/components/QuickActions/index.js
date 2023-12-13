import styled from "styled-components";
import Button from "../Button";
import useStore from '../../store'; // Importa la tienda Zustand

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const turnOffAllLights = useStore(state => state.turnOffAllLights);
  const turnOnAllLights = useStore(state => state.turnOnAllLights);

  return (
    <StyledQuickActions>
      <Button type="button" onClick={turnOffAllLights}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnOnAllLights}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
