function calculateDateTime(unixTime) {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTime * 1000;

  // Create a new Date object using the milliseconds
  const date = new Date(milliseconds);

  // Extract the date and time components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Return the formatted date and time
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
