import { create } from 'zustand'
import LightsState from './components/LightsState';

const useStore = create(set => ({

  lights: LightsState(),
  
  toggleLight: (id) => set(state => ({
    lights: state.lights.map(light =>
      light.id === id ? { ...light, isOn: !light.isOn } : light
    )
  })),

  turnOffAllLights: () => set(state => ({
    lights: state.lights.map(light => ({ ...light, isOn: false }))
  })),
  turnOnAllLights: () => set(state => ({
    lights: state.lights.map(light => ({ ...light, isOn: true }))
  }))

}));

export default useStore;
