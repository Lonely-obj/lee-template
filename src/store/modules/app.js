import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  lock: false
}

const mutations = {
  TOGGLE_SIDEBAR: (state, isOpen) => {
    if (state.lock === true) {
      state.sidebar.opened = true
    } else {
      state.sidebar.opened = isOpen
    }
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  LOCK_SIDEBAR: (state, lock) => {
    state.lock = lock
  }
}

const actions = {
  toggleSideBar({ commit }, isOpen) {
    commit('TOGGLE_SIDEBAR', isOpen)
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  lockSideBar({ commit }, lock) {
    commit('LOCK_SIDEBAR', lock)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
