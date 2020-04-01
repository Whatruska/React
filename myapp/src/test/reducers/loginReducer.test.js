import loginReducer, {
    loginActionCreator, logoutActionCreator,
    setEmailActionCreator, setErrorMessageActionCreator, setUserDataActionCreator,
    setUserIdActionCreator, toggleFetchActionCreator
} from "../../reducers/loginReducer";


it('fake action creator works properly', () => {
    let action = {
        type : "FAKE"
    };
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(oldState);
});

it('set id action creator works properly', () => {
    let action = setUserIdActionCreator(2);
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 2,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});

it('set email action creator works properly', () => {
    let action = setEmailActionCreator("vitdub@inbox.ru");
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 1,
        email : "vitdub@inbox.ru",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});

it('login action creator works properly', () => {
    let action = loginActionCreator();
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 1,
        email : "test@email",
        isLogged : true,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});

it('logout action creator works properly', () => {
    let action = logoutActionCreator();
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : true,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});

it('fetching action creator works properly', () => {
    let action = toggleFetchActionCreator();
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : true,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
    let newState2 = loginReducer(expected, action);
    expect(newState2).toStrictEqual(oldState);
});

it('error action creator works properly', () => {
    let action = setErrorMessageActionCreator("error");
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : ["error"]
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});

it('set data action creator works properly', () => {
    let action = setUserDataActionCreator({
        userId : 12,
        email : "vitdub@inbox.ru",
    });
    let oldState = {
        userId : 1,
        email : "test@email",
        isLogged : false,
        isFetching : false,
        errorMessage : undefined
    };

    let expected = {
        userId : 12,
        email : "vitdub@inbox.ru",
        isLogged : true,
        isFetching : false,
        errorMessage : undefined
    };
    let newState = loginReducer(oldState, action);
    expect(newState).toStrictEqual(expected);
});