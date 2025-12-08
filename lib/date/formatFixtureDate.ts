export function formatFixtureDate(dateTimeString: string) {

    // return example: {date: "05 Oct", startTime: "14:00"}
    const date = new Date(dateTimeString);
    const optionsDate: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime);
    return { date: formattedDate, startTime: formattedTime };

}