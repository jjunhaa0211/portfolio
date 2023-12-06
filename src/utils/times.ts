export const timeString = (time: number) => {
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    return minute === 0 ? `${hour}h` : `${hour}h ${minute}m`;
}