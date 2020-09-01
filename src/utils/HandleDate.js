const handleDate = (value) => {
    let data = new Date(value);
    return data.getDate() + "-" + (data.getUTCMonth() + 1) + "-" + data.getFullYear();
}
export default handleDate;