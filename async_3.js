async function publishLevel(user_id, level_data) {
    var user = await getUser(user_id);

    return 'ok';
}
function getUser(user_id) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                id: user_id,
                nickname: 'tlhunter'
            });
        }, 100);
    });
}

publishLevel()