const emailFenderConfig = { serverId: 5941, active: true };

const emailFenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5941() {
    return emailFenderConfig.active ? "OK" : "ERR";
}

console.log("Module emailFender loaded successfully.");