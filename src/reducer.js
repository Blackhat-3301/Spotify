/**NOTE: this is not a component, a reducer data for the StateProvider  */

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    song: null, /** changeable to item */
    /** Remove after finished developing... */
    token: 'BQCkBegMhVAUNlGtirDSE0w7bRgNCLBbLtwtEQZs_9DJr_E5rQmN3_BOf33NagGceX-Hz2n_uUVxxtgkpXsDX5kCMPf0DEkZUnNzSNBSg0fdkdziCl24zviDRIi3KQYj-7p_G5E_WsTtJnq-RZq35yWk31aKmhdnPoWpTIZ_WqTM_72Igi4QiG1svBrbyeVvk6LhJmcAgn6Kn2l9zCaz'
}

// the reducer

const reducer = (state, /** Dispatch */ action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        default:
            return state;
    }
}

export default reducer