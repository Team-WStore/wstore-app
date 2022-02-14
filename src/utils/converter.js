export const getDateFrom = (fecha) => {
    const date = new Date(fecha);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`;
}