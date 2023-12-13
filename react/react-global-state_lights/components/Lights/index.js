// Lights.js
import styled from "styled-components";
import Light from "../Light";
import useStore from '../../store.js'; // Importa la tienda Zustand

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const { lights, toggleLight } = useStore(); // Usa la tienda

  return (
    <StyledLights>
      {lights.map(light => (
        <li key={light.id}>
          <Light 
            name={light.name} 
            isOn={light.isOn} 
            onToggle={() => toggleLight(light.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}
