import initialReducer, {initFinishActionCreator} from "../../reducers/initialReducer";

it('init action creator works properly', () => {
    let action = initFinishActionCreator();
    let oldState = {
        isInitialized : false
    };
    let newState = initialReducer(oldState, action);
    let expected = {
        isInitialized: true
    };
    expect(newState).toStrictEqual(expected);
});

it('fake action creator works properly', () => {
    let action = {
        type : "FAKE"
    };
    let oldState = {
        isInitialized : false
    };
    let newState = initialReducer(oldState, action);
    let expected = {
        isInitialized: false
    };
    expect(newState).toStrictEqual(expected);
});

