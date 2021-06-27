// Mutations

export default {
  removeSystem (state, { id, tab }) {
    state.tabs[tab].data.systems = state.tabs[tab].data.systems.filter(s => s.id !== id)
    state.tabs[tab].data.subsystems = state.tabs[tab].data.subsystems.filter(s => s.system_id !== id)
  },
  addLicense (state, { tab, data }) {
    state.tabs[tab].data.subsystems = [...state.tabs[tab].data.subsystems, data]
  }
}
