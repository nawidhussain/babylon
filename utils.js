
export function retrieveUserData() {
    const params = new URLSearchParams(window.location.search);
    return {
        userId: params.get('user_id') || null,
        username: params.get('username') || null,
        firstName: params.get('first_name') || "Guest",
    };
}
