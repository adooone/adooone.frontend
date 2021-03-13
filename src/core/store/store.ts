import packageJson from '../../../package.json';

const initialState = {
  loading: true,
  // selectedMenu: MENU_HOME,
  // selectedMenu: MENU_PORTFOLIO,
  selectedTopic: null,
  isAuthorizationOpened: false,
  setLogged: false,
  user: {},
  app: {
    front: {
      version: packageJson.version,
    },
    core: {
      version: '',
    },
  },
  projects: [],
  setState: (_: any) => null,
};

type StoreType = typeof initialState;

const actions = {
  setAppLoading: (store: StoreType, value: any) => {
    store.setState({ loading: value });
  },
  selectMenuItem: (store: StoreType, value: any) => {
    store.setState({ selectedMenu: value });
  },
  setAuthorizationOpen: (store: StoreType, value: any) => {
    store.setState({ isAuthorizationOpened: value });
  },
  setLogged: (store: StoreType, value: any) => {
    store.setState({ setLogged: value });
  },
  setCoreData: (store: StoreType, value: any) => {
    // const newState = _.cloneDeep(store.state);
    // newState.app.core = value;
    // store.setState(newState);
  },
  setProjects: (store: StoreType, value: any) => {
    store.setState({ projects: value });
  },
  setTopic: (store: StoreType, value: any) => {
    store.setState({ selectedTopic: value });
  },
};
type ActionsType = typeof actions;

const useGlobal = (): [typeof initialState, ActionsType] => {
  return [initialState, actions];
};

export default useGlobal;
